---
sidebar_position : 2
---

# Sponsor Transfer

## Sponsor Transfer Process

### Purpose

To handle the transfer of an employee's sponsorship from Arco to the customer, coordinated through the Mussaned portal.

### Process Overview

  - This process is currently executed via the external Mussaned portal.

  - Internal system is used to initiate, track, and record sponsor transfer requests.

### Request Creation

When a user creates a Sponsor Transfer Request, the following inputs are required:

  - **Employee Information**
  - **Attachments:**
    - A downloadable template is available.
    - User completes, signs, and re-uploads the document.
  - **Payment Details**

### Fee Calculation Components

  1. Due Invoices (any unpaid amounts under the current contract)
  2. Sponsor Transfer Fee - Retrieved from Transfer Fee Setup.

## Workflow Stages

### 1. Document Confirmation

  - User reviews and confirms all required documents.
  - Upon Confirmation, request is moved to **"InProgress in Mussaned"**.

  - **Actions :**
    - **Complete -** Moved to **InProgress in Mussaned** stage.
    - **Reject -** Request Reject and Moved to **Completed** stage.

### 2. InProgress in Mussaned

  - User initiates the sponsorship transfer request in the **Mussaned portal**.
  - After Submission, request proceeds to the Payment stage.

  - **Actions :**
    - **Complete -** Moved to **Payment** stage.
    - **Reject -**  Request Reject and Moved to **Completed** stage. 

### 3. Payment

  - Customer completes payment through the **Mussaned portal**.
  - The **Amount is transferred** to Arco's account.
  - A **Finance User** manually creates a **payment record** in the internal system.
  - User moves the request to the next stage: **"Approval for MOL"**.

  - **Actions :**
    - **Complete -** Moved to **Approval for MOL** stage.
    - **Reject -**  Request Reject and Moved to **Completed** stage. 

### 4. Approval for MOL

  - System or user tracks Ministry of Labor (MOL) approval.
  - Once approved, requests proceeds to the next stage.

  - **Actions :**
    - **Complete -** Moved to **Waiting for Transfer** stage.
    - **Reject -**  Request Reject and Moved to **Completed** stage. 

### 5. Waiting for Transfer

  - Awaiting final confirmation of **sponsorship transfer completion**.

  - **Actions :**
    - **Complete -** Moved to **End of Service** stage.
    - **Reject -**  Request Reject and Moved to **Completed** stage.

### 6. End of Service

  - Employee is removed from their contract assignment.
  - System Updates:
    - **Contract Status** changed to Ended with Transfer.
    - **Employee Status** changed to **"Iqama Transferred"** - Inside Kingdom.
    - An Employee Retirement Request is created with EOS Category - **"Transferred"**.

### 7. Completed

  - Final stage. Sponsor transfer is complete and reflected in all systems.