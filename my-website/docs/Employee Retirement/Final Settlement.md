---
sidebar_position: 1
---

# Final Settlement

## Settlement Payment

  - This stage manages the calculation and processing of vacation settlement payments for employees taking leave. It includes several sub-stages to handle internal clearance, client approvals, and financial processing before moving to the Visa Request stage (if applicable).

**Settlement Calculation Logic:**

  - Settlement is calculated from the later of:
    - The last vacation return date or arrival date.
    - Up to the employee's Last Working Date (LWD)

## Workflow Stages & Actions:

### 1. Requested

  - Initial entry into the settlement workflow after reaching within 10 days of LWD.

  - **Actions:**
    - **Move to Clearance** - Move to **Clearance Process.**

### 2. Clearance Process

  - Internal clearance validation via the clearance module.

  - **Actions:**
    - **Request -** Trigger a clearance request in the clearance system
    - **Complete -** Once clearance is approved, move to **Approval**.

### 3. Approval

  - Determines whether client confirmation is needed or can proceed directly to payment.

  - **Actions:**
    - **Complete -** Move to **Client Confirmation**.
    - **Re-Calculate Clearance -** Return to **Clearance Process**
    - **Move without Payment -** Skip payment and move to Complete

### 4. Client Confirmation

  - Client reviews and confirms the calculated settlement.

  - **Actions:**
    - **Confirm -** Move to Payment
    - **Move to Clearance -** Return to Clearance Process for re-calculation

### 5. Payment

  - Payment is processed in the Finance Department. On completion, system updates the status.

  - **Actions:**
    - **Complete -** Move to **Complete**
    - **Re-Calculate -** Return to **Clearance Process**

### 6. Client Rejection

  - Triggered if the client rejects the settlement during Client Confirmation.

  - **Actions:**
    - **ReSend-Customer Confirmation -** Move back to **Client Confirmation**
    - **Re-Calculate -** Return to **Clearance Process**

### 7. Complete

  - Settlement process is finalized and recorded.

  - Leave Request will move to Visa Request.