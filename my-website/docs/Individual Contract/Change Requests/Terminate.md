---
sidebar_position : 3
---

# Terminate

## Termination Process

### Action Visibility

  - Terminate action is available when the contract status is one of the following:

    - Waiting for Exchange
    - Valid
    - Near to Expire

  - **Additional Condition:** Remaining contract days must be greater than 0.

### Termination Logic

  - The system **automatically terminates** a contract **after delivering an employee** with valid contract days.

  - If the contract has **active employees**:

    - System creates an **"Employee Return"** record with a **"Terminate"** option.

  - If no active employees:

    - A **"Terminate Request"** is created.

### Penalty Calculation

  - Controlled by the system parameter: **TerminatePenaltyDays** (default: 10 days).

  - Penalty logic:

    - If **remaining days** > **TerminatePenaltyDays:**

      - Penalty = amount for **TerminatePenaltyDays**

    - If **remaining days** ≤ **TerminatePenaltyDays:**

      - Penalty = amount for **remaining days**

## Request Creation Sources

### From ERP System

  - Data included in the termination request:
    - Transaction Reason
    - Notes
    - Contract Balance
    - Penalty (With or Without Penalty)
    - Refund Option (if contract has balance):
      - Wallet
      - Refund
    - Refund Details

### From Mobile App

  - Request includes:
    - Notes
    - Default values:
      - Penalty: With Penalty
      - Refund Option: Wallet

### Post-Request Actions

  - Once the termination request is created:
    - Contract status is changed to **Terminated**.
    - **Accountant Approval** workflow stage begins.

### Workflow Stages and Actions :

### 1. Accontant Approval

  - **Triggered When:** Terminate request is created.

  - **If Refund Option = Wallet:**

    - Stage is automatically **marked as Completed.**

    - **Contract Balance** is transferred to the **Wallet**.

    - **Penalty Amount** is **non-refundable** and excluded from wallet transfer.

  - **If Refund Option ≠ Wallet (or Penalty needs processing)**:

    - **A Finance User** must act:

      - Select a **Penalty Option** (With or Without Penalty).

      - System generates a **Penalty Invoice** based on the selection.

      - Request is then moved to the **Payment Stage.**

  - **Actions :**
    - **Complete -** Moved to **Payment** stage.
    - **Cancel -** Moved to **Cancelled** stage.

### 2. Payment

  - **If No Contract Due Amount:**

    - Stage is **skipped**, request moves to **Finance Manager Approval**.

  - **If There Is a Due Amount:**

    - **Customer must pay** the outstanding contract balance.

    - Once payment is confirmed, request proceeds to **Finance Manager Approval**.

  - **Actions :**
    - **Complete -** Moved to **Finance Manager Approval** stage.
    - **Cancel -** Moved to **Cancelled** stage.

### 3. Finance Manager Approval

A Finance User must approve and manually **advance to the next stage**.

  - **Actions :**
    - **Complete -** Moved to **Refund** stage.

### 4. Refund

  - **Triggered When:** Request is created with **Refund Option = Refund**.

  - A Refund Request is generated using the specified **Refund Details**.

  - Once the **Refund is completed**, the request progresses to the **Contract Settlement Verification** stage.

  - **Actions :**
    - **Complete -** Moved to **Contract Settlement Verification** stage.
    - **Cancel -** Moved to **Cancelled** stage.

### 5. Contract Settlement Verification

  - A **Finance User** reviews and **completes** the contract settlement.

  - Once completed:

    - The user can print the **"Settlement Report"** directly from the contract.

  - **Actions :**
    - **Complete -** Moved to **Completed** stage.

### 6. Completed

  - Final stage of the termination process.

  - All steps have been verified, and the contract is formally settled and closed.

### 7. Cancel

  - If needed, the process can be cancelled at any stage before completion.