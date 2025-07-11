---
sidebar_position : 2
---

# Replacement Request

## Purpose

To handle employee replacements under a contract, with or without associated fees based on system-defined limits.

## Business Rules

  - System Parameter:
    - **Allowed Replacement Count = 3**
    - **Replacement Fee = 100** (One-time fee when exceeded)

  - **If Total Replacement Requests ≤ Allowed Replacement Count (3):**
    - Request is moved directly to Completed stage (no payment required)

  - **If Total Replacement Requests > Allowed Replacement Count:**
    - A **One-time Invoice** is generated with the **Replacement Fee (100)**.
    - Request proceeds to the **Payment** stage.

## Workflow Stages

### 1. Payment (Only if fee is applicable)

  - Customer/User can make payment for the Replacement Fee.
  - Once payment is made:
    - Request moves to **Accountant Approval**.

### 2. Accountant Approval

  - **Finance User** reviews and approves. 
  - Manually moved to **Finance Manager Approval**.

### 3. Finance Manager Approval

  - Finance Manager gives final approval.
  - Request proceeds to Completed.

### 4. Completed

  - Replacement process is finalized.
  - Replacement is **eligible to proceed with a new employee assignment**.