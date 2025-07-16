# Payment

## Purpose

Records all customer payments made for contracts, either online or manually.

### Payment Types

**Customers can pay using:**

  - Card – Online portal
  - POS – At branch (with receipt attachment)
  - Bank Transfer – Manually processed by finance team
  - Sadad Bill – Through the Sadad portal

### What Can Be Paid?

**Customers can pay for:**

  - Due Invoices (for used services)
  - Advance Payments (for new or extended contracts)

### Payment Fields

**When a payment is made, the system records:**

  - Payment Number – Auto-generated
  - Customer Info
  - Contract Info
  - Date
  - Amount
  - Payment Reference – e.g., Card or Transaction ID
  - Attachment – Required for POS payments

### Payment Settlement Logic

**Once payment is created, the system automatically settles:**

  - Due Invoices – Paid first, if any exist
  - Advance Payments – Creates and settles an Advance Invoice if needed.