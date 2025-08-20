---
sidebar_position : 1
---

# Iqama Renewal

## Renewal

- Manual Renewal requests are initiated by users or customers through the Case Management system.

- These requests are triggered based on the expiry date of employee documents (e.g., Iqama, ATM, Insurance).

- Once created, the Renewal request is managed in both Case Management and the HR system.

- The workflow stages and statuses are kept in sync across both systems using event-based configuration.

## Iqama Renewal

  - Iqama renewal is triggered automatically by the system 60 days before the Iqama expiry date.

  - **Eligibility Checks:**

  - The system will not allow Iqama renewal in the following cases:

    - A retirement request is pending.

    - The employee is in Escape or Inactive status.

**Renewal Period Options:**

  - 3 months
  - 6 months
  - 9 months
  - 12 months

## Workflow Stages & Actions :

### 1. Newly Required Renewal

  - Triggered when Iqama is within 60 days of expiry.

  - **Actions :**
    - **Complete -**  Moves the request to the Customer Approval stage.

### 2. Customer Approval

  - Follow-up user selects desired renewal period.

  - **Actions :**
    - **Approve -** Confirms the selected renewal period and proceeds.
    - **Not Agree -** Declines the renewal request.
    - **Priority Finance Approval -** Escalates the request for priority processing by Finance.

### 3. Iqama Less than 30 days

  - If expiry is `<30` days and process is before Work Permit stage, system moves here. User completes stage by selecting renewal period.

  - **Actions :**
    - **Move to Work Permit -** Advances the request to the Work Permit stage.
    - **Priority Finance Approval -** Escalates the request for priority handling.

### 4. Agree

  - Indicates agreement to proceed with renewal.

  - **Actions :**
    - **Agree -** Confirms agreement and moves forward.
    - **Not Agree -** Declines renewal.
    - **Priority Finance Approval -** Sends the request for priority review by Finance.

### 5. Work Permit

  - User completes this stage by providing Work Permit Reference Number.

  - **Actions :**
    - **Complete -** Confirms and moves to the next stage.
    - **Not Agree -** Declines the renewal.
    - **Waiting for Reference Number -** Pauses the request until the reference number is available.
    - **Finance Approval -** Sends the request for financial review, if needed.

### 6. Priority Finance Approval

  - For high-priority renewals, request is moved here. Finance user must approve it to proceed.

  - **Actions :**
    - **Approve -** Approves the request and moves it to the Priority Request stage.
    - **Reject - Previous Stage -** Sends the request back to the prior stage for review or correction.

### 7. Priority Request

  - Approved priority requests are processed further.

  - **Actions :**
    - **Payment -** Proceeds to the payment stage.
    - **Customer Approval -** Re-checks customer’s consent or details if required.
    - **Waiting for Reference Number -** Moves the request to a waiting state if key reference data is missing.

### 8. Waiting for Reference Number

  - Temporary stage awaiting necessary reference number input.

### 9. Iqama Payment

  - Managed in Finance through a Payment Request.

### 10. Iqama Renewal

  - Triggered automatically via Muqueem Integration upon payment completion.
  - If integration fails, users can retry after checking error logs.
  - Manual entry possible (export/import Iqama data), then mark as Complete.

  - **Actions :**
    - **Complete -** Moved to Completed stage.
    - **Hold -** Moves the request to a hold state due to issues or pending inputs.

### 11. Cases Hold

  - User can move request here for any pending/blocked cases.

  - **Actions :**
    - **Resume -** Resumes processing by returning the request to the previous active stage.
    - **Reject -** Cancels the request if it cannot proceed.

### 12. Not Agree

  - If renewal is declined before the Payment stage.

  - **Actions :**
    - **Agree -** Changes status to proceed if reconsidered.
    - **Reject -** Finalizes the rejection and stops the process.

### 13. Complete

  - Final stage when renewal is successfully processed (automatically or manually).

  - _No further actions are available at this stage._