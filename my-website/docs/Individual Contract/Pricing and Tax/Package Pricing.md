---
sidebar_position : 1
---

# Package Pricing

### Purpose:

To define service pricing and periods based on:

  - Nationality
  - Job Specification
  - Package Type

  Each package includes pricing models and optional settings like installments, probation, and extension costs.

## Types of Packages

### 1. Monthly - Low Cost Package

**Used For:**

Longer-term contracts with monthly installments.

**Required Setup:**

  - Nationality
  - Job Specification
  - Gender
  - Package Name
  - Period (in months)

**Amount Details:**

  - Advance Amount
  - Monthly Installment
  - Total Amount

**Extension Settings:**

  - Extension Period (in months)
  - Extension Amount Details

**Probation Settings:**

  - Probation Period
  - Cost Per Day During Probation

### 2. Per Day Package

**Used For:**

Short-term, day-based contracts.

**Initial Setup:**

  - Nationality
  - Job Specification
  - Gender
  - Package Name

**Per Day Cost Setup (after creation):**

  - From Day
  - To Day
  - Cost

**Additional Parameters:**

  - Minimum Per Day Cost (New Contracts)
  - Minimum Per Day Cost (Extensions)
  - Minimum Period for New/Extend
  - Maximum Period for New/Extend

**Installment Cost Setup (Optional):**

**Used to show installment options to the customer.**

  - Name
  - Period
  - Amount Details:
    - Advance Amount Type (Fixed amount or Percentage)
        - Amount or %

  - Advance Amount
  - Installment
  - Total Amount

**Fixed Package Setup (for Mobile App Display)**

  - Name
  - Period

These fixed packages will appear as selectable options in the mobile app.

### Workflow Stages and Actions :

### 1. Draft

  - Newly Created Package shows here.

  - **Actions :**
    - **Activate -** Activate the package and moved to **Active All** stage.
    - **Activate Show in Portal -** Activate the package in portal and Moved to **Active in Portal** stage.

### 2. Active All

  - This shows the All Currently Active package list.

  - **Actions :**
    - **De-Activate -** DeActivate the package and Moved to **Not Active** stage.
    - **Show in Portal -** Moved to **Active in Portal** stage.
    - **Activate Show in Portal -** Activate the package in portal and Moved to **Active in Portal** stage.
    - **Move to Draft -** Return to **Draft** stage.

### 3. Active in Portal

  - This shows the Currently Active packages in portal.

  - **Actions :**
    - **De-Activate -** DeActivate the package and Moved to **Not Active** stage.
    - **Hide from Portal -** 
    - **Move to Draft -** Return to **Draft** stage.

### 4. Not Active

  - This shows the DeActivated or Inactive packages list.

  - **Actions :**
    - **Activate -** Moved to the **Active All** stage.
    - **Activate Show in Portal -** Moved to **Active in Portal** stage.
    - **Move to Draft -** Return to **Draft** stage.