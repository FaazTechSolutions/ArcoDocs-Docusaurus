---
sidebar_position : 1
---

# Payable Assignment

  - Used to manage employees assigned to hourly work within the Hourly Sector.

    - Users can create assignments for active employees designated for hourly work.

  - To Create Payable assignment the following fields are mandatory,

    - Employee Id
    - Valid From
    - Valid To
    - Reason

## Workflow Stages & Actions :

### 1. Active

  - The system integrates with the Hourly Sector via API to initiate the assignment.

  - The employee's status is updated to "Hourly -ReadyToWork".

  - **Actions :**
    - **End Contract -** Moves to Completed stage.

### 2. Completed

  - The employee's assignment ends on the requested end date.

  - The system integrates with the Hourly Sector to mark the employee as ended.

  - After the assignment ends, a Labour Case is automatically created based on predefined options.