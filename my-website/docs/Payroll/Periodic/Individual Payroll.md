---
sidebar_position : 4
---

# Individual Payroll

  - Displays payroll details for each individual employee contract, along with current status.

### Process Flow

**1. Start Payroll**

  - Initiated manually by the user at the end of the month.

  - Triggers the system to begin salary generation on a scheduled basis.

**2. Salary Generation**

  - The system calculates salary automatically based on:

    - Other Payments
    - Deductions 
    - Loan repayments

  - These values are pulled from existing payment and deduction transactions.

**3. Completion**

  - Once salary generation is finished, the payroll status is updated to Completed.