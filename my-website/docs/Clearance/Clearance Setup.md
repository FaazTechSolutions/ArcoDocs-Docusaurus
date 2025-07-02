---
sidebar_position : 3
---

# Clearance Setup

### Overview

The Clearance Setup module is used to define all necessary configurations related to employee and customer clearance processes. It includes the setup of clearance types, components, equations, and related assignments that influence financial and procedural calculations.

### Type

  - Define different categories of clearance processes.

**Examples:**

  - Vacation Clearance
  - End of Service (EOS) Clearance
  - Customer Clearance
  - Clearance Calculation
  - Other Customer-Specific Clearances

### Components

  - Configure individual components that are used in clearance calculations.

**Examples:**

  - EOS Settlement
  - Vacation Settlement
  - Employee Salary
  - Employee Loans
  - Food Allowance
  - Tickets
  - Others (e.g., Bonuses, Gratuities, etc.)

### Type Components

Assign specific Clearance Components to relevant Clearance Types.

**Purpose:**

  - Allow modular configuration of what components are involved in each type of clearance.

### Factor

Define dynamic working factors that influence the calculation of clearance components.

**Examples:**

  - Number of Days
  - Yearly Vacation Days
  - Total Years of Service
  - Meal Allowance Amount
  - Daily Rate
  - Vacation Balance

These factors are used in equations to personalize calculations per employee.

### Equation

  - Set up formulas for calculating values related to clearances.

**Examples:**

  - Vacation Settlement Equation
  - EOS Gratuity Equation
  - Food Cost Calculation
  - Loan Deductions
  - Due Salary Calculation

These equations can use Factors and Components as variables to produce accurate results.

### Service Type Components

Map Components to Service Items used in business processes.

**Structure:**

  - Component RecId
  - Service Item ID

**Examples:**

  - Other Allowance - Labours
  - Agent Commission OD
  - Loan - Labour (Business Sector)
  - Total Monthly Salary

**Purpose:**

  - Used in service billing or internal reporting.

### Expense Type Components

Define expenses associated with a Clearance Type and assign them to specific Expense Types.

**Examples:**

  - Agent Commission
  - Iqama Charges
  - Ministry of Labour Charges
  - Medical Insurance
  - Medical Test
  - Visa Charges

**Purpose:**

  - Track and allocate expenses related to employee/customer clearances.