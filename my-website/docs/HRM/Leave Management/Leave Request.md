---
sidebar_position: 1
---

# Leave Request

  **Leave Creation :** Initiated by User or Customer through Case Management.

  **Leave Entitlement :** Default is 21 days/year (based on `EmployeeType` from setup).

  The Following Fields are Mandatory for Leave Request Create;

  - EmployeeId
  - Contract Number
    - Contact Person
    - Email
    - Mobile Number
    - Project Officer
    - Accountant
  - Travel Date
  - Return Date
  - Last Working Date
  - Vacation Type
  - Travel From (Mandatory for individuals from "Lodging")

### Vacation Types

Vacation have some following types,

| **Vacation Type** | **Settlement** | **Visa** | **Travel** |
| ----------------- | --------------- | -------- | ---------- |
| Paid | Required | Required | Optional |
| Unpaid | X | Required | Optional |
| Local | Required | X | X |
| Encashment | Requried | X | X |

**Vacation Request have 3 Sub-process based on vacation Type**

  - **Settlement**
    - Settlement Paid By (Mandatory)

  - **Visa**
    - Visa Paid By (Mandatory)
    - Visa Days (Required if Iqama > 150 days)
    - Return Before Date (Required if Iqama < 150 days)

  - **Travel**
    - Source Country/City, Destination Country/City (All mandatory)

**Vacation Request Workflow Overview**

The vacation request is created in Case Management and managed in the HR system. The system is configured to synchronize request status (stages) between both modules through predefined event actions.

## Workflow Stages & Actions

### 1. New (Case Management)

  - Created by user/customer in Case Management.

  - **User Action -**
    - **Submit -** Moves request to Arco Approval
------------------------------------------------

### 2. Arco Approval (HR System)

  - Request initiated from Case/Task Management is received in HRM for ARCO validation.

  - Validate employee’s residency status.

  - **User Action -**
    - **Complete -** Move to Customer Approval (HRM + Case).
    - **Reject -** Move to Rejected Request.
    - **Escape -** Mark as Escaped and move to Completed.
-----------------------------------------------

### 3. Customer Approval (Case Management)

  - **Conditional Behavior :**
    - If created by Customer, this stage is automatically skipped.
    - Otherwise, user/customer takes action.

  - **Routing Based on Employee type :**
    - **Business Employees -** Starts Vacation Settlement Process.
    - **Non Business Employees -** Starts Travel Request Process.

  - **Actions -**
    - **Complete -** Move to Under Processing.
    - **Reject -** Move to Rejected Request.

### 4. Under Processing

  - Once Customer Approved for Leave request, the vacation process for an employee will begins.

  - **Actions -**
    - **Complete -** Moves to Settlement OnHold.
    - **Reject -** Moves to Rejected Request.
----------------------------------------------- 

## Sub-Process of Leave Request Starts here,

  1. Settlement
  2. Visa
  3. Travel

### 5. Settlement OnHold

  - To temporarily pause/hold the vacation settlement process for specific categories of employees until the appropriate processing window is reached.

  - **Applies To :**
    - Individual Employees
    - Internal Project Employees
    - Employees accommodated in Lodging

  - **Functionality :**
    - This stage is used to hold the leave request until it reaches the processing window, which is:
      - 10 days before the employee’s Last Working Date (LWD)

  - **System Behavior :**
    - The system will automatically monitor the Last Working Date.
    - When the LWD is less than or equal to 10 days, the request is automatically moved to the next stage:
      - Settlement Payment
-----------------------------------------------      
### 6. Settlement Payment

  - This stage manages the calculation and processing of vacation settlement payments for employees taking leave. It includes several sub-stages to handle internal clearance, client approvals, and financial processing before moving to the Visa Request stage (if applicable).

**Settlement Calculation Logic:**

  - Settlement is calculated from the later of:
    - The last vacation return date or arrival date.
    - Up to the employee's Last Working Date (LWD)

## Workflow Stages & Actions:

#### 1. Requested

  - Initial entry into the settlement workflow after reaching within 10 days of LWD.

  - **Actions:**
    - **Move to Clearance** - Move to **Clearance Process.**

#### 2. Clearance Process

  - Internal clearance validation via the clearance module.

  - **Actions:**
    - **Request -** Trigger a clearance request in the clearance system
    - **Complete -** Once clearance is approved, move to **Approval**.

#### 3. Approval

  - Determines whether client confirmation is needed or can proceed directly to payment.

  - **Actions:**
    - **Complete -** Move to **Client Confirmation**.
    - **Re-Calculate Clearance -** Return to **Clearance Process**
    - **Move without Payment -** Skip payment and move to Complete

