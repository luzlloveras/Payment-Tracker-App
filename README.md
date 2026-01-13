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
- **Node.js LTS** (Long Term Support version)
- **npm** (comes with Node.js)

> **Note:** No SAP accounts or licenses required. All dependencies are publicly available on npm.

### Installation & Setup

1. **Clone the repository**
   ```bash
   git clone https://github.com/luzlloveras/Payment-Tracker-App.git
   cd Payment-Tracker-App
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```
   This will install all required packages including `@sap/cds-dk` (SAP CAP Development Kit).

3. **Initialize the database**
   ```bash
   cds deploy --to sqlite:db.sqlite
   ```
   This creates the SQLite database and loads sample data.

4. **Start the application**
   ```bash
   npm run start-local
   ```
   Or alternatively:
   ```bash
   cds watch
   ```

5. **Open in browser**
   - **Application UI**: http://localhost:4004/invoicetrackingapp/webapp/index.html
   - **OData Service**: http://localhost:4004/odata/v4/invoice-tracking-srv/
   - **Service Metadata**: http://localhost:4004/odata/v4/invoice-tracking-srv/$metadata

### Using the Application

1. Open the application URL in your browser
2. Click the **"Ir"** (Go) button in the filter bar to load data
3. You should see a list of invoices with sample data

### Available Scripts

- `npm run start-local` - Start the application in development mode with `cds watch`
- `npm run start` - Start the application in production mode with `cds-serve`
- `npm run cds-watch` - Alias for `cds watch`

### Troubleshooting

**Application shows blank page:**
- Make sure you clicked the "Ir" (Go) button in the filter bar
- Check the browser console (F12) for any errors
- Verify the server is running on port 4004

**Database errors:**
- Run `cds deploy --to sqlite:db.sqlite` to initialize/reset the database

**Port already in use:**
- Stop any existing processes on port 4004
- Or change the port in the CDS configuration

## Development

The application uses:
- **SQLite** for local development (configured in `package.json`)
- **HANA** for production deployment (via `mta.yaml`)
- **Dummy authentication** for local development
- **XSuaa** authentication for production

## License

UNLICENSED
