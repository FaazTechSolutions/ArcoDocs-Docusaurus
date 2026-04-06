---
sidebar_position : 7
---
# Expense and Tax

### Expense List
- Expense List is used to create a list of expenses which is used in contract example: Visa charge,Ministry of Labor Charge,Iqama Charge,Medical Test and so on..
- this created expenses will be used in contract creation
- Master setup Expense List with following details:
  - Transaction Type
    - Hour
    - Fee
    - Item
    - OnAccount
  - Transaction Category(Required if Transaction Type = fee)
  - Default Paid By
  - Default Payment Type
    - Fixed
    - ToCalculate
    - ToBeCalculated by salary
    - OnOccurrence
  - Default Period Type
    - Yearly
    - Monthly
    - Daily
  - Default Period
  - Default amount
  - Add in Contract-map sector
  - VAT Period Type-not used
  - Description

### Expense Setup
- Amount Mapping for Expense with following Criteria:
  - Expense
  - Nationality(particular / ALL)
  - Profession(particular / ALL)
  - Gender(particular / ALL)
  - Amount
  - ActivationDate

### Tax SetUp
- Expense Tax percentage Setup:
  - Expense
  - Add in Contract (sector)
  - Tax Percentage
  - Valid From
  - Tax BreakUp Days-tax setup for contract days
    - LessThan 180
    - MoreThan 180

- Expense Setup and Tax setup used to calculate Tax for the contract

---