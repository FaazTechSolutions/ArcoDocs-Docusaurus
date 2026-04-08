---
sidebar_position : 14
---
# SetUp
## LookUp

  - The LookUp setup is used to configure and manage lookup fields within the system.
  - the configured look up is used as dropdown list / dynamic enum creation,
  - for the lookup you can create lookup values(you group by the parent lookup) 

  example: 
    - country(lookup)
      - india(lookup value)
      - saudi(lookup value)
      - uae(lookup value)   

**Creating a Lookup**

Users can create a new Lookup by providing the following details:

  - Lookup Type
  - Description
  - Is Enum
  - Enum Type
  - Parent Lookup
  - Is Active

**Adding Lookup Values**

After creating a Lookup, users can add values on the Lookup Details page using:

  - Description
  - Is Active

These values can be used as parameters in the Lookup setup.

---

## Print SetUp
    - the print setup is used to configure the print screen template and content using the html text editor
    - the print setup can be created with the below details
        - Customer Type	
        - Print Type	(contract document,bank formate,article,delegate and type are so on..)
        - period(no of momthes)
        - Description
    - after saving the template the editor layout will be displayed you can design the template as per your need
    - only active setup can be printable in the contract action

### Workflow Stages and Actions :

#### Draft

  - Displays newly created templates that are not yet active.

  - **Actions :**
    - **Active -** Active the Template and Move to Active stage.

#### Active

  - Displays all currently active contract templates.

  - **Actions :**
    - **InActive -** InActive the Template and Move to InActive stage.

#### InActive

  - Displays deactivated contract templates. These templates may be deactivated due to reasons such as changes in rules, regulations, or contract structure.

  - **Actions :**
    - **Active -** Reactivates the template and moves it back to the Active stage.

---
    
## Transfer Fee Setup
  - The Transfer Fee Setup is used to define and manage the fees related to employee transfers.
  - this transfer fee will be included in contract while transfer action is taken

**Creating a Transfer Fee Setup**

  - Users can create a new setup using the following fields:
    - Nationality Relation
    - Nationality (If Nationality Relation is Specify)
    - Profession Relation
    - Profession (If Profession Relation is Specify)
    - Agent Fees
    - Government Fees
    - Arco Fees
    - Total Amount

**Managing Transfer Fee Setup**

Users can edit and update the Transfer Fee setup after it has been created. 

---

## Sales Person
  - The Sales Person setup is used to create sales perso and assign them to branches. Each sales person has a primary branch and can also be assigned to other branches with specific valid dates.

**Creating a Sales Person**

Users can create a sales person by entering the following details:

  - User
  - Name
  - Primary Branch

**Assigning Branches**

Users can assign additional branches with the following details:

  - Branch
  - Valid From
  - Valid To

---

## Availability Count Setup

---

## Voucher Sub Type Mapping
- The Voucher Sub Type is a master setup used to map credit notes in the finance module.

**Create Voucher Sub Type**

Users can create a Voucher Sub Type using the following fields:

  - ID
  - Description
  - Description Ar
  - Financial ItemId Drop

Users can also edit, update, or delete the Voucher Sub Type as needed.

---

## Transaction reason
  - The Transaction Reason setup is used to define reasons for customer and labour transactions, such as contract cancellations, labour exchanges, check-ins, and check-outs. It helps in tracking and managing actions related to customers, employees, and vendors.

**Create Transaction Reason**

Users can create a transaction reason by entering the following details:

  - Relation Type
  - Customer Transaction Type
  - Labour Transaction Type
  - Description

After creating a transaction reason, users can edit, update, or delete it as needed.

---

### Finance Integration
- Segment mapping
    - the segments can be created/edited/deleted
    - segment mapping is used to validate the contract actions creation example: credit note creation/debite note creation
    - the below are the required information to create segment
        - Transaction Type
        - Transaction Category
        - Tax SetUp
        - Segment Item ID
        - Segment Tax ID
        - Financial ItemIdDrop
        - Service ItemTypeId
- Segment Payment bank
    - the segment payment bank is used to map the segment with the payment bank
    - the below are the required information to create segment payment bank
        - MethodOfPayment
        - Bank Account Number (old)
        - CashBox
        - Bank Account