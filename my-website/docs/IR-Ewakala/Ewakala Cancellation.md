---
sidebar_position : 3
---

# Ewakala Cancellation

The Ewakala Cancellation process allows users to revoke an issued Ewakala authorization that is no longer needed or was issued in error.

**Key Functionalities:**

  - **Initiated From:**

    - Demand Letter page
    - Or directly from the Ewakala page

  - **Cancellation Outcome:**

    - Once the cancellation process is successfully completed, the **Ewakala status is updated to "Cancelled"**.

### Workflow Stages & Actions :

### 1. Approval

  - User creates the cancellation request.

  - Sent for internal approval before proceeding.

  - **Actions :**
    - **Create_In_Enjaz -** Moves to Create_In_Enjaz stage.
    - **Rejected -** Moves to Rejected stage.

### 2. Create_In_Enjaz

  - Cancellation is created/submitted in the Enjaz system.

  - **Actions :**
    - **Payment -** Moves to Payment stage.

### 3. Payment

  - If there’s a fee, the user completes the required payment.

  - **Actions :**
    - **Under Process -** Moves to Under Process stage.
    - **Rejected -** Moves to Rejected stage.

### 4. Under Process

  - The cancellation is being processed by Enjaz or the related system.

  - **Actions :**
    - **Completed -** Moves to Completed stage.
    - **Move to Payment -**  Return to Payment stage.

### 5. Completed

  - Ewakala cancellation is finalized.

  - Authorization is now voided.

  - **Actions :**
    - **Under Process -** Moves to Under Process stage.

### 6. Rejected

  - Cancellation request is denied due to validation errors or system rejection.