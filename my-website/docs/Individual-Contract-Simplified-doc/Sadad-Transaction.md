---
sidebar_position : 13
---
## Sadad Transaction

- Sadad is Payment method which is integrated by system
- System will request Payment by Sadad Bill
- When Contract have due or advance payment, system create Sadad bill by integration
- Sadad Bill will create in Sadad system and customer make payment offline by bill number
- Once Sadad receive the payment, Payment transaction creates by System Transaction
- Sadad have integration with system by Sadad database

### Sadad Integration have following transaction

#### Bill
- When Sadad bill create from system, Bill Transaction will create in Sadad side
- Fields:
  - BillNumber
  - Billing Account
  - Bill Type
    - OneTime Bill
    - Recurring Bill
  - Bill Amount
  - Expiry Date
  - Internal BillNumber-for internal use

- OneTime Bill:
  - Sadad bill create for specified transaction with amount
  - One time bill expired within 3 days
  - In current system, bill number start with 6
  - Billing Account will be same Bill Number

- Recurring:
  - Sadad bill create for contract due payment
  - Specified Billing Account used for the contract:
    - Billing Account will be "20"(IRM)/"30"(IR)+CustomerId(6)+ContractNumber(6)
  - Any update on contract finance transaction will create new Sadad bill

- Initially Bills create with status "IMS"
- Sadad Bill have following status:
  - IMS
  - A4Sadad
  - Sadad
- Sadad system change the Bill status to A4Sadad then Sadad Status
- Once Bill status updated to "Sadad":
  - Sadad bill number active for customer
  - From System, send the Bill number with amount information by SMS

#### Payment Notification
- Once Customer paid by Sadad bill, Payment Notification data will create with "PaymentReceiveStatus" as pending by Sadad system
- By system schedule, get pending Payment Notification, create payment from Sadad reference

#### Refund
- Not used
- In Refund request, when user select Refund Type Sadad and Payment source is Sadad, Refund Transaction will create
- Sadad make refund to customer by refund transaction and update the status as "Refund"

---
