---
sidebar_position : 1
---

# Ewakala Request

An Ewakala Request is used to generate an official authorization (Ewakala) for visa processing, typically created from a Demand Letter.

  - Created from a Demand Letter.

  - Requires a Delegation Number to initiate.

  - User has the option to cancel the Ewakala at any time before completion.

  - Once the process is completed, the official Ewakala document is received.

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