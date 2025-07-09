---
sidebar_position : 8
---

# Labor Retrun Request

The Labor Return Request is used when an employee who was previously reported as escaped (missing from lodging or customer site) returns and wishes to be reinstated. This process allows for proper verification, contract restoration, and status update across the system.

Fields to Create Labour Return Request

  - Labor ID
  - Project Officer
  - Employee Return Place
  - Return Reason (Terminated by Client, Refuse to work, etc,.)
  - Sub Reason (Unpaid Salary, Incomplete Salary)
  - Upload File/Document

### Workflow Stages & Actions :

### 1. New Request

  - The initial stage where the Labor Return Request is submitted.

  - Basic validation is done to check if the employee was marked as “Escaped.”

  - **Actions :**
    - **Ending Labor Contract -** Moves to Ending Labor Contract stage.
    - **Rejected -** Moves to Rejected stage.

### 2. Ending Labour Contract

  - System initiates the termination process of the existing labor contract (if applicable).

  - Removes the employee from customer assignment (if not already removed).

  - Prepares status for MOL/GOSI updates.

  - **Actions :**
    - **Completed -** Moves to Completed stage.
    - **Rejected -** Moves to Rejected stage.

### 3. Rejected

  - Request is denied due to invalid reason, missing documents, or employee ineligibility.

  - No changes made to employee status.

### 4. Completed

  - The return request process is finalized.

  - Employee status updated (e.g., from “Escaped” to “Returned” or “Inactive” depending on HR policy).

  - Contract history and escape-return timeline logged.