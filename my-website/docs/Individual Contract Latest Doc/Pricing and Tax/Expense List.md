---
sidebar_position : 2
---

# Expense List

## Purpose

  - The Expense List defines standardized expenses used in contracts and calculations. This serves as the master configuration for how each expense behaves in terms of payment method, period, and inclusion in contracts.

### Expense Configuration Fields

To define an expense item, provide the following:

  - **Description**

A brief explanation or label for the expense.

  - **Expense Type**

The classification of the expense. Options:

  - Hour
  - Fee
  - Item
  - OnAccount

  - **Default Payment Type**

Defines how the payment is calculated or triggered:

  - Fixed
  - ToCalculate
  - ToBeCalculate by salary
  - OnOccurance

  - **Default Period Type**

The unit of time the expense applies to:

  - Yearly
  - Monthly
  - Daily

  - **Default Period**

The number of periods the expense covers (e.g. 1 month, 12 months)

  - **Default Amount**

The standard value of the expense

  - **Add in Contract**

Indicates which contract sectors this expense applies to
(e.g. Business, Individual, Both — assumed from prior context)

  - **VAT Period Type**

(Not used) – retained for legacy structure or future use

  - **Description**
  
Additional details or internal notes (may duplicate the main description)