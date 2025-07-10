---
sidebar_position : 1
---

# Cancel Request

### Contract Cancellation

**Penalty Calculation**

  - A cancellation fee is applied:

    - 2.5% of the total contract amount (configurable system parameter).

### Cancel Request Sources

**From ERP (Back Office)**

  - User provides:

    - Transaction Reason

    - Notes

    - Contract Balance

    - Penalty (with or without penalty)

    - Refund Option (if applicable):

      - Wallet (credit to customer account)

      - Refund (cash/bank transfer)

    - Refund Details

**From Mobile App**

  - Customer provides:

    - Notes

  - System auto-applies:

    - **Penalty:** With penalty

    - **Refund Option:** Wallet (default)

### After Request Creation

  - Contract status is updated to `"Cancelled"`.

  - Process moves to `"Accountant Approval"` for final review and refund handling.

### Workflow Stages and Actions :

### 1. Accountant Approval

  - If Refund Option = Wallet:
    - Stage is automatically completed.=
    - Contract balance is moved to the customer wallet.
    - Penalty amount is excluded from wallet refund.

  - If Finance User selects `"With Penalty"`:
    - A penalty invoice is generated.
    - Request moves to **Payment** stage.

### 2. Payment

  - If the contract has **no due amount:**

    - Stage is skipped, request moves to **Finance Manager Approval**.

  - If there is a **due amount:**

    - Customer must **pay the balance**.

    - After payment, request proceeds to **Finance Manager Approval**.

### 3. Finance Manager Approval

  - Finance user reviews and approves the request.

  - Request moves to the next appropriate stage.

### 4. Refund

  - Triggered only if the **Refund Option = Refund** (cash/bank).

  - System creates a **refund request** using refund details.

  - After refund is processed, request moves to **Contract Settlement Verification**.

### 5. Contract Settlement Verification

  - Final verification by Finance user.

  - Once verified, request moves to **Completed**.

  - User can now **print the Contract Settlement Report**.

### 6. Completed

  - Cancellation process is finalized.

  - All financials and refunds are settled.