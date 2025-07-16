# Payment Notification

## Purpose

To capture and process customer payments made via Sadad bills, ensuring accurate and automated updates in the system.

### Process Flow

**1. Customer Pays via Sadad Bill**

  - Sadad system creates a **Payment Notification**.

  - Notification includes **"Payment Receive Status"** = Pending.

**2. System Scheduler Runs (automatically)**

  - Picks up pending payment notifications.

  - Creates a **Payment Transaction** in the system using **Sadad reference data**.