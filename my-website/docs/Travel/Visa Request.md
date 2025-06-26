---
sidebar_position: 1
---

# Visa Request

  The Visa Request is triggered when an employee initiates a Travel Arrangement via the Leave Request or Retirement Request from ARCO. It is tightly integrated with the Finance Department for payment and Muqeem Portal for issuance.

**Workflow Stages & Actions:**

### 1. Requested

  - Indicates a new visa request has been received from Case and Task Management.

  - **Actions :**
    - **Requested -** Moves the request to **Approval stage.**

### 2. Approval

  - Awaiting review and approval from the Finance Department.

  - **Actions :**
    - **Approved -** Confirms approval and moves the request to **Payment stage.**

### 3. Payment

  - Payment request is generated and processed through the Finance Department Portal.

  - **System Logic :**
    - The system automatically tracks the payment status between Visa Request and Finance modules.
    - **Auto :** Once Finance confirms payment completion, the request automatically moves to **Under Processing stage.**

### 4. Under Processing

  - Visa issuance begins in Muqeem Portal (either manually or via system integration).

  - System tracks visa status.

  - **Actions :**
    - **Complete -** Once Visa is successfully issued, move to **Completed stage.**
    - **Hold -** Place request on hold, move to **Hold.**

### 5. Hold

  - Visa processing is paused/hold due to queries or pending clarifications.

  - **Actions :**
    - **Release -** Resume processing and move the request back to **Under Processing stage.**

### 6. Completed

  - Indicates the visa has been successfully issued and process is finalized.

### 7. Reject Requested

  - Visa has been rejected or canceled after issuance.

  - Triggered when the user rejects the visa but it has already been issued.

  - Once canceled formally through Leave Reject Request process, moved to Completed stage.