---
sidebar_position: 2
---

# Retirement Request

  - User/Customer will create Retirement request from Case management.

  - Employee will receive settlement, based on Employee Type (From EOS Setup).

  - The Following fields are mandatory to create retirement request,

    - Employee Id
    - Contract Number
      - Contact Person
      - Email
      - Mobile Number
      - Project Officer
      - Accountant
    - Expected Date of Leaving
    - Last Working Date
    - Need Exit (Default)
    - Settlement (Default)
    - Travel From (Default Lodging) - Mandatory for Individual Working employees
      
### **Retirement Process will be same as Vacation Process**

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

**Retirement Request Workflow Overview**

The retirement request is created in Case Management and managed in the HR system. The system is configured to synchronize request status (stages) between both modules through predefined event actions.

## Workflow Stages & Actions :

### 1. New (Case Management)

  - Retirement Request Created by user/customer in Case Management.

  - **User Action -**
    - **Submit -** Moves request to Arco Approval

-----------------------------------------------

### 2. Arco Approval

  - Request initiated from Case/Task Management is received in HRM for ARCO validation.

  - Validate employee’s residency status.

  - **Actions :**
    - **Complete -** Moves to **Customer Approval stage.**
    - **Reject -** Moves to **Rejected Request stage.**

-----------------------------------------------

### 3. Customer Approval

  - **Conditional Behavior :**
    - If created by Customer, this stage is automatically skipped.
    - Otherwise, user/customer takes action.

  - **Routing Based on Employee type :**
    - **Business Employees -** Starts Vacation Settlement Process first.
    - **Non Business Employees -** Starts Travel Request Process first.

  - **Actions -**
    - **Complete -** Moves to Under Processing.
    - **Reject -** Moves to Rejected Request.
-----------------------------------------------    

### 4. Under Processing

  - Initiate for Final settlement process for employee.

  - If the employee requested Travel Arrangements and Visa via ARCO, those processes begin from here.

  - If Travel/Visa were not requested, the request skips ahead to Waiting for Travel.

  - **Actions :**
    - **Complete -** Moves to **Settlement OnHold stage.**
    - **Reject -** Moves to **Rejected stage.**
------------------------------------------------

### 5. Settlement OnHold

  - To temporarily pause/hold the retirement settlement process for specific categories of employees until the appropriate processing window is reached.

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
------------------------------------------------

### 6. Settlement Payment

  - This stage manages the calculation and processing of vacation settlement payments for employees taking leave. 
  
  - It includes several sub-stages to handle internal clearance, client approvals, and financial processing before moving to the Visa Request stage (if applicable).

  - **Actions :**
    - **Complete -** Moves to Visa Issuance stage.
    - **Reject -** Moves to **Rejected Request Stage.**

-----------------------------------------------

### 7. Visa Issuance (Visa Request) 

  - The Visa Request is triggered when an   employee initiates a Travel Arrangement via the Leave Request or Retirement Request from ARCO. 
  
  - It is tightly integrated with the Finance Department for payment and Muqeem Portal for issuance.

  - **Actions :**
    - **Complete -** Moves to **Travel Request stage.**
    - **Reject -** Moves to **Rejected Request stage.**
------------------------------------------------

### 8. Travel Request

  - This is a sub-process within the Leave Request module for managing employee travel.

  - This Travel request is a Sub-process of Visa request.

  - **Actions :**
    - **Complete -** Moves to **CheckIn Lodging stage.**
    - **Reject -** Moves to **Rejected Request stage.**
-----------------------------------------------

### 8. CheckIn Lodging

  - Employees working in non-business roles who selected `“Lodging”` as "Travel From".

  - Once the employee checks in at lodging, system moves the request to **Waiting for Travel.**
------------------------------------------------

### 9. HR Clearance

**Clearace Details:**

  - EOS settlement is calculated based on the EOS Setup.

  - Currently Default EOS type is `"Termination."`

    - **Business Scetor Criteria :**
      - If Kingdom Days < 1825 (i.e. < 5 years): 50% of monthly salary per year.
      - If Kingdom Days ≥ 1825 (i.e. ≥ 5 years):
        - First 5 years: **50% of monthly salary per year.**
        - After 5 years: **100% of monthly salary per year.**

    - **Individual Sector Criteria :**
      - If Kingdom Days < 1460 (i.e. < 4 years): **No EOS settlement.**
      - If 1460 ≤ Kingdom Days < 1825: **25% of monthly salary per year.**
      - If Kingdom Days ≥ 1825:
        - First 5 years: **25% of monthly salary per year.**
        - After 5 years: **25% of monthly salary per year.**

  - This stage shows the Retirement requests which is send for HR Clearance.

  - **Actions :**
    - **Approve -** Moves to **Waiting for Travel stage.**
    - **Reject -** Moves to **Rejected Request stage.**
------------------------------------------------

### 10. Rejected Request

  - Displays the number of Rejected Requests which is created and reject the requests by an employee.
------------------------------------------------

### 11. Completed

  - Completed requests are displayed in this stage.  