---
sidebar_position : 1
---

# Visa Request

**Visa Module**

This module is designed to manage Visa Requests, Ewakala Requests, and Visa Balance efficiently through a well-defined workflow.

Allows users to initiate and process visa applications through multiple approval stages.

  - Requested By
  - Requester
  - Sector
  - Employee Type
  - Contract Number

### Workflow Stages & Actions :

### 1. Draft

  - User can create Visa Request Lines on the Visa Request details page.

  - Price per Visa: 2,000 Riyals.

  - Fields in Visa Request Line:

    - Nationality
    - Profession
    - Gender
    - Requested Quantity
    - Destination

  - **Actions :**
    - **Sent to Approval -** Moves to Approval stage.
    - **Rejected -** Moves to Rejected stage.

### 2. Approval

  - Send request for Management Approval.

  - Once approved, it moves to the Visa Quota Request stage.

  - **Actions :**
    - **Approved -** Request Approved and Moves to Visa Quota Approval stage.
    - **Rejected -** Moves to Rejected stage.
    - **Draft -** Return back to Draft stage.

### 3. Visa Quota Approval

  - The request is reviewed and sent for Finance Approval.

  - **Actions :**
    - **Approved -** Request Approved and Moves to Finance Approve stage.
    - **Rejected -** Moves to Rejected stage.

### 4. Finance Approve

  - Finance team reviews and approves the budget/expenses.

  - Upon approval, moves to the Payment Request stage.

  - **Actions :**
    - **Move to Payment -** Request Approved and Moves to Payment Request stage.
    - **Rejected -** Moves to Rejected stage.

### 5. Payment Request

  - Payment is processed or requested.

  - Once complete, the request moves to Submitted.

  - **Actions :**
    - **Complete -** Moves to Submitted stage.
    - **Rejected -** Moves to Rejected stage.

### 6. Submitted

  - User updates visa details from the government portal:

    - Visa Number
    - Issue Date
    - Expiry Date

  - **Actions :**
    - **Approved -** Moves to Approved stage.
    - **Rejected -** Moves to Rejected stage.
    - **Payment Request -** Return Back to Payment Request stage.

### 7. Approved

  - Visa is officially approved.

  - A Block Visa and associated lines are generated based on the request.

### 8. Rejected

  - The request is denied; no further processing occurs.