---
sidebar_position : 6
---

# Escape

  - An Escape Request can be created either manually by the user or automatically from an individual module.

  - The employee’s status is initially set to Missing - Missing.

**After 10 Days**

  - If the employee is still missing, the system will automatically move the request to the Escaped stage.

  - The status is updated to Missing - Escaped.

  - This action can also be performed manually by the user.

**After 20 Days**

  - If the employee has not returned, the system moves the request to the Registered in MOL stage.

  - The status is updated to Escaped - Escaped.

  - This step can also be triggered manually by the user.

## Workflow Stages & Actions :

### 1. Missed

  - In this stage, the employee’s escape details must be recorded in the portal. The following information is required:

    - Labour ID
    - Escape Date
    - Remarks
    - Escape Point
    - Files (if any relevant document)

**Waiting Period :**

  - The system waits 10 days for the employee to return.

  - If the employee does not return within 10 days, the system automatically moves the request to the Escaped stage.

  - The employee’s status is updated to Missing - Escaped.

  - This transition can also be done manually by a user.

  - **Actions :**
    - **Complete -** Moves to Escaped stage.
    - **Escape Return -** Moves to Return from Escape stage.
    - **Jail -** Moves to Complete stage.

### 2. Escaped

  - In this stage, the system waits for the employee to return within 10 days.

  - If the employee remains missing for 20 days, the system will automatically move the request to the Registered in MOL stage.

  - The employee’s status will be updated to Escaped - Escaped.

  - This action can also be performed manually by the user.

  - **Actions :**
    - **Complete -** Moves to Registered in MOL stage.
    - **Escape Return -** Moves to Return from Escape stage.
    - **Gov Case -** Moves to Gov Case stage.
    - **Deport -** Moves to Deport stage.

### 3. Gov Case

  - It is assume as a Government Case, so it will move to Escaped stage automatically.

  - _No more actions required._

### 4. Registered in MOL

  - Register the employee as missing in MOL (Ministry of Labour).

  - **Actions :**
    - **Complete -** Moves to Complete stage.
    - **Escape Return -** Moves to Return from Escape stage.
    - **Move to Gov Case -** Moves to Gov Case stage.

### 5. Return from Escape

  - Once employee return will update here.

  - **Actions :**
    - **Complete -** Moves to Escaped Cancelled

### 6. UnRegister Muqeem

  - Once Employee return from escape also if the employee register in MOL. This stage will initiate for employees.

  - **Actions :**
    - **Complete -** Escaped Cancelled

### 7. Escaped Cancelled

  - If an employee is marked as Escaped Cancelled, the process begins from the Unregister Muqeem stage.

  - Once the Unregister Muqeem stage is completed, the request automatically moves to the Escaped Cancelled stage.

  - _No more actions required._

### 8. Deport

  - In this stage, the employee’s status is updated to Deport - Missing.

  - If the employee is deported, a Retirement Request will be created to process the Final Settlement. 

### 9. Complete

  - Once Escape complete, Employee status and Physical status also updated as Escaped.

  - System will create retirement request with "Escaped" EOS category.

  - Once Retirement request completed, Employee status updated to Terminated and Physical stages updated to Inside Kingdom.