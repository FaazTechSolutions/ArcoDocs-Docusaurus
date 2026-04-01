# Delivery to Home

## Purpose

This workflow defines the stages and transitions involved when a contract is set for Delivery to Home.

It is triggered when the contract delivery request has the Delivery Type set as `Delivery to Home`.

### Workflow Stages and Actions :

### 1. Waiting for Payment

  - This is the initial stage when the delivery process starts.

  - **Trigger:** Delivery is marked as "Started."

  - **If delivery fee is unpaid:**

    - The customer must pay the delivery fee.

    - Once payment is completed, the process moves to **Waiting for Schedule**.

  - **If delivery fee is already paid or zero:**

    - The system directly moves to **Waiting for Schedule**.

  - **Actions :**
    - **Complete -** Once payment done, moved to the **Waiting for Schedule** stage.

### 2. Waiting for Schedule

  - In this stage, the system/user prepares or schedules the delivery.

  - Manual or system action required to move to the next stage.

  - **Actions :**
    - **Complete -** Once Scheduled, moved to the **Waiting for Travel** stage.

### 3. Waiting for Travel

  - This stage becomes active only after the contract is Checked Out from the Delivery Request.

  - User can proceed to the next stage once checkout is complete.

  - **Actions :**
    - **Complete -** Once the journey starts, moved to the **Travel started** stage.

### 4. Travel Started

  - Marks the beginning of the physical delivery.

  - User progresses the delivery to the final stage upon travel initiation.

  - **Actions :**
    - **Complete -** If Travel completes, moved to the **Completed** stage.

### 5. Completed

  - The delivery process completes.

  - The system transitions the contract to the Customer Confirmation stage.

  - _No further actions required._