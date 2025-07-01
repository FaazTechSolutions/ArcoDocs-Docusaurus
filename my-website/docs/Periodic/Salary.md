---
sidebar_position : 5
---

# Salary

Handles detailed salary information for each payroll cycle.

Users can perform actions based on the current payroll status.

### Key Functions & Workflow

**1. Initial State**

  - Salary status begins as **None**.

**2. Posting to Finance**

  - Salary data can be posted to the finance system manually.

  - Alternatively, the system will **auto-post** salaries **after month-end** without user action.

**3. Initiate Salary Payment**

  - User selects salary details to initiate payment.

  - This triggers the **Payment Request** process.

  - Salary status updates to `"Salary Payment Request"`.

**4. Hold / Release Salary**

  - Salary can be put on **Hold** (e.g., if an employee has absconded).

    - Status changes from **None** to **Hold**.

  - Later, the salary can be released if necessary.