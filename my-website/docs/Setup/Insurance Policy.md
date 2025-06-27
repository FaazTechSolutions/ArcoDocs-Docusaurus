---
sidebar position : 1
---

# Insurance Policy

  - Manage insurance policies linked to company information.

  - Insurance policy have lines with Insurance class.

  - Beneficiaries are associated with policy lines and tracked with historical date records.

  - To Create Insurance policy, the following fields are mandatory;

      - Company information
	  - Policy number
	  - StartDate
	  - EndDate

## Workflow Stages & Actions

### 1. Draft

  - User sets up policy and adds insurance lines:

    - Insurance Class (from master)

    - Cost

  - Actions :
    - **Send to Approval -** Moves to Approval stage.

### 2. Approval

  - Reviewer validates and decides on the request

  - Actions :
    - **Active -** Moves to Active stage.
    - **Cancel -** Approval cancelled and Moves to Cancelled stage. 

### 3. Active

  - Once policy activated, User can import Insurance Befincery by following;

    - On board insurance import.
    - Upload Renewal Beficicery (export from "prepare InActive" stage).
    - Update insuarnce Class(from business integration).

  - **Actions :**
    - **Prepare to Inactive -** Moves to prepare to Inactive stage.

### 4. Prepare to InActive

  - This stage is used when the insurance policy has expired or is no longer active.

  - User can export active beneficery from policy lines and upload to active policy.

  - User cannot complete this stage untill move all active beneficiery.

  - **Actions :**
    - **Inactive -** Moves to Inactive stage.

### 5. InActive
              
  - The policy is no longer valid.

  - For record-keeping of ended insurance policies.

### 6. Cancelled

  - The policy approval was cancelled before activation.

  - Appears as a cancelled record for audit or reference.
