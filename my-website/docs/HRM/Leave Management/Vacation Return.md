---
sidebar_position: 4
---

# Vacation Return

The Vacation Return Process is system-driven and monitors the employee’s return status based on Muqeem portal updates. The process ensures accurate tracking of return dates and proper reassignment or retirement actions based on the employee’s employment type and status.

### Automatic System Behavior :

  - The system checks Muqeem status periodically.

  - Transition between stages is automated, based on:
    - Return Date
    - Muqeem Status
    - Iqama or Visa validity
    - Contract availability

### Workflow Stages & Actions :

### 1. On Vacation

  - Initial stage after an employee’s vacation has started.

  - Based on Muqeem status being updated to `OnVacation_OutSideKingdom`.

  - If employee returns, status becomes Valid, and request moves to **Return from Vacation.**

  - If return date is passed, moves to **Waiting for Return.**

  - **Actions :**
    - **Complete -** Manually move to **Return from Vacation.**

### 2. Waiting for Return

  - Activated 10 days before the employee’s expected return date.

  - System prepares to monitor the return via Muqeem.

  - If Muqeem status updates, move to Return from Vacation.

  - Can also be manually completed based on employee check-in.

  - **Actions :**
    - **Return -** Move to **Return from Vacation.**

### 3. Not Return

  - Triggered automatically if the employee does not return by the return date.

  - Serves as a flag for employees overdue.

  - **Actions :**
    - **Move to Waiting for Return -** Revert to **Waiting for Return stage.**

### 4. Return from Vacation

  - Triggered when Muqeem status changes to "Valid", indicating the employee has returned.

  - System determines next steps:
    - **Business Employees :** Update status to Working.
    - **Individual Employees :** If contract is available, re-assign and set status to Working.
    - **Others :** Create Check-in request; if not completed within 10 days, trigger Escape request.

### 5. Visa Expired

  - System Triggered when:

    - Employee did not return,
    - Their visa has expired.
    - System moves request here automatically.

  - **Actions :**
    - **Iqama Expired -** Move to **Iqama Expired stage.**
    - **Move to Waiting for Return -** Move to **Waiting for Return stage.**

### 6. Iqama Approval Cancellation

  - System Triggered if:

    - Employee did not return, and
    - Iqama is expiring in less than 10 days.

  - This stage is used to initiate cancellation processes.

### 7. Iqama Expired 

  - System Triggered when:

    - Employee did not return, and
    - Their Iqama has expired.

  - **Actions :**
    - **Waiting for Return -** Move to **Waiting for Return stage.**

### 8. Left Not Return

  - Employee is confirmed not to have returned.

  - Muqeem marked as Left Not Return.

  - Automatically initiates Retirement or contract closure.

  - No Actions (tracking-only stage)

### 9. Completed

  - Final stage after successful return and reactivation or post-processing.

  - Status used for reporting and audit purposes.