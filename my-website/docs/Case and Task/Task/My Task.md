---
sidebar_position : 1
---

# Task

### Case and Task Overview

A dynamic workflow module integrated with the Client Portal to manage requests and actions.

### Key Features:

  - **Flexible Workflow:**

    - Supports customizable processes based on case or task type.

  - **Client Interaction:**

    - From the Customer Portal, clients can:

      - View their related cases and tasks

      - Update the status of requests (e.g., inprogress, close, cancel)

  - **Use Cases:**

    - Can be used for approvals, document submissions, follow-ups, etc.

------------------------------------------------

## Task Module Overview

Allows users to manage tasks and collaborate across departments.

### Key Features:

  - Users can create, update, and change status of tasks.

  - Department managers can view and update tasks assigned to their team.

  - Users can add attachments and comments on the task details page.

### Common Workflow Stages and Actions for the Pages in My Task

### 1. New

  - Default initial status when a task is created.

  - **Actions :**
    - **Doing -** Start Task, Moves to InProgress stage.
    - **Forward -** Task is forwarded to another department. Assigned to the **new user**.
    - **Reply -** Reassign the task back to the original creator. Status becomes **New**.
    - **Cancel -** Task is canceled with a required comment. Moves to Cancelled stage.

### 2. InProgress

  - The task is actively being worked on.

  - **Actions :**
    - **Complete -** Completed Task, Moves to Resolved stage.
    - **Cancel -** Task is canceled with a required comment. Moves to Cancelled stage.
    - **Forward -** Task is forwarded to another department. Assigned to the **new user**.
    - **Reply -** Reassign the task back to the original creator. Status becomes **New**.

### 3. Resolved

  - Task is marked as completed and closed with comments.

  - **Actions :**
    - **ReOpen -** To Reopen the Resolved task, Moves to Reopen stage.

### 4. Cancelled

  - The task has been canceled, with comments explaining the reason.

### 5. ReOpen

  - A previously Resolved or Cancelled task has been reopened for further action.

  - **Actions :**
    - **Doing -** Start Task, Moves to InProgress stage.
    - **Forward -** Task is forwarded to another department. Assigned to the **new user**.
    - **Reply -** Reassign the task back to the original creator. Status becomes **New**.
    - **Cancel -** Task is canceled with a required comment. Moves to Cancelled stage.

------------------------------------------------

### My Task Module Includes,

  1. Pending Task with Me
  2. Created by Me
  3. Related to Me

 > **Note :** The Workflow Stages and Actions are common for Task module which have been given above.

### 1. Pending Task with Me

  - Tasks that are currently assigned to you and waiting for your action.

  - Includes tasks in statuses like New, Todo, or InProgress.

### 2. Created by Me

  - Tasks that you have created.

  - Useful for tracking progress and updates, even if someone else is assigned.

### 3. Related to Me

  - Tasks where you are involved but not the main assignee.

  - Could include tasks forwarded by you, reassigned to you, or where you've added comments or attachments.