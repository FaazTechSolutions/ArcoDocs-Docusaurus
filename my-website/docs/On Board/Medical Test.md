---
sidebar_position: 1
---

# Medical Test

## Overview of Onboarding Process:

  - It is initiated after the employee arrives.

  - Employee status is set to `"New"`, and changes to `"With Customer"` once they reach the customer.

  - Initial onboarding steps include:
    - Medical Test
    - New Employee Request
    - Insurance Setup

## Medical Test

Medical Test Request is initiated for a new employee once they arrive.

**Medical Test Workflow:**

### 1. Newly Required

  - All new medical test requests start here, waiting to be processed.

  - **User Actions:**
    - **Complete -** Move request to Waiting for Result.
    - **Waiting from Customer -** Customer may receive employee directly from arrival stage, so customer can proceed for the medical test.

### 2. Waiting for Result

  - Medical test done; waiting for results to be updated.

  - **User Actions:**
    - **Fit -** Move request to Complete.
    - **Not Fit -**  Move request to Not Fit.

### 3. Waiting From Customer

  - Notification sent to customer for the medical test.

  - Follow-up department confirms the test and moves it to the Complete stage.

  - **User Actions:**
    - **Fit -** Move request to Complete.
    - **Not Fit -** Move request to Not Fit.
    - **Recalculate -** Start the Medical test from beginning.

### 4. Not Fit

  - Requests rejected due to unfit result; can be reprocessed.

  - If rejected again, the request is finalized as rejected.

  - **User Actions:**
    - **Complete -** Final rejection and exit process starts.
    - **Fit -** Move request to Complete.

### 4. Complete

  - Medical test is completed and approved. Now the Emloyee is fit.

  - Labour office payment process begins for the employee.