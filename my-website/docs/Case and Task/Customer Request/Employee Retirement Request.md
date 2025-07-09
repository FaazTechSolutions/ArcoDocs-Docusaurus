---
sidebar_position : 2
---

# Employee Retirement Request

### Overview

The Retirement Request is initiated by the user or customer through Case Management. It follows a process similar to the Vacation Request, involving approvals, settlement, visa, travel arrangements, and final clearance.

The system synchronizes each stage with the HR module through predefined event triggers.

### Required Fields to Create a Retirement Request

  - Employee ID
  - Contract Number
    - Contact Person
    - Email
    - Mobile Number
    - Project Officer
    - Accountant

  - Expected Date of Leaving
  - Last Working Date
  - Need Exit (default: Yes)
  - Settlement (default: Yes)
  - Travel From (default: Lodging – mandatory for individual sector employees)

### Workflow Stage and Actions :

### 1. New

  - Initial stage where the employee or customer submits a retirement request.

  - **Actoions :**
    - **Arco Approval -** Moves to Arco Approval stage.
    - **Rejected -** Moves to Rejected stage.

### 2. Arco Approval

  - HR (Arco) validates the request and employee’s eligibility.

  - **Actions :**
    - **New Request -** Move back to New Request if revisions are needed.
    - **IR Approval -** Move directly to IR Approval.

### 3. Customer Approval

  - Customer reviews and approves the request.

  - **Actions :**
    - **Under Process -** Begin internal processing.

### 4. IR Approval

  - Internal department gives clearance.
(No explicit actions mentioned; assumed transition to Finance Approval.)

### 5. Finance Approval

  - Finance department reviews financial implications.

  - **Actions :**
    - **Customer Confirmation -** Proceed to Customer Confirmation

### 6. Customer Confirmation

  - Customer gives final confirmation.

  - **Actions :**
    - **Approved for Payment -** Move to Approved for Payment.
    - **Customer Rejection -** Move to Customer Rejection.

### 7. Approved for payment

  - Retirement request is approved and ready for processing.

### 8. Visa for Issuance

  - Visa is under processing in the Muqeem or related system.

  - **Actions :**
    - **Completed -** Move to Completed stage.

### 9. Visa on Hold

  - Visa request is paused due to issues or clarifications.

### 10. Ticket Requested
  
  - Travel ticket booking process is initiated.

### 11. Ticket Under Approval

  - Manager or travel coordinator reviews and approves travel details.

### 12. Ticket for Payment

  - Finance processes travel ticket payment.

  - **Actions :**
    - **Completed -** Move to Completed stage.

### 13. Ticket on Hold

  - Ticket process is paused/hold temporarily.

### 14. Rejected

  - Request was rejected at any stage of the process.

### 15. Completed

  - All steps are successfully completed; vacation is confirmed.

### 16. Customer Rejection

  - Customer declined the request after confirmation or approval.