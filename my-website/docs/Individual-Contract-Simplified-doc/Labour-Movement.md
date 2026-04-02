---
sidebar_position : 6
---
# Labour Movement

---

###  Delivery Request Flow
**Contract Status → Waiting for Delivery(Sub Flow ↓)**

**[Payment](#payment) --> [Request Checkout](#request-for-checkout) --> [CSE Confirmation](#cse-confirmation) --> [Delivery to Home](#delivery-to-home) --> [Customer Confirmation](#customer-confirmation) --> [Delivered](#delivered) --> [Cancelled](#cancelled)**

---

## Delivery Request

Delivery Request will be initiated by selecting an employee with a delivery method once the contract status is moved to waiting for delivery then the labour movement stage starts and its sub workflow will be started.

### Delivery Method
- Pick From Lodge  
- Pick From Branch  
- Delivery to Home  

If the delivery method is **"Pick From Branch"** or **"Delivery to Home"**, the **Payment** stage will start; otherwise, the **Request for Checkout** stage will start.



## Stages

### Payment
- Invoice will be created for the delivery fee from setup, and the customer makes payment.  
- If the customer pays, the request moves to **"Request for Checkout"**.  
- If the delivery fee is 0, system will automatically move the request to **"Request for Checkout"**.  

### Request for Checkout
- Lodging user moves the request to **Waiting for Checkout**.  

### Waiting for Checkout
- Checkout request will be created for employee lodging in the lodging module.  

If the delivery method is **"Pick From Branch"**:
- In lodging, an internal transfer will be created before checkout.  
- By the transfer, the employee is moved to the requested branch (branch lodging).  

Once the **Checkout Request** in **"Waiting for Checkout"** stage is completed, the request moves to the next stage.

### CSE Confirmation
Customer Service Executive (CSE) reviews and advances the request to the next stage.

Actions :

Complete - Moved to Delivery to Home stage. 

### Delivery to Home
- If the delivery method is **"Delivery to Home"**, this stage will start; otherwise, it moves to **Customer Confirmation**.  
- The "Delivery to Home" process will start to prepare delivery of the employee to the customer location.  
- Once completed, the stage moves to **Customer Confirmation**.  

### Customer Confirmation
- User confirms with the customer for delivery, then moves to **Delivered** stage.  

### Delivered
- Employee assignment status is changed to **"Delivered"**.  
- Employee status changes to **"Working - With Customer"**.  
- Contract status changes to **"Valid"**.  
- Payroll assignment for the employee will start with the contract.  

### Cancelled
- Customer can cancel delivery from any stage.  

### Delivery Infromation in details page

#### 1. Delivery Details
- Delivery Mode Id	
- Labour Delivery By
- Delivery Status
- Scheduled Date Time
- Actual Date Time
- Notes

#### 2. Contract Identification
- Contract Number
- Customer
- Country Region
- City
- Service Type

#### 3. Contract Details
- Contract Type
- Contract Group
- Contract Period	
- Contract Status

#### 4. Contract Status
- Total Man Power
- Contract Value
- Advance Payment
- Remarks	
- Revision Number	
- Article

#### 5. Contract Signed Details
- Signed by Employee
- Contract Signed By
- Signed Person Nationality	
- Signed Person ID-Number
- Signed Person Position
- Article
- Promissory Amount

#### 6. Workflow Details
  in workflow details you can view the workflow history with the following information 
  - process Id
  - stage
  - start date
  - end date
  - status
  - comments

#### 7. Delivery Request Attachment 
user can attach document that are related to the delivery request

---
---

###  Sponser Transfer Flow
**Contract Status → End With Transfer(Sub Flow ↓)**

**[Document Confirmation](#document-confirmation) --> [In Progress in Mussanad](#in-progress-in-mussanad) --> [Payment](#payment-sponser-transfer) --> [Approval for MOL](#approval-for-mol) --> [Waiting for Transfer](#waiting-for-transfer) --> [End of Service](#end-of-service) --> [Completed](#completed)**

---
## Sponsor Transfer

Sponsor transfer request is used to transfer the employee sponsor from Arco to the customer.  

Currently, this process is done through the **Mussanad** portal.

When the user creates a transfer with the following:

### Details Required
- Employee information  
- Attachments (option to export the template and attach with signature)  
- Payment details  

### Fee Amount Calculation
- Due invoices (any unpaid amounts under the current contract)
- Sponsor Transfer Fee - Retrieved from Transfer Fee Setup.

---

## Stages

### Document Confirmation
- User confirms the documents and moves to **In Progress in Mussanad**.  

### In Progress in Mussanad
- User requests transfer in Mussanad and moves to the payment stage.  

### Payment sponser transfer
- Customer makes payment in the Mussanad portal, and the amount is transferred to Arco account.  
- Finance user creates payment in the system based on the transferred amount.  
- User moves the request to the next stage.  

### Approval for MOL(Ministry of Labor)

### Waiting for Transfer
- Awaiting final confirmation of sponsorship transfer completion.

**Actions :**

- Complete - Moved to End of Service stage.
- Reject - Request Reject and Moved to Completed stage.

### End of Service
- Employee is removed from contract assignment with updated end date.  
- Contract status changes to **Ended with Transfer**.  
- Employee status changes to **"Iqama Transferred - Inside Kingdom"**.  
- Employee retirement request is created with EOS category **"Transferred"**.  

### Completed
- Final stage. Sponsor transfer is complete and reflected in all systems.

---
---

###  Delivery To Home Flow
**Contract Status → Waiting for delivery(Sub Flow ↓)**

**[Waiting for Payment](#waiting-for-payment) --> [Waiting For Schedule](#waiting-for-schedule) --> [Waiting for Travel](#waiting-for-travel) --> [Travel Started](#travel-started) --> [Completed](#completed)**

---

## Delivery To Home

When contract delivery request - delivery type **Delivery to Home**

### Stages

#### Waiting for Payment
- When delivery starts, "Delivery To Home" process will start.  
- Customer pays the delivery fee. Once the customer pays, it is moved to **"Waiting for Schedule"**.  
- If the delivery fee is already paid or 0, the stage is moved to **"Waiting for Schedule"**.  

#### Waiting For Schedule
- User moves to the next stage.  

#### Waiting for Travel
- User can make action only after checkout from Delivery Request.  
- User moves to the next stage.  

#### Travel Started
- User moves to **Completed** stage.  
- Delivery process moves to **"Customer Confirmation"** stage.  

#### Completed
- The delivery process completes.
- The system transitions the contract to the Customer Confirmation stage.
- No further actions required.
---
---

###  Return To Home Flow
**Customer Request Status → Return request(Sub Flow ↓)**

**[Waiting for Payment](#waiting-for-paymentr) --> [Waiting For Schedule](#waiting-for-scheduler) --> [Waiting for Travel](#waiting-for-travelr) --> [Travel Started](#travel-startedr) --> [Completed](#completedr)**

---

## Return To Home

When employee return request with return option **Pick Up from Home**, the process will start with employee return request.

### Stages

#### Waiting for Paymentr
- Customer pays the delivery fee. Once the customer pays, it is moved to **"Waiting for Schedule"**.  
- If the delivery fee is already paid or 0, the stage is moved to **"Waiting for Schedule"**.  
- Return request moves to **"Pick From Home"** stage.  

#### Waiting For Scheduler
- User moves to the next stage.  

#### Waiting for Travelr
- User moves to the next stage.  

#### Travel Startedr
- User moves to **Completed** stage.  
- Return process moves to **"Request for Check In"** stage.  

#### Completedr
- Pickup is finished.
- Marks the end of the Return To Home delivery workflow.

---

## Setup

### City Service Setup
- Setup for city service for delivery and return.  
- Based on the setup, system shows delivery branch and lodging services.  

Setup city with the following:
- Branch  
- Lodge (optional - changed by branch lodging)  
- Can Home Delivery Service  
- Can Pick From Home Service  

---

### Home Transport Cost
- Setup the cost for delivery service by city.  

### Branch Transport Cost
- Setup the cost for branch transport by branch and lodging.  

### Lodge Transport Cost
- Setup the cost for lodge transfer (not in use).  
- Lodging transfer for delivery is not active.