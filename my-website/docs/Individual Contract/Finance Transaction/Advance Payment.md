# Advance Payment

## Purpose

An Advance Payment is a financial record that holds the pending payment related to a contract request (e.g., contract creation or extension).

### Key Details

Each contract line includes an **Advance Payment record** with:

  - Amount
  - Tax
  - Payment Status (Pending, Pay Later, or Paid)

### When Is It Created?

Advance Payment is generated automatically during :

  - Contract Creation
  - Contract Extension

The amount is based on the **selected package** and **contract period**.

### Key Fields

  - Each Advance Payment includes:
  - Advance Number
  - Source Info
  - Contract Line Number
  - Advance Value
  - Tax
  - Amount
  - Status

### Status Types

  - **Pending** – Awaiting payment
  - **Pay Later** – Marked to pay later (for eligible profiles/customers)
  - **Paid** – Fully paid

### Completion Logic

  - Once the customer pays and the advance invoice is fully settled :

    - Status changes to Paid

    - The original request (e.g., contract or  extension) is automatically completed based on its type.