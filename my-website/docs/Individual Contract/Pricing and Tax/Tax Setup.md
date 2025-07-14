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