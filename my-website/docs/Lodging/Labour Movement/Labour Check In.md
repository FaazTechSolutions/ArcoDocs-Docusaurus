---
sidebar_position : 1
---

# Labour Check In

  - This Request will initiate the process of Labour Check In.

  - From the following source check-in request will create,

    - Customer Return (Business/Individual)
    - Vacation Return
    - Escape Return
    - Transfer Lodging
    - Manual CheckIn (Ended Contract from Business)

## Workflow Stages & Actions :

### 1. Requested

  - Displays employees requested for Labour Check In.

  - **Actions :**
    - **Complete -** Moves to Waiting for CheckIn stage.
    - **Reject -** Moves to Cancel stage. 

### 2. Waiting for CheckIn

  - The user completes the check-in process using the current date.

  - A lodging in-out history record is created by check-in.

  - **Actions :**
    - **Complete -** Moves to Update Worker Status stage.
    - **Reject -** Moves to Cancel stage.

### 3. Update Worker Status

  - User will decide the status of the employee by selecting Return Reason.

  - **End of Contract**
    - Employee status changed to ready to work.

  - **Request for Vacation**
    - Investigation process created with stage Request for Vacation.

  - **Request for Exit**
    - Investigation process created with stage Request for Exit.

  - **Compaint from Employee/Customer**
    - Investigation process created with stage Investigation.

  - **Sick**
    - Hospital transaction will start.

  - **Rest**
    - Rest transaction will start with Sub-category.

  - **Actions :**
    - **Complete -** Moves to Confirmed stage.
    - **Reject -** Moves to Cancel stage.

### 4. Confirmed

  - Displays the list of Confirmed labour checkin requests.

### 5. Cancel

  - Displays the list of Cancelled labour checkin requests.

  - **Actions :**
    - **Requested -** Return to Requested stage again.