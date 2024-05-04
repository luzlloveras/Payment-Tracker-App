namespace invoiceTracking;

entity Invoices {
  key ID: UUID;
  invoiceNumber: String(20) @assert.unique @mandatory;
  invoiceDate: Date;
  totalAmount: Decimal;
  lineItems: Association to many LineItems on lineItems.invoice = $self;
}

entity LineItems {
  key ID: UUID;
  lineItemNumber: Integer @assert.unique @mandatory;
  quantity: Integer;
  unitPrice: Decimal;
  invoice: Association to Invoices;
  product: Association to Products;
}

entity Products {
  key ID: UUID;
  productCode: String(50) @assert.unique @mandatory;
  productName: String(50);
}
