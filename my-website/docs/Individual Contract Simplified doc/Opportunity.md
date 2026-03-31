---
sidebar_position : 4
---
## Opportunity (Mobile App Only)

An **Opportunity** is a type of Request(Quotation) created by customer before confirming a contract. It captures the customer’s requirements, such as nationality, job role, gender, package details, and contract duration.

### Creation

- Opportunities are created by customers through the mobile application.  
- The customer selects an active package and defines the required period (in days).  
- Based on the selected period, the system automatically calculates the total amount, including taxes.  

---

### Opportunity Details

Each opportunity includes the following information:

- Customer Information  
- Package Details  
- Period (in days)  
- Location  
- Employee Reservation (optional – can also be done after contract creation)  
- Status  

---

### Status Types

- **New** – Opportunity is created but not yet completed  
- **Completed** – Payment is successful and the process is finalized  
- **Cancelled** – Opportunity is cancelled or expired  

---

### Employee Selection

- During opportunity creation, the customer can select employees who are in the **Ready to Work** stage.  

---

### Process Flow

- Once the payment is completed:
  - The opportunity status changes to **Completed**  
  - The system automatically creates a contract using the opportunity details  
  - Reserved employees (if any) are assigned to the contract  

- If the opportunity is not paid within **20 minutes** of creation:
  - The system will automatically cancel it  