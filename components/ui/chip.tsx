import { cn } from "@/lib/utils";

interface ChipProps {
  children: React.ReactNode;
  className?: string;
  variant?: "default" | "inverse";
}

export function Chip({ children, className, variant = "default" }: ChipProps) {
  return (
    <div
      className={cn(
        "type-mono-xs inline-flex items-center gap-1.5 border border-b-[1.5px] border-l-[0.75px] border-r-[0.75px] border-t-[0.75px] px-2 pb-1.5 pt-1",
        variant === "default" && "border-brand-strong text-brand-strong",
        variant === "inverse" && "border-white/30 text-white",
        className
      )}
    >
      <span
        className={cn(
          "size-[2.2px] rounded-[0.5px]",
          variant === "default" && "bg-brand-strong",
          variant === "inverse" && "bg-white"
        )}
      />
      {children}
    </div>
  );
}
