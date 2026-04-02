---
sidebar_position : 8
---
## Per Day Contract Amount Calculation

- When creating contract user selects package and period, amount calculates below:
  - Amount Value = period * Per Day Cost
  - Get Expense List with per day amount and Tax percentage (from Tax Setup) by Nationality, profession, gender and individual sector
    - Salary Expense Amount from Expense Salary Setup by Nationality
    - Gosi Expense Calculate as (Salary %2) / 30
    - Vacation Salary = Salary * (21 / 365)
    - EOS Salary = Salary * (15 / 365)
  - Arco Fee Amount = Amount Value - Sum(Period * [ExpenseAmount])
  - TaxAmount = sum(TotalExpenseAmount % TaxPercentage)
  - Total Amount = Amount Value + TaxAmount
---
