# Return to Home

## Purpose

This workflow handles the return process of an employee when the return request option is set to **"Pick Up from Home."**

It starts as soon as the **Employee Return Request** is created.

### Workflow Stages and Actions :

### 1. Waiting for Payment

  - Triggered when the return request is submitted with **Pick Up from Home** option.

  - **If delivery fee is unpaid:**

    - Customer pays the delivery fee.

    - Once paid, the stage transitions to **Waiting for Schedule**.

  - **If delivery fee is already paid or zero:**

    - The system immediately moves to **Waiting for Schedule**.

  - At this point, the Return Request also transitions to the **"Pick from Home"** stage.

  - **Actions :**
    - **Complete -** Once payment done, moved to the **Waiting for Schedule** stage.

### 2. Waiting for Schedule

  - This stage is used to plan and schedule the pickup.

  - Manual or system action required to move forward.

  - **Actions :**
    - **Complete -** Once Scheduled, moved to the **Waiting for Travel** stage.

### 3. Waiting for Travel

  - Indicates the system is ready for the physical pickup.

  - User can proceed to the next stage when preparations are complete.

  - **Actions :**
    - **Complete -** Once the journey starts, moved to the **Travel started** stage.

### 4. Travel Started

  - Marks the beginning of the actual pickup journey.

  - Once travel starts, the stage progresses to **Completed**.

  - Simultaneously, the return process moves to **"Request for Check-in"** stage.

  - **Actions :**
    - **Complete -** If Travel completes, moved to the **Completed** stage.

### 5. Completed

  - Pickup is finished.

  - Marks the end of the **Return To Home** delivery workflow.