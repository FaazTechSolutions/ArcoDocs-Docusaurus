---
sidebar_position : 6
---

# Employee Return Request

## Employee Return Request Process

### Initial Stage Trigger

  - Based on **Return Method:**
    - **If Return Method = "Pick from Home":**
    - Process starts with the **Payment Stage**.
  - Else:
    - Process starts with **Request for Check-in**.

### Workflow Stages

### 1. Payment (Only if Return Method = "Pick from Home")

  - **Amount Calculation:**

    - Transport cost is calculated based on the predefined **"Transport Cost" setup**.

    - A **One-time Invoice** is generated with the calculated transport cost.

  - **Payment Handling:**

    - **Customer/User** must complete the transport payment.

    - Once payment is completed:

      - Request moves to **Pickup From Home**

        - **If Transport Cost = 0**, this stage is skipped, and request moves directly to **Pickup From Home**.

  - **Actions :**
    - **Complete -** Moved to **Pickup From Home** stage.
    - **Cancel -** Moved to **Cancel** stage.

### 2. Pickup From Home

  - Triggers the **"Return From Home"** process to arrange employee pickup from the customer's location.

  - Once pickup is completed, request proceeds to **Request for Check-in**.

  - **Actions :**
    - **Received -** Moved to **Request for Check-in** stage.
    - **Cancel -** Moved to **Cancelled** stage.

### 3. Request for Check-in

  - A Lodging User transitions the request to the next stage: **Waiting for Check-in Request**.

  - **Actions :**
    - **Complete -** Moved to **Waiting for Check-in Request** stage.
    - **Cancel -** Moved to **Cancel** stage.

### 4. Waiting for Check-in Request

  - A **Check-in Request** is created in the **Lodging Module** for the requested location.

  - Once the Check-in Request completes its **"Waiting for Check-in"** stage, the return request moves to **Completed**.

  - **Actions :**
    - **Cancel -** Moved to **Cancel** stage.

### 5. Completed

  - Employee is:
    - Unassigned from the contract.
    - Contract End Date is updated accordingly.

  - **If Return Purpose = "Replace":**
    - **A Replacement Request** is created.

  - **If Return Purpose = "Terminate" or "End":**
    - Corresponding **Terminate** or **End Process** is triggered.

### Cancelled

  - At **any stage**, a user has the ability to cancel the return request