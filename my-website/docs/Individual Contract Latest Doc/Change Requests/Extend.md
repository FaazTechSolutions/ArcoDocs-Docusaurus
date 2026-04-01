---
sidebar_position : 5
---

# Extend

## Contract Extension Process

### Purpose

To extend contract validity by adding new days against payment.

### Request Creation Logic

  - **When Contract is Not Expired:**

    - An **Advance Payment Transaction** is created based on the **requested package period**.

    - The extension request is then initiated.

  - **When Contract is Expired:**

    - **Total Amount Due =**
      - **Unpaid Invoices** (for expired days)
      - **Uninvoiced Expired Days**
      - Advance Payment for the **new extension period**.
    - All of the above components are summed and required for settlement.

### Workflow Stages and Actions :

### 1. Payment

  - **If Contract Has Available Balance:**

    - The balance is used to **settle the Advance Payment transaction**.

    - If the advance amount is **fully settled**, the system automatically moves to the next stage.

  - **If Balance Is Insufficient:**

    - The **Customer/User must pay** the remaining amount.

    - Once payment is made and the **advance amount is fully settled:**

      - **A New Contract Line** is created with the **requested extension period**.

      - Contract days are updated accordingly.

      - If the contract was **previously expired**, the **Expired Contract Line** is updated:

        - **Total days = Used Line Days**

  - **Actions :**
    - **Complete -** Moved to **Completed** stage.
    - **Cancel -** Moved to **Cancel** stage.

### 2. Completed

  - Final stage of the extension process.

  - The contract is successfully **extended**, and system reflects the new validity period.

  - _No further actions required._

### 3. Cancel

  - Extension request can be canceled before completion.

  - _No further actions required._