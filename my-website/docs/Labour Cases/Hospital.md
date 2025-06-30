---
sidebar_position : 5
---

# Hospital

  - It shows the hospitalized employees due to sick/illness.

  - It shows the process of employee hospitalizing and recovery.

## Workflow Stages & Actions :

### 1. New

  - Newly hospitalized employee list and details.

  - **Actions :**
    - **Sent to Hospital -** Moves to Sent to Hospital stage.
    - **Sick Leave -** Moves to Sick Leave stage.
    - **Waiting for Action -** Moves to Waiting for Action stage.

### 2. Sent to Hospital

  - Employees sent to hospital for treatment list and details.

  - **Actions :**
    - **Admitted to Hospital -** Moves to Admitted to Hospital stage.
    - **Sick Leave -** Moves to Sick Leave stage.

### 3. Admitted to Hospital

  - Employees were sick and admitted to hospital.

  - **Actions :**
    - **Sick Leave -** Moves to Sick Leave stage.
    - **Waiting for Action -** Moves to Waiting for Action stage.

### 4. Sick Leave

  - Displays list of employees in Sick Leave.

  - **Actions :**
    - **Waiting for Action -** Moves to Waiting for Action stage.

### 5. Waiting for Action

  - Investigation process will initiate, once employee return to lodging.

  - **Actions :**
    - **Ready to Work -** Flow will complete and Moves to Complete stage.
    - **Refuse to Work -** Flow will complete and Moves to Complete stage.
    - **Sent to Hospital -** Complete and Moves to Sent to Hospital stage.

### 6. Complete

  - Displays the data which completed the flow in Hospital.