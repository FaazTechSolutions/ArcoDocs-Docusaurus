---
sidebar_position : 2
---

# Employee Clearance

Initiated through Vacation Settlement or Final Settlement and manages the employee’s pending dues and benefits at the time of exit or leave.

## Workflow Stages & Actions :

### 1. New

  - User inputs component amounts (e.g., due salary, loan, ticket, etc.).

  - **Actions :**
    - **Approve -** Moves to Approve stage.

### 2. Approved

  - Clearance items are added to the Settlement Line in the HR module.

  - The settlement moves to Approval (with clearance amount).

  - If Due Salary is included, the salary status is updated to Settlement Requested.

  - **Actions :**
    - **Move to New -** Retrun back to New stage.
    - **Closed -** Moves to Closed stage.
    - **Cancelled -** Moves to Cancelled stage.

### 3. . Closed

  - Once Settlement Payment is completed, the system moves the clearance to the Closed stage.

  - The system performs the following automatic updates:

    - **Due Salary -** Salary status changes to Paid by Settlement.

    - **Due Loan -** Loan status changes to Settled.

    - **New Salary (future salary) -** Created and marked as Paid by Settlement.

    - **Accruals -** Accrual settlement transactions are generated.

    - **Customer Vacation Charges -** Finance invoice is created.

### 4. Cancelled

  - Clearance is marked as cancelled, and no further processing occurs.

  - **Actions :**
    - **New -** Return to New Stage.