# Invoice

## Purpose

Invoices are used to record and charge customers for contract-related services, such as advance payments, monthly usage, or one-time fees.

### Invoice Types

  1. Advance Invoice
  2. Monthly Charge
    - Monthly Invoice
    - Monthly Consumption

  3. One-Time Invoice (penalties, delivery fees, etc.)

### Common Invoice Fields

Each invoice includes:

  - Invoice Number
  - Invoice Type
  - Contract Info
  - Invoice Period
  - Date
  - Total Before Discount
  - Total After Discount
  - Tax Amount
  - Total Invoice Amount

### Advance Invoice

Created when a **credit transaction** is made and there are **no existing due invoices**.

Tax is calculated from the **Advance Payment tax details**.

### Balances:

  - **Advance Request Balance** = Amount – Advance Payment Settled

  - **Invoice Balance** = Amount – Advance Invoice Settled

### Settlement Flow:

  - If contract has **pending Advance Payment**, and Advance Request Balance covers it:
    - System creates **Advance Payment Settlement**.
    - Advance Payment marked as Paid.

  - On contract **cancel/terminate** :
    - Remaining Advance Request Balance is turned into a **Credit Note** (Return Receipt).

### Monthly Usage

  - Automatically generated at the end of each month based on used contract days.

  - Uses expense items per employee.

**Monthly Charge Line Fields:**

  - Invoice Number, Period, Days
  - Employee ID, Expense Item
  - Line Value, Discount
  - Tax %, Line Value After Discount
  - Tax Amount, Line Amount

Total line amounts = Monthly Charge

**Split Into:**

**1. Monthly Consumption**

  - If Advance Invoice Balance exists.
  - Settled directly from Advance Invoice.

**2. Monthly Invoice**

  - Remaining unpaid amount.
  - Marked as **Not Paid**.
  - Payment settles it through **Invoice Settlement**.

### One-Time Invoice

  - Created for **penalties or additional service fees**
  - Triggered by:

    - **Customer requests**
    - **Delivery or return processes**