---
sidebar_position : 4
---

# Tax Setup

## Purpose

  - This setup defines the tax percentage applicable to expenses, based on contract sector and duration. It ensures accurate tax calculation during contract generation or modification.

### Configuration Fields

To define a tax percentage for an expense, provide the following:

  - **Expense**

The specific expense item the tax is applied to.

  - **Add in Contract (Sector)**

Determines which sector(s) this tax applies to:

  - Business
  - Individual
  - Both

  - **Tax Percentage**

The applicable tax rate as a percentage (e.g., 5, 15)

  - **Valid From**

The date from which this tax rule becomes active.

  - Tax BreakUp Days

Defines separate tax rules based on contract duration:

  - **LessThan180** – Tax for contracts under 180 days
  - **MoreThan180** – Tax for contracts over 180 days

### Relationship with Other Modules

  - Expense Setup and Tax Setup work together to calculate tax on contract expenses.

  - Tax is determined based on:
    - The expense configuration
    - Sector
    - Contract duration
    - Effective date

------------------------------------------------

# Additional Information

## Per Day Contract Amount Calculation

### Purpose

This logic is used to calculate the total contract amount when a user creates a Per Day Package contract by selecting a package and a period.

### Calculation Flow

**1. Base Contract Amount**

  - Amount Value = Period × Per Day Cost

**2. Get Applicable Expenses**

Retrieve applicable expense items using the following filters:

  - Nationality
  - Profession
  - Gender
  - Sector = Individual

Include items that have:

  - Per Day Expense Amount (from Expense Setup)
  - Tax Percentage (from Tax Setup)

**3. Salary-Related Expenses**

These are dynamically calculated based on Salary (from Expense Salary Setup):

  - **Salary** = Retrieved from Expense Salary Setup by Nationality

  - **GOSI Expense** = (Salary × 2%) / 30

(Daily GOSI contribution)

  - **Vacation Salary** = Salary × (21 / 365)

(Pro-rated daily vacation allowance)

  - **End of Service (EOS) Salary** = Salary × (15 / 365)
(Pro-rated daily EOS benefit)

**4. Arco Fee Calculation**

  - Arco Fee Amount =

**Amount Value − Sum(Period × [Each Expense Amount])**

This value is derived by subtracting total expenses from the base contract value.

**5. Tax Calculation**

  - **Tax Amount =**

Sum of (Each Total Expense × Applicable Tax Percentage)

**6. Total Contract Amount**

  - Total Amount = Amount Value + Tax Amount