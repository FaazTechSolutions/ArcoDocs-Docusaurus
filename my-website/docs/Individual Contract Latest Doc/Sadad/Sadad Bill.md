# Sadad Bill

## Sadad Transaction Overview

### Purpose

Sadad is an integrated offline payment method used in the system to collect contract payments through Sadad bills.

### How It Works

1. When a contract has dues or advance payments, the system creates a Sadad Bill via integration.

2. The bill is generated in the Sadad system.

3. The customer pays offline using the Sadad Bill Number.

4. Once payment is received, the system automatically creates a Payment Transaction.

5. Integration is managed through the Sadad database.

### Sadad Integration Transactions

**1. Bill Creation**

Each Sadad Bill includes:

  - **Bill Number**
  - **Billing Account**
  - **Bill Type:**
    - **One-time Bill :** For specific one-off transactions
    - **Recurring Bill :** For ongoing contract dues

  - **Bill Amount**
  - **Expiry Date**
  - **Internal Bill Number** (for internal reference)

**One-Time Bill**

  - Used for specific transactions
  - Expires in **3 days**
  - Bill Number starts with **6**
  - **Billing Account = Bill Number**

**Recurring Bill**

  - Used for contract dues

  - Billing Account format:

"20" (IRM) or "30" (IR) + **Customer ID (6 digits) + Contract Number (6 digits)**

  - Any financial change in contract triggers a **new Sadad bill**

**Bill Statuses**

Sadad Bills move through the following statuses:

**1. IMS** – Initial system status

**2. A4Sadad** – Pushed to Sadad system

**3. Sadad** – Bill is live and ready for payment

### Customer Notification

  - Once the bill reaches **"Sadad"** status:

    - **Bill Number and Amount** are sent to the customer via **SMS**.