#### 4. Client Confirmation

  - Client reviews and confirms the calculated settlement.

  - **Actions:**
    - **Confirm -** Move to Payment
    - **Move to Clearance -** Return to Clearance Process for re-calculation

#### 5. Payment

  - Payment is processed in the Finance Department. On completion, system updates the status.

  - **Actions:**
    - **Complete -** Move to **Complete**
    - **Re-Calculate -** Return to **Clearance Process**

#### 6. Client Rejection

  - Triggered if the client rejects the settlement during Client Confirmation.

  - **Actions:**
    - **ReSend-Customer Confirmation -** Move back to **Client Confirmation**
    - **Re-Calculate -** Return to **Clearance Process**

#### 7. Complete

  - Settlement process is finalized and recorded.

  - Leave Request will move to Visa Request.
------------------------------------------------

### 6. Visa Issuance (Visa Request) 

  The Visa Request is triggered when an employee initiates a Travel Arrangement via the Leave Request or Retirement Request from ARCO. It is tightly integrated with the Finance Department for payment and Muqeem Portal for issuance.

**Workflow Stages & Actions:**

#### 1. Requested

  - Indicates a new visa request has been received from Case and Task Management.

  - **Actions :**
    - **Requested -** Moves the request to **Approval stage.**

#### 2. Approval

  - Awaiting review and approval from the Finance Department.

  - **Actions :**
    - **Approved -** Confirms approval and moves the request to **Payment stage.**

#### 3. Payment

  - Payment request is generated and processed through the Finance Department Portal.

  - **System Logic :**
    - The system automatically tracks the payment status between Visa Request and Finance modules.
    - **Auto :** Once Finance confirms payment completion, the request automatically moves to **Under Processing stage.**

#### 4. Under Processing

  - Visa issuance begins in Muqeem Portal (either manually or via system integration).

  - System tracks visa status.

  - **Actions :**
    - **Complete -** Once Visa is successfully issued, move to **Completed stage.**
    - **Hold -** Place request on hold, move to **Hold.**    

#### 5. Hold

  - Visa processing is paused/hold due to queries or pending clarifications.

  - **Actions :**
    - **Release -** Resume processing and move the request back to **Under Processing stage.**

#### 6. Completed

  - Indicates the visa has been successfully issued and process is finalized.

#### 7. Reject Requested

  - Visa has been rejected or canceled after issuance.

  - Triggered when the user rejects the visa but it has already been issued.

  - Once canceled formally through Leave Reject Request process, moved to Completed stage.
----------------------------------------------  

### 7. Travel Request (For Business Employees)

- This is a sub-process within the Leave Request module for managing employee travel.

- This Travel request is a Sub-process of Visa request

### **Workflow Stages & Actions:**

#### 1. Requested

  - Initial stage when a travel request is raised.

  - Auto-created based on leave or visa process that includes travel.

  - **Actions:**
    - **Complete -** Move to Travel Arrangements.
    - **Hold -** Move to Hold Stage.
    - **Reject -** Terminate the process; may move to Rejected/Cancelled stage depending on setup.

#### 2. Travel Arrangements

  - Collect travel-related details for the employee.
    - Travel Date
    - Ticket Amount details

  - **Actions:**
    - **Complete -** Move to Approval.
    - **Hold -** Move to Hold Stage.

#### 3. Approval

  - Internal or managerial review of the travel plan and cost.

  - Typically done by a supervisor, travel coordinator, or department head.

  - **Actions:**
    - **Approve -** Move to Payment stage.

#### 4. Payment

  - Travel payment is initiated in the Finance portal.
  
  - Once payment is requested, it’s tracked in the finance module.

  - Auto-transition to Complete after Finance confirms payment.

#### 5. Complete

  -  Payment completed; travel request finalized.

#### 6. Hold

  -  Temporarily pauses/holds the travel process.
----------------------------------------------  

### 8. CheckIn Lodging

  - Employees working in non-business roles who selected `“Lodging”` as "Travel From".

  - Once the employee checks in at lodging, system moves the request to **Waiting for Travel.**
------------------------------------------------

### 9. Waiting for Travel

**System Schedule Check :**

  - Monitors Muqeem Status.

  - If Muqeem status becomes `"OnVacation"`, move to Completed.

**Contract Management :**

  - If “Travel From” is Customer, terminate external contract.

  - If working in Internal Sector, terminate internal contract.

**Employee Status Update :**

  - Updated to `"OnVacation"`.
----------------------------------------------- 

### 10. Rejected Request

  - This stage is used to show the rejected requests and needs to be closed.

  - **Actions -**
    - **Reject -** Closes the request and moves to **Completed stage.**
-----------------------------------------------

### 11. Completed

  - All pre-travel formalities are completed.

  - Automatically initiates Vacation Return monitoring process.