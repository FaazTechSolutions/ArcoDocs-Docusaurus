# Wallet

## Purpose

The Wallet holds a customer's balance, which can be used to pay for contracts or request refunds.

### How Wallet Balance Is Created

Wallet balance is generated from:

  - **Contract Requests :**
    - Termination
    - Cancellation

  - **Manual Return :**
    - Manually added by Finance

When a wallet entry is created, the system may also generate:

  - Payment Settlement or
  - Credit Note Settlement (based on the source)

###  Wallet Details

  - Wallet ID
  - Contract Info
  - Customer Info

### Amount Breakdown :

  - **Refundable Amount** – Can be refunded to the customer
  - **Non-Refundable Amount** – Can only be reused (not refunded)

### Wallet Lines (Source Transactions):

Each line includes:

  - Source Type:
    - Payment
    - Credit Note
  - Source ID
  - Amount

### Wallet Balance Calculation

Wallet Balance = Total Wallet Amount – Wallet Settlements.

### Wallet Balance Types

1. Refundable Balance

  - Can be refunded to the customer.

2. Non-Refundable Balance

  - Cannot be refunded
  - Can be used to:
    - Create a new contract
    - Extend an existing contract

> When a customer requests a refund, any non-refundable balance is converted into a One-Time Invoice and settled using wallet funds.

### Using Wallet for Contracts

Customers or users can apply wallet balance to:

  - **New Contracts**
  - **Contract Extensions**

> The system creates a **Credit Note (Wallet Type)**, which then creates:

  - An **Advance Invoice** or
  - A regular **Invoice Settlement**

> The **wallet settlement** is linked to the **Credit Note** reference.