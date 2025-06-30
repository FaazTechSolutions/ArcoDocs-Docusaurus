---
sidebar_position : 1
---

# Rest

  - Once Employee Return from vacation or come by transfer, if he needs rest he can initiate the process here.

  - Rest Transaction will initiate with Sub-Category from different sources.

**Rest Process will start based on sub-category as follows :**

  - Local Vacation

  - Documentation

  - Reserved for VIP

  - Reserved for Sales

  - Hourly Reserved

  - Waiting for Document

## Workflow Stages & Actions :

### 1. New

  - Displays the Newly initiated requests.

  - **Actions :**
    - **Rest -** Moves to Rest stage.
    - **Reserved for VIP -** If that is Reserved for VIP, it moves to Reserved for VIP stage.
    - **Waiting for Action -** Moves to Waiting for Action stage.
    - **Update Process -** Moves to update process stage.

### 2. Rest

  - It shows the employees who are all taking rest.

  - **Actions :**
  - **Reserved for VIP -** If that is Reserved for VIP, it moves to Reserved for VIP stage.
  - **Waiting for Action -** Moves to Waiting for Action stage.
  - **Reserve for Sales -** Moves to Reserve for Sales.
  - **Update Process -** Moves to Hourly Reserved.

### 3. Reserved for VIP

  - Employees Reserved for VIP Customer.

  - **Actions :**
    - **Complete -** Moves to Waiting for Action stage.

### 4. Reserved for Sales

  - Employees Reserved for Sales.

  - **Actions :**
    - **Complete -** Moves to Waiting for Action stage.

### 5. Hourly Reserved

  - Reserved for Hourly employees.

  - **Actions :**
    - **Waiting for Action -** Moves to Waiting for Action stage.
    - **Move to Rest -** Return to Rest stage.

### 6. Waiting for Document

  - Employees who are all waiting for Document.

  - **Actions :**
    - **Waiting for Action -** Moves to Waiting for Action stage.
    - **Rest -** Return to Rest stage.

### 7. Re-Training

  - Employees are in Re-Training.

  - **Actions :**
    - **Waiting for Action -** Moves to Waiting for Action stage.
    - **Rest -** Return to Rest stage.

### 8. Waiting for Acion

  - Employees are awaited for taking action.

  - **Actions :**
    - **Ready to Work -** Moves to Complete stage.
    - **Refuse to Work -** Moves to Complete stage.
    - **Leave -** Moves to Complete stage.
    - **Final Exit -** Moves to Complete stage.
    - **Move to Rest -** Return to Rest stage.

### 9. Complete

  - Shows the Completed Rest list of the Employees.

  - _No further actions required._