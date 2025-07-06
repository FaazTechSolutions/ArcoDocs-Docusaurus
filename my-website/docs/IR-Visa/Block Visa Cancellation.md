---
sidebar_position : 4
---

# Block Visa Cancellataion

This process allows users to cancel previously approved visas that are part of a Block Visa and initiate a refund workflow. 

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

  - User creates the cancellation request.

  - Sent for Finance Department confirmation.

  - **Actions :**
    - **Finance Confirmation -** Moves to Finance Confirmation stage.
    - **Reject -** Moves to Reject stage.

### 2. Finance Confirmation

  - Finance reviews and confirms the cancellation.

  - Triggers a refund of 2,000 Riyals per visa.

  - **Actions :**
    - **Hold -** Moves to Hold stage.
    - **Refund -** Once Finance department confirms the cancellation, Moves to Refund stage.

### 3. Refund

  - Once the refund is completed, the system automatically moves the request to Completed.

### 4. Completed

  - The cancellation process is fully done.

  - All data is locked/read-only.

### 5. Hold

  - The request is temporarily paused.

  - Can be resumed or reviewed later.

### 6. Reject

  - The cancellation request is denied.

  - Process is stopped; no refund is issued.