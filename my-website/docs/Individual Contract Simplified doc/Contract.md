---
sidebar_position : 5
---
## Contract

A **Contract** is a legal agreement used to supply labor to an individual customer based on their specific needs (for example: driver, cleaner, etc.).

### Contract Types

- **Per Day Contract**  
  A daily contract where the customer is charged based on the number of days required. It includes the selected package details.

- **Low Cost Contract**  
  A monthly contract where the customer is charged based on the selected duration. It includes the selected package details.

- **Installment Contract**  
  A long-term contract that allows payment in installments. It includes the selected package details.

---

## Contract Number Prefix

- Male Package: **IRM**  
- Female Package: **IR**

---

## Create Contract

Contracts can be created from the following sources:

### 1. Branch (Sales Person)
- Sales person creates the contract by selecting:
  - Customer Information  
  - Package  
  - Period (in days)  
  - Location  
- Initial status: **New**  
- After payment: status changes to **Document Verification**

### 2. Mobile App
- Contract is automatically created from an opportunity after payment  
- Initial status: **Document Verification**

### 3. Web Portal
- Currently not active  

---

## Contract Details

### 1. Customer Information

### 2. Contract Information
- Contract Date  
- Location  
- Branch  
- Contract Status  
- Total Contract Days  
  - Used Days  
  - Remaining Days  

### 3. Line Information (Active Contract Line)
- Package  
- Period  
- Amount Details  

### 4. Employee Assignment Information
- Employee ID  
- Valid From / To  
- Contract Line  
- Status:
  - Booked  
  - Unassigned  
  - Unassigned with Payment  
  - Delivered  
  - Returned  

### 5. Finance Information
- Advance Payment  
- Payments  
- Invoice  
- Credit Note  
- Debit Note  
- Refund  

### 6. Contract Delegation(SPOC for the Contract from the customer side)
- customer  can assign multiple contract delegation who will the point of contact person from customer side
- Name  
- ID Number  
- Mobile Number  
- Active Status  

### 7. Comments Section

---

## Contract Flow and Status

### Pending Status(still the contract is not active)
#### New
- When a contract is created from a branch, its status is set to **New**.  
- based on the selected package An advance payment  is required.  
- Once the customer completes the payment, the contract status changes to **Document Verification**.

#### Document Verification
- The contract must be signed by the customer using a digital signature.  
  - VIP customers may skip the signature.  
- After the signature is verified:
  - If an employee is already assigned, the status changes to **Waiting for Delivery**.  
  - If no employee is assigned, the status changes to **Waiting for Selection**.
### 2. Active Contract Status

#### Waiting for Selection
- Customer can select employee from the list of employees who are in Ready to Work status in lodging.  
- once selected the Employee status will be updated into → **Booked**  and Contract status will be updated into → **Waiting for Delivery**

#### Waiting for Delivery
- Employee can be unassigned before delivery  
- Used days start counting after employee assignment  
- customer/ user has to choose the delivery method after Delivery process is initiated
  - customer can directly pickup the labour from lodging
  - labour can be delivered to the customer location
- After delivery contract status will be updated into → **Valid**

#### Valid
- Employee is working at customer location 
- if employee return from contract,  contract will be moved to **Waiting for Exchange**
- if the contract is valid the user can take below actions
  - **Esacape**(if escaped from customer location) 
  - **return to Lodging**(if customer wish to return the employee to lodging) 
  - **extend**(if extend the contract)

#### Waiting for Exchange
- once the customer return the employee, contract will be moved to **Waiting for Exchange**
- once the contract status is **Waiting for Exchange** the customer/user can select new employee if selected then the contract status will be moved to **Waiting for Delivery**

#### Near to Expire
- if the contract Remaining days(total days-used days) < 15(not 15 days based on the system parameter if 7 days then less then 7 days if 10 days then less then 10 days etc)  the system will move the contract automatically to **Near to Expire**

#### Expired
- When Contract Remaining Days(Total days-Used Days) is less than 0 days, system automatically change the contract status to "Expired"

### 3. Inactive Contract Status

#### Ended
- No remaining days(=0) and customer request to end the contract  customer no need to pay anything the contract status will be ended

