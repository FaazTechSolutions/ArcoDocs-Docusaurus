---
sidebar_position: 3
---

# Vacation Settlement

Vacation Settlement starts in Case and Task Management and is processed in the Finance Portal.

If the employee doesn’t require settlement, the request is completed without payment.

## Workflow Stages & Actions:

### 1. Requested

  - A new settlement request is created by a user or customer.

  - **Actions :**
    - **Move to Clearance -** Moves the request to the **Clearance Process stage.**

### 2. Clearance Process

  - Request is waiting for internal clearance.

  - Once done, it moves to Approval or skips to Complete (if no payment is needed).

  - **Actions :**
    - **Complete -** Move to **Approval stage.**

### 3. Approval

  - Finance reviews and approves the settlement.

  - **Actions :**
    - **Approve -** Move to **Client Confirmation stage.**
    - **Re-Calculate Clearance -** Return to **Clearance Process.**

### 4. Client Confirmation

  - Waiting for customer/client to confirm the clearance.

  - **Actions :**
    - **Complete -** Move to **Payment stage.**

### 5. Payment

  - Finance department processes the payment.

  - Once completed in the Finance Portal, request moves to Complete.

  - **Actions :**
    - **Complete -** Move to **Complete Stage.**
    - **Re-Calculate -** Return to **Clearance Process stage.**

### 6. Client Rejection

  - Client rejected the request.

  - Request is on hold and waiting to be Re-send to process the **Client Confirmation** and **Re-Calculate Stage.**

  - **Actions :**
    - **Re-Send to Client Confirmation -** Move to Client Confirmation stage again.
    - **Re-Calculate Clearance -** Return to **Clearance Process stage.**

### 7. Complete

  - Once Requests are completed after the Vacation Settlement request completed, moved to this stage.