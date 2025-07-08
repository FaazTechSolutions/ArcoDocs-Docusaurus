---
sidebar_position : 2
---

# Business Ticket

### Case Module Overview

  - **Dynamic Workflow**

    - Workflows are user-defined based on category.
    - Users can create custom forms per category to capture relevant data.

  - **Form Creation Includes:**

    - Customer Information
    - Contract Information
    - Employee Information
    - **Ticket Information:**
      - Channel
      - Priority
      - Issue Type
        - Request
        - Complaint
      - Group
        - Pulled from Issue Group setup (filtered by EntityId)
      - Sub Group
        - Pulled from Issue Sub Group setup (filtered by EntityId)
      - Subject
      - Description

### Workflow Stages & Actions :

### 1. New

  - Default initial status when a task is created.

  - **Actions :**
    - **InProgress -** Start working in ticket, Moves to InProgress stage.
    - **Cancel -** Ticket Cancel and Moves to Cancel stage.

### 2. InProgress

  - The Ticket is actively being worked on.

  - **Actions :**
    - **Resolved -** Ticket has been Resolved and Moves to Resolved stage.
    - **Cancel -** Ticket Cancel and Moves to Cancel stage.

### 3. Resolved

  - Issue is fixed, pending for confirmation.

  - **Actions :**
    - **Closed -** Issue Fixed, Moves to Closed stage.

### 4. Closed

  - Ticket is formally closed

  - **Actions :**
    - **ReOpen -** ReOpens the Resolved ticket, Moves to ReOpen stage.

### 5. ReOpen

  - Reopened due to follow-up or unresolved issue.

  - **Actions :**
    - **InProgress -** Start working in reopened ticket, Moves to InProgress stage.

### 6. Cancel

  - Ticket is cancelled with a reason.