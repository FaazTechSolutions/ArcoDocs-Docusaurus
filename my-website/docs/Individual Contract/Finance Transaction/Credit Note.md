# Credit Note

## Purpose

A Credit Note is a financial transaction used to adjust or correct contract charges. It can be issued by a Finance User or from a Wallet.

### When Is It Used?

  - To adjust **debit transactions** on a contract.

  - To reverse **advance tax** (e.g., return receipt).

  - To transfer **wallet balance to contract**.

### Credit Note Creation Process

  - Finance user initiates a credit approval request with necessary details.

  - Once approved, a Credit Note is created based on the request.

### Credit Note Types

  - **Manual Credit Note** – Finance adjustment

  - **Return Receipt** – Reverses advance tax

  - **Wallet** – Transfers credit from wallet to contract.

### Key Fields

**Each Credit Note includes :**

  - Credit Number – Auto-generated
  - Amount
  - Date
  - Type
  - **Transaction Mode :**
    - Correction (tax required)
    - Reconcilement

  - **Other Reference :**
    - Related Invoice
    - Voucher Type (finance reference)
    - Tax Information (if applicable)

### Credit Note Settlement Logic

Once the Credit Note is created, it automatically settles:

  1. **Due Invoices** – If any exist.

  2. **Advance Payments** – If needed, creates and settles an **Advance Invoice**.