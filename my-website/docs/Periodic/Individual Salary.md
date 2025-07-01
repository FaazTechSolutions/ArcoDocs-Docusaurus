---
sidebar_position : 6
---

# Individual Salary

Manages detailed salary information per employee within the payroll cycle.

### Process Overview

**1. Initial State**

  - Salary status is initially set to None.

**2. Automatic Posting**

  - The system will automatically post salary data to the finance system after the month-end, with no user action required.

**3. Initiate Salary Payment**

  - User can select individual salary details to initiate payment.

  - This triggers the Individual Payment Request process.

  - Salary status is updated to `"Salary Payment Request"`.

**4. Hold / Release Salary**

  - If an employee has **escaped or left unexpectedly**, the salary status can be changed from None to Hold.

  - Salary can be released manually later if needed.