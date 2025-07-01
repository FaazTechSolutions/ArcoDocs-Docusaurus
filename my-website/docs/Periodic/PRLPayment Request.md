---
sidebar_position : 2
---

# Payment Request

Payment requests are managed through defined statuses and stages based on the type of payment.

**Payment Types :**

  - Bank Transfer
  - Cash
  - Cheque
  - Customer Payment

## Workflow Stages & Actions :

### 1. Approval

  - For all payment types except Bank Transfer, the request moves directly to Completed upon approval.

  - Finance user reviews the payment request and can either:

  - **Actions :**
    - **Approve -** Moves to the Import stage.
    - **Reject -** Moves to Rejected stage.

### 2. Import (Only for Bank Transfer payments)

  - Users can:

    - Export ATM or IBAN templates from the Payment Transfer module.

      - Exported once by the user or finance manager.

    - Upload template to the bank and receive a feedback file.

    - Import the feedback file back into the system.

  - Based on the feedback:

    - Payment line statuses are updated automatically.

  - **Actions :**
    - **Complete -** Moves to the Posting stage.
    - **Reject -** Moves to Rejected stage.
    - Complete without Posting -** Moves directly to the Completed stage. 

### 3. Posting (Bank Transfer only)

  - Final stage where payment details are posted and integrated with the finance system.

### 4. Rejected

  - Request was rejected during the approval or import process.

### 5. Completed

  - Payment request is finalized.

    - Automatically for Cash, Cheque, or Customer once approved.

    - After Import & Posting for Bank Transfers.

