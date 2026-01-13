# Payment Tracker (SAP CAP)

A lightweight payment tracking service built with **SAP Cloud Application Programming Model (CAP)**.
It provides a simple backend to manage payments, statuses, and basic reporting.

## Tech stack
- SAP CAP (Node.js)
- CDS models (`db/`)
- Service layer (`srv/`)
- SAP BTP deployment via **MTA** (`mta.yaml`)
- Security config (`xs-security.json`)

## Features (current)
- Create / list / update payments
- Track status (e.g. pending / paid / overdue)
- Basic validation and structured data model

## Project structure
- `db/` – data model (CDS)
- `srv/` – services (CDS + handlers)
- `app/` – UI placeholder (optional)

## Local setup
### Prerequisites
- Node.js LTS
- `@sap/cds-dk`

```bash
npm install
cds watch
