---
sidebar_position : 1
---

# Employee Vacation Request

### Customer Request Module Overview

The Customer Request module handles case types categorized specifically under "Customer Request". Some of these requests are directly integrated with HR processes and are triggered through specific HR events.

### Types of Customer Requests

The following request types are supported within this module:

  1. Vacation Request
  2. Retirement Request
  3. ATM Re-Issuance
  4. ATM Renewal Request
  5. Chamber of Commerce Attestation
  6. Iqama Re-Issuance
  7. Iqama Renewal Request
  8. Employee General Request

> **Key Notes:**
>
>  - Each request type is treated as a case with its own workflow.
>
>  - HR Integration: Some requests trigger or align with backend HR processes, ensuring seamless handling and compliance.

## Employee Vacation Request

The vacation request process starts in the Case Management system and works closely with the HR system. It covers everything from submitting a leave request to handling approvals, settlement, visa, travel, and final confirmation.

The flow is automatic and updates between systems based on actions and status changes.

### Create a Vacation Request

Users or customers can create a vacation request by filling in key details like:

  - Employee ID and Contract Number

  - Contact details (email, phone, etc.)

  - Travel Date, Return Date, Last Working Date

  - Vacation Type (Paid, Unpaid, Local, or Encashment)

  - Travel From (if the employee is from Lodging)

### Vacation Types and What They Trigger

  - **Paid Leave:** Needs settlement and visa (travel optional)

  - **Unpaid Leave:** Needs visa (travel optional)

  - **Local Leave:** Needs settlement only

  - **Encashment:** Needs settlement only

### Workflow Stages & Actions :

### 1. New Request

  - Initial stage where the employee or customer submits a vacation request.

  - **Actions :**
    - **Arco Approval -** Send to Arco Approval.
    - **Rejected -** Move to Rejected.

### 2. Arco Approval

  - HR (Arco) validates the request and employee’s eligibility.

  - **Actions :**
    - **New Request -** Move back to New Request if revisions are needed.

### 3. Customer Approval

  - Customer reviews and approves the request.

### 4. Finance Approval

  - Finance department reviews financial implications.

  - **Actions :**
    - **Customer Confirmation -** Proceed to Customer Confirmation

### 5. Customer Confirmation

  - Customer gives final confirmation.

  - **Actions :**
    - **Approved for Payment -** Move to Approved for Payment.
    - **Customer Rejection -** Move to Customer Rejection.

### 6. Approved for payment

  - Vacation request is approved and ready for processing.

### 7. Visa Requested

  - Visa application is initiated for employees traveling abroad.

### 8. Visa Under Payment

  - Finance processes payment for visa issuance.

### 9. Visa for Issuance

  - Visa is under processing in the Muqeem or related system.

  - **Actions :**
    - **Completed -** Move to Completed stage.

### 10. Visa on Hold

  - Visa request is paused due to issues or clarifications.

### 11. Ticket Requested
  
  - Travel ticket booking process is initiated.

### 12. Ticket Under Approval

  - Manager or travel coordinator reviews and approves travel details.

### 13. Ticket for Payment

  - Finance processes travel ticket payment.

  - **Actions :**
    - **Completed -** Move to Completed stage.

### 14. Ticket on Hold

  - Ticket process is paused/hold temporarily.

### 15. Rejected

  - Request was rejected at any stage of the process.

### 16. Completed

  - All steps are successfully completed; vacation is confirmed.

### 17. Customer Rejection

  - Customer declined the request after confirmation or approval.

### Sub-Processes

**Settlement Process**

  - Starts 10 days before the Last Working Date (LWD).

  - Includes clearance, client approval, and payment.

  - Once done, it moves to visa (if needed).

**Visa Process**

  - Applies for a visa via the HR system.

  - Includes approval, finance payment, and Muqeem processing.

  - Once visa is issued, moves to Travel (if needed).

**Travel Process (for Business employees)**

  - Handles travel plans and payment.

  - Once travel is confirmed, the request is completed.

### Other Workflow Steps

**Check-In Lodging**

  - If "Lodging" is selected, the system waits for the employee to check in before allowing travel.

**Waiting for Travel**

  - System tracks Muqeem status.
When status is "OnVacation", the request is marked as completed.

**Rejected Request**

  - If rejected at any step, it moves here and then closes.

**Completed**

  - All steps are done — leave is approved, processed, and travel (if any) is complete.