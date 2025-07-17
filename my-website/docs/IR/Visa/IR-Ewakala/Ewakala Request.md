---
sidebar_position : 1
---

# Ewakala Request

The Ewakala Request facilitates the issuance of legal authorization (Ewakala) required for processing visas, created based on a valid Demand Letter and Delegation Number.

**Key Functionalities:**

  - **Created From:**

    - Demand Letter
    - Must have a valid Delegation Number to proceed.

  - **Ewakala Lifecycle:**

    - User initiates the request using the Demand Letter and Delegation Number.
    - System tracks the progress of the request until completion.

  - **User Actions:**

    - Can create a new Ewakala Request.
    - Can cancel an Ewakala Request before completion.

  - **Outcome:**

    - Once the flow is completed successfully, the system generates the final Ewakala document/number.

### Workflow Stages & Actions :

### 1. Approval

  - The Ewakala request is created and submitted for internal approval.

  - **Actions :**
    - **Create in Enjaz -** Moves to Create_In_Enjaz stage.
    - **Rejected -** Moves to Rejected stage.

### 2. Create_in_Enjaz

  - After approval, the request is pushed to the Enjaz system for Ewakala creation.

  - **Actions :**
    - **CreateInEnjaz to Payment -** Moves to Payment stage.
    - **Rejected -** Moves to Rejected stage.

### 3. Payment

  - Required payment is processed to proceed with the Ewakala.

  - **Actions :**
    - **Under Process -** Moves to Under Process stage.
    - **Create_In_Enjaz -** Return to Create_In_Enjaz stage.

### 4. Under Process

  - The request is under review or in progress in the Enjaz system.

  - **Actions :**
    - **Complete -** Moves to Completed stage.
    - **Rejected -** Moves to Rejected stage.

### 5. Completed

  - Ewakala is successfully issued and received.

### 6. Rejected

  - The request is denied at any stage due to validation issues, missing data, or system rejection.

  - **Actions :**
    - **Approval -** Return back to Approval stage.