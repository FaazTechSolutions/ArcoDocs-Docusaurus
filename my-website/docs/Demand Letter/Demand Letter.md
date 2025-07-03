---
sidebar_position : 1
---

# Demand Letter

## Overview

  - A Demand Letter is used to assign a RON to an agent.

  - Users create Demand Letter Lines based on RON Lines.

  - A Demand Letter Line is also known as a Job Post.

  - To Create Demand Letter, the following fields are mandatory,
    - Recruitment Order ID
    - Name
    - Agent ID

### Demand Letter - Details Page Overview

  - Shows complete details of the Demand Letter, including:

    - Linked Recruitment Order,
    - Allowance & Provided details,
    - Coordinator information.

  - Users can:

    - View **Demand Letter Lines** and take action on **Ewakala Requests**.
    - View **Ewakala Demand Letter** and take action on **Ewakala Transfers**.
    - Track the **current process stage** of the Demand Letter.

### Workflow Stages & Actions :

### 1. Draft

  - Initial stage after Demand letter creation.

  - **Actions :**
    - **Send to Approval -** Send for approval & Moves to Approval stage.
    - **Cancelled -** Moves to Cancelled stage.

### 2. Approval

  - Awaiting approval from management.

  - **Actions :**
    - **Approved -** Approved & Moves to Document Preparation stage.
    - **Cancelled -** Moves to Cancelled stage.
    - **Draft -** Moves to Draft again.

### 3. Document Preparation

  - Documents prepared for agent and embassy (especially for Philippines nationality).

  - **Actions :**
    - **Send to Embassy Approval -** Moves to Embassy Approval.
    - **Draft -** Moves to Draft again.

### 4. Embassy Approval

  - Waiting for approval from the embassy.

  - **Actions :**
    - **Active -** Moves to Active stage.
    - **Cancelled** Moves to Cancelled stage.
    - **Closed -** Moves to Closed stage.

### 5. Active

  - Letter is active and ready for use.
  - Candidates can now be assigned to the Demand Letter.
  - Candidate assignment can be done by IR users or agents via portal.
  - The application process starts after assignment.

  - **Actions :**
    - **Closed -** Moves to Closed stage.
    - **Update Demand Approval -** Moves to Update Demand Approval stage.

### 6. Update Demand Approval

  - For requesting modifications or updates to the demand.

### 7. Closed

  - Can be closed manually by the user.
  - System auto-closes if all jobs are fulfilled.
  - Cannot be closed if:
    - Candidate selection is still pending before travel.
    - Assigned Ewakala (agency authorization) has remaining balance.
  - **Actions :**
    - **Active -** Moves to Active stage.

### 8. Cancelled

  - Demand Letter is marked as void or cancelled.