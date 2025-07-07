---
sidebar_position : 4
---

# Block Visa Cancellataion

This module allows users to initiate and process the cancellation of approved Block Visas and manage the associated financial refunds.

**Key Functionality:**

  - **Who Can Use:** Authorized users

  - **When to Use:** After a Block Visa is approved but needs to be revoked before use.

  - When a user wants to cancel a visa, they create a Block Visa Cancellation with the following details:

    - Sector
    - Requester
    - Requested By
    - Visa Number
    - Visa Status
    - Approval Id
    - Issue and Expiry Date
    - Issue and Expiry Hijri Date
    - Cancel Date
    - Cancel Total Quantity
    - Cancel Total Quantity Amount

### Workflow Stages & Actions :

### 1. Cancellation Approval

  - User creates the Block Visa Cancellation Request.

  - Sent to finance for confirmation and verification.

  - **Actions :**
    - **Finance Confirmation -** Moves to Finance Confirmation stage.
    - **Reject -** Moves to Reject stage.

### 2. Finance Confirmation

  - Finance reviews and confirms the cancellation.

  - Once confirmed, the system proceeds to the Refund stage.

  - **Refund amount:** 2,000 Riyals per visa.

  - **Actions :**
    - **Hold -** Moves to Hold stage.
    - **Refund -** Once Finance department confirms the cancellation, Moves to Refund stage.

### 3. Refund

  - Once the refund is completed, the system automatically moves the request to Completed.

### 4. Completed

  - The cancellation process is fully done.

  - Refund of 2,000 Riyals per visa is recorded as completed.

### 5. Hold

  - The request is temporarily paused.

  - Can be resumed or reviewed later.

### 6. Reject

  - The cancellation request is denied.

  - Process is stopped; no refund is issued.