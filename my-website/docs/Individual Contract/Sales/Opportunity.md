# Opportunity

## Purpose:

To handle contract requests from customers selecting packages before creating a formal contract.

## Process Overview:

**1. Creation:**

  - Customer creates an Opportunity via the Mobile App.

  - They select an active package and desired period.

  - The system calculates the amount based on selection.

**2. Employee Selection:**

  - Customer can choose an employee linked to the Opportunity.

**3. Payment & Status:**

  - Once payment is completed, Opportunity status changes to Completed.

  - The system automatically:
    - Creates a Contract using Opportunity details.
    - Assigns the selected employee to the contract.

**4. Auto-Cancellation:**

  - If payment is not completed within 20 minutes of Opportunity creation, the system cancels the Opportunity automatically.