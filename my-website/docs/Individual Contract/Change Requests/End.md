---
sidebar_position : 4
---

# End

## Contract End Process

### Trigger Condition

   - An **"End" request** is automatically created from an **"Employee Return"** request **when the contract remaining days ≤ 0**.

### Upon Request Creation

  - **If Remaining Days = 0:**

    - Contract status is changed to `Ended`.

  - **If Remaining Days < 0:**

    - Contract status is changed to `Ended With Penalty`.

  - **Invoices for the current month** will be generated **up to the last used day** of the contract.

### Workflow Stages and Actions :

### 1. Payment

  - **If No Contract Due Amount :**
    - Stage is skipped, request moves to **Accountant Approval**.

  - **If There Is a Due Amount :**

    - **Customer must pay** the outstanding amount.
    - After payment confirmation, request proceeds to **Accountant Approval**.

### 2. Accountant Approval

  - A Finance User manually reviews and **advances** the request to the next stage.

### 3. Contract Settlement Verification

  - A Finance User performs final **settlement validation**.

  - Once completed:

    - **Settlement Report** can be **printed** from the contract.

### 4. Finance Manager Approval

  - Reviewed and **approved** by the **Finance Manager**.
  - Manually moved to **Completed**.

### 5. Completed

  - Final stage — the contract is officially **closed and settled**.