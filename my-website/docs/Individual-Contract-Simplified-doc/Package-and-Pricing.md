---
sidebar_position : 2
---
## Package

- A **Package** contains the detailed pricing information for a contract. It includes labour details, total cost, and the duration (number of days or months).

- package will be choosed automatically while creating contract based on the nationality,job specification, gender  and contract type.

- only one package will be active for the combination of nationality,job specification and gender  if the contract type is per day contract.


- the created package name will be in the following formate **Nationality/Job Specification/Period/Payment Type-Total Amount**

Example: 
- Bangladesh/Driver/3 months/One Payment-7500
- India/Private driver/Per Day Contract/Level

Packages are created based on:
- Nationality  
- Job specification  
- Gender  

---

## Package Types

### 1. Monthly Low Cost Package (Monthly Package)

This is a monthly-based package.

**Required Details:**
- Nationality  
- Job Specification  
- Gender  
- Package Name  
- Period (in months)  

**Amount Details:**
- Advance Amount  
- Monthly Installment  
- Total Amount  

**Additional Details:**
- Extension Period  
- Extension Amount Details  
- Probation Period  
- Probation Per Day Cost  


### 2. Per Day Package (Daily Package)

This package is based on a daily rate.

**Required Details:**
- Nationality  
- Job Specification  
- Gender  
- Package Name  

**Per Day Cost Setup (after package creation):**
- From Day  
- To Day  
- Cost  

**Additional Parameters:**
- Minimum Per Day Cost (New)  
- Minimum Per Day Cost (Extension)  
- Minimum Period (New / Extension)  
- Maximum Period (New / Extension)  

**Installment Option Setup (optional):**
- Name  
- Period  

**Amount Details:**
- Advance Amount Type:
  - Fixed Amount  
  - Percentage  
- Advance Amount  
- Installment Amount  
- Total Amount  


### 3. Fixed Package (Mobile App Only)

This is a predefined package available only in the mobile app.

**Details:**
- Name  
- Period (in months)