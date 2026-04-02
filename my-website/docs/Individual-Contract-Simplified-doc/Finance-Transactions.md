---
sidebar_position : 11
---
## Finance Transactions

### Advance Payment
- Advance Payment is record which hold the pending payment by request
- All Contract Lines have Advance Payment with amount details and payment status
- Advance Payment creates with amount based on package and Period
- Advance Payment will create on following request:
  - Contract Creation
  - Extend Contract
- Advance Payment create with following fields:
  - Advance Number
  - Source Info
  - Contract Line Number
  - Advance Value
  - Tax
  - Amount
  - Status
- Advance status:
  - Pending
  - PayLater
  - Paid
- Once customer paid and have available advance invoice balance status changed to Paid,
  - Based on advance payment source, request will complete

### Payment
- Record for customer payment
- Payment have following Type:
  - Card
    - Payment from Online portal
  - POS
    - By Branch
  - Bank Transfer
    - Manual by Finance
  - Sadad Bill
    - Sadad Portal
- Customer will pay for following transaction:
  - Due Invoice
  - Advance Payment
- Once Customer Paid, System Create Payment with following fields:
  - PaymentNumber-System Generate
  - Customer Info
  - Contract info
  - Date
  - Amount
  - Payment Reference -(Card/reference details)
  - Attachment-For POS
- Once Payment Created, it will settle following (Payment Settlement):
  - If contract have due invoice, amount settled with invoice
  - If contract have due advance payment, it will create "Advance Invoice"

### CreditNote
- Credit Transaction to Contract from Finance User or Wallet
- Finance User will create Credit to adjust Debit transaction:
  - User create credit note approval process with credit information
  - Once Credit Approval Process approved, Credit note will create with requested info
- Credit Note Type:
  - Manual Credit Note
  - Return Receipt (reverse advance tax)
  - Wallet (wallet to contract)
- Credit note create with following fields:
  - CreditNumber-System Generate
  - Amount
  - Date
  - Type
  - Transaction Mode
    - Correction-(tax required)
    - Reconcilement
  - Other Reference
    - Related Invoice
    - Voucher type -finance reference
    - Tax Information
- Once Credit Note Created, it will settle following (Credit note Settlement):
  - If contract have due invoice, amount settled with invoice
  - If contract have due advance payment, it will create "Advance Invoice"

### Invoice
- Invoice Type:
  - Advance
  - Monthly Charge
    - Monthly Invoice
    - Consumption
  - One time invoice
- Invoice will create with following details:
  - InvoiceNumber
  - Invoice Type
  - Contract info
  - Total Before Discount
  - Total after Discount
  - Tax Amount
  - Total Invoice amount
  - Invoice Period
  - Date

#### Advance Invoice
- When contract credit Transaction and contract does not have any due invoice, Advance Invoice will be created
- It will generate Tax from Advance Payment Tax Details
- Advance Invoice have 2 balance:
  - Advance Request Balance = Amount - Advance Payment Settlement
  - Invoice Balance = (Amount - Advance Invoice Settlement)
- When Contract have pending advance payment and Contract advance request balance is more than equal to advance payment:
  - Create Advance Payment Settlement with Advance Payment and Advance Invoice
  - Advance Payment status changed to Paid
- When Contract close (cancel/Terminate), Contract Advance Request Balance will create as "Return Receipt Voucher" (Credit note):
  - Create Advance Invoice Settlement with credit note info

#### Monthly Usage
- Every month end of day, system generate monthly charge for the contract period used days
- Monthly charges will create with expense lines by Employee
- Monthly charges Lines create with following details:
  - Invoice Number
  - Period
  - Days
  - EmployeeId
  - Expense Item
  - Line Value
  - Discount
  - Tax Percentage
  - Line Value After Discount
  - TaxAmount
  - Line Amount
- Monthly charge Lines will calculate same as Per day amount calculation
- Sum of Line amount will be monthly charge amount AND Monthly charge will be created
- Once Monthly charge created, it split into 2 types based on advance balance:
  - Monthly Consumption
  - Monthly charge
- If contract line have "Advance Invoice Balance":
  - Monthly Consumption will create for "Advance Invoice Balance" amount
  - Advance Invoice Settlement will create with Consumption
- Remaining amount will create as Monthly Invoice:
  - Monthly invoice with payment status "Not Paid"
  - When payment create, payment directly settlement with invoice by Invoice Settlement

#### One Time Invoice
- One time Invoice create for penalty and other Fees
- It will create by customer requests and delivery process

### Debit Note
- Debit Transaction which is create by finance user:
  - User create debit note approval process with debit information
  - Once debit Approval Process approved, note will create with requested info
- Debit Note have following:
  - Invoice Number
  - Period
  - Value
  - Amount
  - Debit Note Expense Item
  - VoucherSubType-For Finance reference
  - TaxAmount
- When payment create, payment directly settlement with invoice by Invoice Settlement

### Refund
- Refund request will create by finance user by customer request
- Refund request create by following source:
  - Contract Request
    - Terminate
    - Cancel
  - From Customer Balance
    - Refund on customer balance
- Refund request have following fields:
  - Customer info
  - Contract info -optional
  - Refund Amount
  - Refund Source Transaction
- Stages:
  - Accountant Confirmation
  - Finance Manager Approval
  - Refund
    - User will select Refund Method by following:
      - Bank Transfer
      - Cash
    - User complete the request:
      - Refund Transaction and settled with source transaction like Wallet, Payment settlement
  - Completed

### Wallet
- Wallet is customer level balance
- Sum of the wallet transaction balance will be wallet balance
- Wallet create following source:
  - Customer request
    - Terminate
    - Cancel
  - Manual Return
- When create wallet, Payment or credit note settlement will create based on source transaction
- Wallet have following details:
  - Wallet Id
  - Contract info
  - Customer info
  - Amount Details:
    - Refundable amount
    - Non-Refundable amount
  - Wallet Lines (Wallet Source Transaction):
    - Source Type:
      - Payment
      - Credit note
    - SourceId
    - Amount
- Wallet balance = wallet amount - wallet settlement
- Wallet have following type of balance:
  - Refundable Balance
    - User can refund only refundable balance
  - Non-Refundable Balance
    - User cannot refund, but can use to create contract or extend
- When customer request refund:
  - Non-Refundable amount will created as one time invoice and settle with wallet
- Customer / Users can use wallet balance to extend or create contract:
  - Create Credit Note as Type Wallet for the requested contract and create advance invoice or invoice settlement
  - Wallet settlement will create by Credit note reference

---
