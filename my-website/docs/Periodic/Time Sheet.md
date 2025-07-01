---
sidebar_position : 1
---

# Time Sheet Overview

**Timesheet Submission**

  - Timesheets are submitted by either the customer or the project coordinator (manager).

**Payroll Generation**

  - Payroll is generated based on Paygroup and Pay Period.

  - The payroll process begins with the timesheet for the specified period.

**Payroll Timesheet Process**

**1. Not Started**

  - Timesheets are created automatically when the payroll period is opened.

  - **Status:** Not Started

  - **Action:** User can initiate the payroll process.

**2. Started**
  
  - Once started, users can perform the following actions:

  - **Export:**

    - Timesheet data is exported based on employee assignments from the previous cut-off date to the current one.

    - Exported timesheet includes:

      - Employee Details
      - Working Days
      - Standard & Actual Salary
      - Other Payments (Overtime, Bonuses, etc.)
      - Deductions (e.g., Absent Days, Penalties)
      - Loan Details
      - Final Payable Salary

  - Re-Start:

    - Timesheet can be restarted to reflect any changes in employee assignments.

  - Import:

    - Users can import the updated timesheet data.

  - Submit:

    - Finalizes the timesheet and changes the status to Salary Preparation.

**3. Salary Preparation**

  - The system prepares for salary generation.

  - Status remains here until salary generation begins.

**4. Salary In Progress**

  - Once salary generation starts, the status updates to Salary InProgress.

**5. Completed**

  - Salaries are fully generated.

  - Users can:

    - **Make Employee-Level Corrections:** Cancel an individual’s salary, update timesheet, and regenerate salary.

    - **Rollback:**
      - Reverts the payroll process to an earlier state.
      - Deletes all related payroll data so the process can start fresh.

    - Approve:
      - Approves the payroll.
      - System automatically:
        1. Generates invoices via Business Integration.
        2. Updates status to Invoice Generated.

**6. Invoice Generated**

  - If needed, users can:

    - **Un-Approve:**
      - Deletes the generated invoice.
      - Reverts the status back to Completed to allow changes.

## Timesheet Page Usage:

  - Users can manage and update payroll-related data before generating salaries.

  - Actions available depend on the current payroll status.

  - Users can:
    - Edit timesheet data during the **"Payroll Preview"** stage.
    - Export timesheet for review or processing.