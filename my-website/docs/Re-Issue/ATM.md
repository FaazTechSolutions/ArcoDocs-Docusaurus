---
sidebar_position : 2
---

# ATM

This service is used to issue a replacement ATM card (or other employee service products like Iqama or Insurance) when the original is lost or damaged.

Requests are created by users/customers via Case Management or Customer Portal.

## Workflow Stages & Actions :

### 1. Newly Required ReIssue

  - Request created and waiting for initial action.

  - **Actions :**
    - **Complete -** Moves to Finance Department Approval.
    - **Reject -** Request closed.

### 2. Finance Department Approval

  - Finance team reviews and approves the reissue request.

  - **Actions :**
    - **Approve -** Moves to Payment Requested.
    - **Reject -** Request closed.

### 3. Payment Requested

  - Payment process initiated and completed via Finance Portal.

  - Once payment is confirmed, system will move requests to Receive in Lodging stage automatically.

### 4. Receive in Lodging

  - ATM card is received at the employee's lodging location from the bank.

  - **Actions :**
    - **Complete -** Moves to Put in Envelope.
    - **Complete without Envelope -** Move directly to Completed.
    - **Hold -** Move to Hold stage.

### 5. Hold 

  - Request is temporarily on hold.

  - **Actions :**
    - **Receive in Lodging -** Moves to Receive in Lodging stage.

### 6. Put in Envelope

  - ATM card is packed and dispatched to employee's work location.

  - **Actions :**
    - **Complete -** Moves to Completed stage.

### 7. Completed

  - ATM reissue process finished after successful delivery.