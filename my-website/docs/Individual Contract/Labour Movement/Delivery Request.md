---
sidebar_position : 1
---

# Delivery Request

## Delivery Request Process

### Purpose

To deliver an employee to the customer using one of the available delivery methods, handling fees, logistics, and system updates accordingly.

### Request Creation

  - Initiated by selecting an Employee and a Delivery Method.

**Delivery Methods:**

  1. Pick from Lodge – No payment stage
  2. Pick from Branch – Payment stage required
  3. Delivery to Home – Payment stage required

### Workflow Logic

  - **If Delivery Method = "Pick from Branch" or "Delivery to Home":**

    - Start with Payment stage.

  - **If Delivery Method = "Pick from Lodge":**

    - Skip Payment, start with Request for Checkout.

### Workflow Stages

### 1. Payment

  - An Invoice is created based on Delivery Fee setup.

  - Customer/User makes payment.

  - **If Payment is completed** or **Delivery Fee = 0**, request moves to **Request for Checkout.**

### 2. Request for Checkout

  - **Lodging User** transitions the request to **Waiting for Checkout**.

### 3. Waiting for Checkout

  - A Check-Out Request is created for the employee in the Lodging Module.

**Special Logic for "Pick from Branch":**

  - Before checkout:

    - An **Internal Transfer** is created in lodging.

    - The employee is transferred to the **requested branch (branch lodging)**.
  - Once the **Check-Out Request** completes its **"Waiting for Checkout"** stage, the request proceeds to **CSE Confirmation**.

### 4. CSE Confirmation

Customer Service Executive (CSE) reviews and advances the request to the next stage.

### 5. Delivery to Home

  - Only triggered if **Delivery Method = "Delivery to Home"**.

  - Starts the **"Delivery to Home"** process to deliver the employee to the customer’s location.

  - Once delivery is completed, request moves to **Customer Confirmation**.

### 6. Customer Confirmation

  - User confirms delivery with the customer.
  - Once confirmed, request moves to **Delivered stage**.

### 7. Delivered

  - System updates:

    - Employee Assignment Status: Delivered

    - Employee Status: Working – With Customer

    - Contract Status: Valid

    - **Payroll Assignment:** Started for the employee under the contract.

### 8. Cancelled

  - Customer can cancel the delivery at any stage of the process.