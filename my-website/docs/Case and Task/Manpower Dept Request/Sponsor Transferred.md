---
sidebar_position : 1
---

# Sponsor Transferred W/O Approval

Manage sponsor transfer of employees without needing formal approval, under specific conditions.

### Key Workflow Summary

  - **Initiation:**

    - A user submits a request via a form.
    - The system validates if:

      - The employee is active.
      - The employee is not listed in Muqueem (external system).

    - If valid, the system automatically creates the transfer request.

### Workflow Stages and Actions :

### 1. Manpower Supervisor Evaluation

  - Evaluates if the employee is still actively working.

  - If the employee is not working, their status is updated to:

    - “Waiting for Action – Transferred Without Approval”

  - **Actions :**
    - **Manpower Documentation -** Moves to Manpower Documentation stage.

### 2. Manpower Documentation

  - Collect and verify necessary documents for the transfer.

  - **Actions :**
    - **Follow-up-feedback -** Moves to Follow-up-feedback stage.

### 3. Follow-up-Feedback

  - Communication and follow-up with related parties (employee, departments, etc.).

  - Collect feedback or updates.

  - **Actions :**
    - **Finance Verification -** Moves to Finance Verification stage.

### 4. Finance Verification

  - Financial department reviews for any pending dues or settlements.

  - **Actions :**
    - **Manpower Director Approval -** Moves to Manpower Director Approval stage.

### 5. Manpower Director Approval

  - Final internal approval by the Manpower Director before proceeding.

  - **Actions :**
    - **Legal Verification -** Moves to Legal Verification stage.
    - **Finance Verification -** Return back to Finance Verification stage.
    - **Follow-up-Feedback -** Return back to Follow-up-Feedback stage.
    - **Hold -** Moves to Hold stage.

### 6. Hold

  - Request is temporarily paused due to pending issues or awaiting input.

### 7. Legal Verification

  - Legal department reviews case for any legal implications or violations.

  - **Actions :**
    - **File a CASE -** Moves to **File a CASE** stage.
    - **Completed -** Moves to Completed stage.
    - **Finance Verification -** Return back to Finance Verification stage.
    - **Manpower Director Approval -** Return back to Manpower Director Approval stage.
    - **Rejected -** Moves to Rejected stage.

### 8. File a CASE

  - If required, a legal case is prepared and submitted.

  - **Actions :**
    - **CASE filed in Court -** Moves to **Case filed in court** stage.
    - **Legal Verification -** Moves to Legal Verification stage.

### 9. CASE Filed in Court

  - The legal case has been officially filed in court.

### 10. CASE Won

  - Organization has won the case; process can continue.

### 11. CASE Loss

  - Organization loses the case—different handling or closure may be required.

### 12. Completed

  - Request is finalized.

  - Employee status updated (e.g., Terminated – Transferred Without Approval).

  - Retirement request is auto-created with **EOSCategory = "Transferred"**.

### 13. By Muqeem Draft

  - Draft stage triggered automatically by scheduled process (Muqeem check).

### 14. Rejected
 
  - Request is denied and closed without processing further.