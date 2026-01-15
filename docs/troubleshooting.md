# Troubleshooting

## Blank page in the UI
- Click the "Go" button in the filter bar.
- Check the browser console for errors.
- Confirm the server is running on port 4004.

## Database errors
- Re-run `cds deploy --to sqlite:db.sqlite` to recreate the local database.

## Port already in use
- Stop the process using port 4004 or change the CAP port in configuration.
