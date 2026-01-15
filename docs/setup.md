# Local Setup

## Prerequisites
- Node.js LTS
- npm (bundled with Node.js)

No SAP accounts or licenses are required for local development.

## Install and run
1. Clone the repository and enter it.
2. Install dependencies with `npm install`.
3. Initialize the database with `cds deploy --to sqlite:db.sqlite`.
4. Start the app with `npm run start-local` (or `cds watch`).

## Available scripts
- `npm run start-local` starts the app in development mode with `cds watch`
- `npm run start` starts the app in production mode with `cds-serve`
- `npm run cds-watch` is an alias for `cds watch`
