# Credit Control Approval

## Purpose

To prevent assigning or reserving employees to customers with overdue or expired contracts—unless approved.

### Restriction Criteria

Customers cannot assign or reserve an employee if:

  - Any of their contracts are **Expired**.
  - Any contract has **dues over 50**.

### Override via Credit Control Approval

When override is needed, user submits a **Credit Control Request** with :

  - Contract Info
  - User requesting assignment

### Approval Stages

**1. Management Approval**

  - Supervisor reviews the request.
  - Sends a verification code to CEO or management.

  - **Actions :**
    - **Complete -** Moved to Approved stage.
    - **Reject -** Moved to Rejected stage.

**2. Approved**

  - Requester enters verification code to Approve.

  - **Actions :**
    - **Reject -** Moved to Rejected stage.

**3. Completed**

  - Once verified, employee can be assigned to the contract.

**4. Rejected**

  - Request is denied, and assignment remains blocked.