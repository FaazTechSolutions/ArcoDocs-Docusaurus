---
sidebar_position : 2
---

# Refuse to Work

  This Transaction will initiates with Sub-Category in different sources.

**Refuse to Work Process**

  This process is triggered based on the employee's Return Reason (Sub-Category) after they refuse to resume work upon return.

**1. Request for Vacation**

  - If the employee refuses to work and requests vacation upon return:

    - The process starts at the Waiting for Vacation stage.
    - The employee's status is updated to Waiting for Vacation.

**2. Request for Exit**

  - If the employee refuses to work and requests Exit or Retirement upon return:

    - The process starts at the Waiting for Exit stage.
    - The employee's status is updated to Waiting for Exit.

**3. Other Sub-Categories**

  - For all other reasons not categorized as Vacation or Exit:

    - The process starts at the Under Investigation stage.
    - The employee's status is updated to Under Investigation.

## Workflow Stages & Actions :

### 1. Under Investigation

  - Employees were Under Investigation, if he refuse to work.

  - **Actions :**
    - **Refuse to Work -** Moves to Refuse to Work stage.
    - **Legal Action -** Moves to Legal Action stage.
    - **Waiting for Vacation -** Moves to Waiting for Vacation stage.
    - **Waiting for Exit -** Moves to Waiting for Exit stage.
    - **Rest -** Moves to Complete stage.

### 2. Refuse to Work

The Investigation Process is initiated when an employee refuses to resume work.

  - If the employee refuses to work, the Investigation Process begins automatically.

  - If the employee is willing to return to work, their status is updated to Ready to Work.

  - If the employee requests vacation, a Leave Request is created using the required employee information.

  - If the employee requests a Final Exit, a Retirement Request is generated with the necessary details.

  - **Actions :**
    - **Under Investigation -** Return to Under Investigation stage.
    - **Legal Action -** Moves to Legal Action stage.
    - **Waiting for Vacation -** Moves to Waiting for Vacation stage.
    - **Waiting for Exit -** Moves to Waiting for Exit stage.
    - **Rest -** Moves to Complete stage.

### 3. Legal Action

  - Once the investigation is complete, appropriate action will be taken if the employee is found to have committed any misconduct.

  - **Actions :**
    - **Under Investigation -** Return to Under Investigation stage.
    - **Waiting for Vacation -** Moves to Waiting for Vacation stage.
    - **Waiting for Exit -** Moves to Waiting for Exit stage.
    - **Rest -** Moves to Complete stage.

### 4. Waiting for Vacation

  - This stage is pending completion of either the Leave Request or Retirement Request for the employee.

  - Once the respective process (leave or retirement) is finalized, this stage will be marked as complete through system integration.

  - **Actions :**
    - **Under Investigation -** Return to Under Investigation stage.

### 5. Waiting for Exit

  - Once the employee’s exit process is completed, this stage will be marked as complete, and the employee's status will be updated to Exited.

  - **Actions :**
    - **Under Investigation -** Return to Under Investigation stage.

### 6. Complete

  - Shows the Completed Refuse to Work employee list.

  - _No further actions required._