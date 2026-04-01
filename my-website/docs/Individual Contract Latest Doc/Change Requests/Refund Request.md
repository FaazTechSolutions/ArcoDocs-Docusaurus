---
sidebar_position : 7
---

# Refund Request

## Refund Request Process

### Purpose

To handle customer refund requests originating from contract-related actions or wallet balances.

### Request Sources

  - Refund requests can be initiated from:

    1. Terminate/Cancel Requests

    2. **On-Request** directly by the customer (from their Wallet)

### Validation Rules

  - System **validates** the requested refund amount.

  - **Refund amount must be available** in the customer’s **wallet or contract balance**.

### Workflow Stages

### 1. Accountant Confirmation

  - Accountant reviews the refund request and confirms the validity and source of funds.

  - **Actions :**
    - **Complete -** Moved to **Finance Manager Review** stage.
    - **Reject -** Reject and Moved to **Completed** stage.

### 2. Finance Manager Review

  - Finance Manager performs final review and approval before processing refund.

  - **Actions :**
    - **Complete -** Moved to **Refund** stage.
    - **Reject -** Reject and Moved to **Completed** stage.

### 3. Refund

  - User selects the **Refund Method** (e.g., bank transfer, original payment method, etc.).

  - Once method is selected and confirmed, stage is marked complete.

  - **Actions :**
    - **Complete -** Moved to **Completed** stage.
    - **Reject -** Reject and Moved to **Completed** stage.

### 4. Completed

  - A Refund Transaction is created and the amount is settled using available balance.
  - Special Case – Wallet Refunds:

    - If the refund is from the wallet and part of the wallet amount is non-refundable:

      - System creates a Revenue Invoice for the non-refundable amount.
      - Closes that portion of the balance accordingly.