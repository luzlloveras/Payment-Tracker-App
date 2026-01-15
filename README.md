# Payment Tracker (SAP CAP)

Payment Tracker is a small SAP CAP app for tracking invoices and payment status.
It includes a CDS data model, a service layer, and a lightweight UI shell.
Local development uses SQLite, while deployment targets SAP BTP via MTA.
The goal is a clean, minimal baseline suitable for portfolio review.

## High-level overview
- `db/` for CDS data models
- `srv/` for CAP services
- `app/` for the UI module

## Run locally
1. `npm install`
2. `cds deploy --to sqlite:db.sqlite`
3. `npm run start-local` (defaults to `http://localhost:4004`)

## Documentation
- Installation and usage: `docs/installation.md`
- API and URLs: `docs/api.md`
- Troubleshooting: `docs/troubleshooting.md`

## License
UNLICENSED
