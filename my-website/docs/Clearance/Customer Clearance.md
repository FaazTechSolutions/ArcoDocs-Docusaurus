---
sidebar_position : 1
---

# Customer Clearance

### Clearance Module Overview

A flexible system to calculate employee or customer clearance amounts with dynamic components.

**Clearance Types :**

  - Employee Clearance
    - Vacation
    - End of Service (EOS)

  - Customer Clearance

**Clearance Amount**

  - Sum of all selected clearance components based on the Clearance Type.

  - Clearance process is requested per payroll period based on transactions.

  - Users can include or exclude specific clearance items using checkboxes.

### Clearance Components by Type

**Vacation Clearance**

  - Vacation Settlement
    - Eligible vacation days calculated from the specified period (From–To).
    - Settlement = Vacation Eligible Days × (Employee Salary ÷ 30)

  - Due Salary (unpaid salary)
  - Due Loan
  - Government Fees
    - Calculated based on remaining days until iqama expiry.

  - Ticket
    - Optional manual input of ticket value.

  - Other Deductions
  - Other Payments
  - Customer Charges
    - When clearance is closed, generates an invoice via finance integration.

  - Settlement Salary
    - Salary calculated up to the last working day.

**EOS Clearance**

  - EOS Settlement
    - Calculated as per EOS setup rules.

  - Due Salary (unpaid salary)
  - Due Loan
  - Government Fees
    - Calculated based on remaining days until iqama expiry.

  - Ticket
    - Optional manual input.

  - Other Deductions
  - Other Payments
  - Settlement Salary
    - Salary calculated up to the last working day.

**Customer Clearance**

Clearance calculation for customers includes the following components:

  - **EOS Settlement**
    - Calculated based on the EOS setup.

  - **Vacation Settlement**
  - **Government Fees**
    - Calculated from a list of government fee expenses, based on remaining days until iqama expiry.

  - Ticket
    - Optional manual input for ticket value.

  - Other Deductions
  - Other Payments
  - Contract Penalty

------------------------------------------------

## Customer Clearance

A Customer Clearance request is created when a business employee returns from an Option 2 contract (i.e., expenses paid by the customer).

## Workflow Stages & Actions :

### 1. New 

  - User enters component amounts (e.g., EOS, ticket, gov. fees).

  - **Actions :**
   - **Approved -** Moves to Approved stage
   - **Cancelled -** Moves to Cancelled stage

### 2. Approved

  - User reviews and confirms the request.

  - **Actions :**
    - **Closed -** Moves to Closed stage.
    - **Move to New -** Return to New Stage.

### 3. Closed

  - A Finance Invoice is automatically generated based on the total of all component amounts.

  - The invoice uses Service Item–Component mapping for accurate financial posting.

  - After closing, users may request a Recalculation if needed.

  - **Actions :**
    - **ReCalculate Requested -** Moves to ReCalculate Requested stage.
    - **Approved -** Moves to Approved stage.

### 4. Cancelled

  - The clearance request is marked as cancelled and closed from further action.

  - **Actions :**
    - **New -** Return to New Stage.

### 5. ReCalculate Requested

  - A re-calculation of the clearance is needed.

  - **Actions :**
    - **Return to Closed -** Return to Closed stage
    - **ReCalculate and Move to New -** ReCalculate and Move to New stage.