# Configuration

## Environments
- Local development uses SQLite (see `package.json`).
- Production deployment targets SAP HANA via `mta.yaml`.

## Authentication
- Local development uses dummy authentication.
- Production uses XSUAA with configuration in `xs-security.json`.
