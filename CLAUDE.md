# Ralph Test App

Simple Express.js REST API with JWT authentication.

## Stack
- Node.js (no TypeScript, keep it simple)
- Express.js for HTTP
- better-sqlite3 for database
- jsonwebtoken for JWT auth
- bcryptjs for password hashing
- Node built-in test runner (node --test)

## Commands
- Install: `npm install`
- Run: `npm start`
- Dev: `npm run dev`
- Test: `npm test`

## Structure
- `src/index.js` - App entry point
- `src/routes/` - Express route handlers
- `src/middleware/` - Auth middleware
- `src/db.js` - Database setup
- `tests/` - Test files using node:test
