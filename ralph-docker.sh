#!/bin/bash
# ralph-docker.sh — Runs Ralph loop inside a Docker container (sandboxed)
#
# Safety guarantees:
#   ✅ Code changes happen INSIDE the container only
#   ✅ Host filesystem is untouched
#   ✅ Network access for web search and MCP proxies
#   ❌ Cannot write to host files
#   ❌ Cannot access ~/.claude, ~/.ssh, or system dirs
#
# After Ralph finishes, use 'docker cp' to extract the results you want.
#
# Usage:
#   ./ralph-docker.sh              # Run until complete
#   ./ralph-docker.sh 5            # Max 5 iterations
#   ./ralph-docker.sh extract      # Copy results from last container to host

set -e

IMAGE_NAME="ralph-sandbox"
CONTAINER_NAME="ralph-runner"
PROJECT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
MAX_ITERATIONS="${1:-0}"

# ──────────────────────────────────────
# Extract mode: copy results from container
# ──────────────────────────────────────
if [ "$1" = "extract" ]; then
    echo "Extracting results from container '$CONTAINER_NAME'..."

    if ! docker ps -a --format '{{.Names}}' | grep -q "^${CONTAINER_NAME}$"; then
        echo "Error: No container named '$CONTAINER_NAME' found."
        echo "Run './ralph-docker.sh' first."
        exit 1
    fi

    # Create output directory
    OUTPUT_DIR="$PROJECT_DIR/ralph-output-$(date +%Y%m%d-%H%M%S)"
    mkdir -p "$OUTPUT_DIR"

    # Copy the workspace from container
    docker cp "${CONTAINER_NAME}:/home/ralph/workspace/." "$OUTPUT_DIR/"

    echo ""
    echo "✓ Results extracted to: $OUTPUT_DIR"
    echo ""
    echo "To review what Ralph built:"
    echo "  cd $OUTPUT_DIR"
    echo "  git log --oneline"
    echo "  npm test"
    echo ""
    echo "To merge into your project:"
    echo "  cp -r $OUTPUT_DIR/src/ $PROJECT_DIR/src/"
    echo "  cp -r $OUTPUT_DIR/tests/ $PROJECT_DIR/tests/"
    echo ""
    echo "To clean up the container:"
    echo "  docker rm $CONTAINER_NAME"
    exit 0
fi

# ──────────────────────────────────────
# Build the sandbox image
# ──────────────────────────────────────
echo "Step 1: Building sandbox image..."
echo "  - This copies your project into a Docker image"
echo "  - Host files are NOT mounted (snapshot only)"
echo ""

docker build -f Dockerfile.ralph -t "$IMAGE_NAME" "$PROJECT_DIR" 2>&1

echo ""
echo "✓ Sandbox image built"
echo ""

# ──────────────────────────────────────
# Clean up any existing container
# ──────────────────────────────────────
if docker ps -a --format '{{.Names}}' | grep -q "^${CONTAINER_NAME}$"; then
    echo "Removing previous container..."
    docker rm -f "$CONTAINER_NAME" > /dev/null 2>&1
fi

# ──────────────────────────────────────
# Find ralph prompt file
# ──────────────────────────────────────
PLUGIN_DIR=$(ls -d "$HOME/.claude/plugins/cache/rydeventures-claude-plugins/ralph"/*/ 2>/dev/null | tail -1)
if [ -n "$PLUGIN_DIR" ] && [ -f "${PLUGIN_DIR}scripts/ralph-prompt.md" ]; then
    PROMPT_FILE="${PLUGIN_DIR}scripts/ralph-prompt.md"
else
    echo "Error: Ralph prompt file not found."
    exit 1
fi

PROMPT_CONTENT=$(cat "$PROMPT_FILE")

# ──────────────────────────────────────
# Run Ralph inside the container
# ──────────────────────────────────────
echo "Step 2: Starting Ralph in sandbox..."
echo "  - Container: $CONTAINER_NAME"
echo "  - Max iterations: $([ "$MAX_ITERATIONS" -eq 0 ] && echo "unlimited" || echo "$MAX_ITERATIONS")"
echo "  - Permissions: --dangerously-skip-permissions (inside container only)"
echo "  - Host access: NONE (sandboxed)"
echo ""

ITER=1

while [ "$MAX_ITERATIONS" -eq 0 ] || [ "$ITER" -le "$MAX_ITERATIONS" ]; do
    # Check stories status
    if [ "$ITER" -gt 1 ]; then
        INCOMPLETE=$(docker exec "$CONTAINER_NAME" jq '[.stories[] | select(.passes == false)] | length' .ralph/stories.json 2>/dev/null || echo "?")
        if [ "$INCOMPLETE" = "0" ]; then
            echo "✓ All stories complete!"
            echo ""
            echo "Run './ralph-docker.sh extract' to get the results."
            exit 0
        fi
    fi

    echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
    if [ "$MAX_ITERATIONS" -eq 0 ]; then
        echo "Ralph (sandboxed) Iteration $ITER"
    else
        echo "Ralph (sandboxed) Iteration $ITER / $MAX_ITERATIONS"
    fi
    echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
    echo ""

    if [ "$ITER" -eq 1 ]; then
        # First iteration: create container
        docker run -d \
            --name "$CONTAINER_NAME" \
            --network host \
            "$IMAGE_NAME" \
            sleep infinity > /dev/null

        # Run Claude inside container
        docker exec "$CONTAINER_NAME" bash -c "echo '$PROMPT_CONTENT' | claude --dangerously-skip-permissions --print" 2>&1
    else
        # Subsequent iterations: reuse container
        docker exec "$CONTAINER_NAME" bash -c "echo '$PROMPT_CONTENT' | claude --dangerously-skip-permissions --print" 2>&1
    fi

    EXIT_CODE=$?
    echo ""

    if [ $EXIT_CODE -eq 0 ]; then
        echo "✓ Iteration $ITER complete"
    else
        echo "✗ Iteration $ITER failed (exit code $EXIT_CODE)"
    fi

    echo ""
    sleep 2
    ((ITER++))
done

echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
echo "⚠ Reached max iterations ($MAX_ITERATIONS)"
echo ""
echo "To extract results: ./ralph-docker.sh extract"
echo "To continue:        ./ralph-docker.sh"
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
exit 1