#### Ended with Penalty
- When Employee Return from Contract and Remaining days is less than 0 and customer request to end the contract, contract status changed to **Ended with penalty**, customer will be charged penalty based on the remaining days

#### Cancel
- if customer request to cancel the contract before employee delivery, contract status will be changed to **Cancelled**

#### Terminate
- When customer request to cancel the contract after employee delivery,  even the remaining days are greater than eqaul to 1 contract status will be changed to **Terminated** 
- the penalty will be calculated based on the remaining days also the penalty calculation will be different for different scenarios 

---

## Contract Actions

### Employee Assign
- action will Available if contract status is **Waiting for Selection** or **Waiting for Exchange**  
- customer/user can select employee from lodging (Ready to Work)  
- if employee selected the employee status will be updated into → **Booked** and Contract status will be updated into → **Waiting for Delivery**  

### Unassign

- Customers or users can unassign an employee before the delivery reaches the customer location.
- Once an employee is unassigned, the contract status will change to:
  - **Waiting for Selection** or **Waiting for Exchange**

#### Assignment Period Calculation

The assigned period (in days) will be calculated based on the following criteria:

- **Unassignment within 24 hours:**
  - The assigned days will **not** be counted.
  - Assignment status will be updated to **Unassigned**.

- **Unassignment after 24 hours:**
  - The assigned days **will** be counted.
  - Assignment status will be updated to **Unassigned with Payment**.
  - customer will be charged for the counted days.

### Cancel
- Action will be Available if contract status = **New | Document Verification | Waiting for Selection**  
- Customer can cancel the contract before employee delivery
- Cancellation Penalty fee: Penalty Fee is system parameter can be changed from admin panel **2.5%** of contract amount  


### Terminate
- Action will be Available if the contract status is **Waiting for Exchange** and contract remaining days is greater then 0 days
- System will terminate the contract after delivers the any employee with valid contract days
- if contract have active employee the system will automatically  create stage **employee return** with **terminate** action

#### Penalty Calculation

- The penalty is calculated based on **Terminate Penalty Days** (a system parameter, e.g., 10 days).

##### Rules:
- If the remaining contract days are **greater than** the terminate penalty days:
  - The penalty will be calculated based on the **terminate penalty days**.

- If the remaining contract days are **less than** the terminate penalty days:
  - The penalty will be calculated based on the **remaining days**.

### Extend
- Action will be Available if contract status is active  
- Customer/ User can create Extend request with following details
				- Transaction Reason
				- Comments
				- Package
				- Period
- Once request submitted, Extend request will get created

### Return Request

The **Return Request** action is available when the contract status is:
- Valid  
- Near to Expire  
- Expired (with an active employee)  

### Purpose of Return

The customer/user must select the purpose of return:
- Replace  
- Terminate  

#### Request Details

The return request includes the following fields:
- Transaction Reason  
- Notes  
- Purpose of Return  
- Return Method:
  - Lodging  
  - Pickup from Home  

- Termination Options (if the purpose is **Terminate**)  
- Return Lodging Information  

#### Process

- Once the request is submitted, the **Employee Return** process is initiated.

---

### End

An **End** request is automatically created from the **Employee Return** process with the default option set to "End".only the user can take action when the contract's remaining days are **less than or equal to 0**.

---

### Escape

An **Escape** process is initiated when an employee leaves the customer unexpectedly(Escaped).

### Request Creation

The user can create an escape request with the following details:
- Reason / Comments  
- Escape Point (with customer)  
- Customer Signed Attachment  

The request can be created from:
- ERP system  
- Mobile application  

- In the mobile application, the customer must provide a digital signature on the escape document.
- Once the customer signs, the escape request is created in the lodging module.  
- After the escape request is created:
  - The employee is removed from the contract based on the requested date  
  - The contract status changes to **Waiting for Exchange**  

- If the contract is already expired:
  - The system automatically creates an **End Request**  
  - The contract status changes to **Ended with Penalty**  

---

### Sponsor Transfer
- Available when employee is active and contract is valid  
- by default the sponser will be ARCO if the customer request for Sponsor transfer the request will be created