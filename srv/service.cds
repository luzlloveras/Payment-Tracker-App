using { invoiceTracking } from '../db/schema.cds';

service invoiceTrackingSrv {
  @odata.draft.enabled
  entity Invoices as projection on invoiceTracking.Invoices;
  @odata.draft.enabled
  entity LineItems as projection on invoiceTracking.LineItems;
  @odata.draft.enabled
  entity Products as projection on invoiceTracking.Products;
}