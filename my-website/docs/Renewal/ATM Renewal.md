---
sidebar_position : 3
---

# ATM Renewal

  - **Trigger :** Automatically starts 30 days before ATM expiry.

  - **Cannot Proceed If :**
    - Employee has a pending retirement request.
    - Employee status is Escape or Inactive.
	
## Workflow Stages & Actions :

### 1. Finance Department Approval

  - Request created to get finance approval.

  - **Actions :**
    - **Approve -** Moves to Payment Requested.
    - **Hold -** Moves to Hold stage.
    - **Reject -** Moves to Reject stage.

### 2. Manpower Department Approval

  - Verifies employee's working status and eligibility.

  - **Actions :**
    - **Approve -** Moves to Payment Requested.
    - **Hold -** Moves to Hold stage.

### 3. Payment Requested

  - Payment processed and confirmed in Finance portal.


  - **Actions :**
    - **Paid -** Moves to Receive in Lodging.

### 4. Receive In Lodging

  - ATM card received at lodging; details imported to HRM.

  - **Actions :**
    - **Complete -** Moves to Put In Envelope.
    - **Reject -** Moves to Reject stage.
    - **Complete without envelope -** Moves to Complete stage directly.

### 5. PutInEnvelope

  - ATM card prepared for delivery to employee location.

  - **Actions :**
    - **Complete -** Moves to Complete stage.

### 6. Hold

  - On hold for clarification or missing info.

  - **Actions :**
    - **Move to Approval -** Returns to Finance Department Approval.

### 7. Complete

  - Request successfully closed and tracked.

  - _No further actions required._

### 8. Reject

  - Request rejected and closed.

  - _No further actions required._