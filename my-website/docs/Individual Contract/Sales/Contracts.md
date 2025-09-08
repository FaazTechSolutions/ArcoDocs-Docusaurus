# Contracts

## Contracts Overview

### Purpose:

To formalize an agreement with a customer for house worker services, based on selected package days.

### Contract Creation Sources

### 1. Branch (Manual by Salesperson)

**Steps:**

  - Salesperson creates a contract by selecting:
    - Customer Information
    - Package
    - Period (in Days)
    - Location

  - Initially Contract in `"New"` Status.

  - Once the customer completes payment, the contract moves to the `"Document Verification"` stage.

### 2. From Mobile App (via Opportunity)

  - Contract is auto-created once the customer pays for an Opportunity.

  - **Initial Status:** Document Verification
------------------------------------------------

## Contract Details Overview

A Contract contains multiple sections to manage customer agreements, service delivery, employee assignments, and financial records.

### 1. Customer Information

  - Basic details of the customer associated with the contract (name, contact, etc.)

### 2. Contract Information

  - Contract Date – The date the contract was created.
  - Location – Service location
  - Branch – Branch where the contract was initiated.
  - Contract Status – Current status (e.g., New, Document Verification, Active, Completed)
  - Total Contract Days – Total duration of the contract.

    - Used Days – Days already utilized
    - Remaining Days – Days left in the contract
    
### 3. Line Information (Active Contract Line)

  - **Package –** Selected service package
  - **Period –** Duration (e.g., 30 days, 90 days)
  - **Amount Details –** Financial breakdown (advance, installments, total amount)

### 4. Employee Assignment Information

Tracks which employee is assigned to the contract and their assignment status.

  - Employee ID

  - Valid From / Valid To – Assignment period

  - Contract Line – Refers to the specific package line this assignment applies to

  - Status:
    - **Booked –** Employee is reserved
    - **UnAssigned –** Not assigned yet
    - **Unassigned with Payment –** Employee removed, with financial implications
    - **Delivered –** Employee delivered to customer
    - **Returned –** Employee returned from assignment

### 5. Finance Information

Tracks all financial activities related to the contract.

  - Advance Payment
  - Payment (Total or installment payments)
  - Invoice
  - Credit Note
  - Debit Note
  - Refund

### 6. Contract Delegation

Optional authorized contact person for the contract.

  - Name
  - ID Number
  - Mobile Number
  - IsActive – Indicates whether this delegate is currently active.

### 7. Comments Section

  - Free-text field for internal or customer-facing notes related to the contract.

------------------------------------------------

## Contract Flow and Status

### 1. New

  - Contract is created from the branch.

  - Advance Payment record is generated based on selected package.

  - After Customer pays, status changed to `"Document Verification".`

### 2. Document Verification

  - Customer must sign the contract digitally.

    - VIP customers can skip the signature.

  - **After signature verification:**

    - If Employee is assigned - Status changed to `"Waiting for Delivery".`
    - If No Employee assigned - Status changed to `"Waiting for Selection".`
    - If Customer has overdues on previous contract - Status changed to `"Waiting for Dues"`.

### 3. Waiting for Dues

  - After Customer signed the contract, if customer has overdues in the previous contract, it will be listed here to waiting to complete the previous dues.

  - After Customer reserved the professional, the professional will be onhold for customer for the 30 minutes, only if he has overdue.

  - When the customer has settled the overdues, the professional has been released (only if he settled the overdues within 30 minutes).

  - If the customer doesn't settle the overdue within 30 minutes, the reserved professional has been automatically released back into availability.

  - Once the Customer has paid the over dues, the contracts were moved automatically to the next process.

  - Or else, employee can move the contract manually by clicking `"Resume Contract"` button.

### 4. Waiting for Selection

  - Customer/user can select an employee (with `"Ready to Work"` status).

  - **Once selected:**

    - Employee status changed to Booked.
    - Contract status changed to Waiting for Delivery.

### 5. Waiting for Delivery

  - User can unassign the employee before delivery if needed.

  - Used days on the contract start counting from the actual assignment date.

  - Customer/User chooses a delivery method and initiates the Delivery Request.

  - Once delivery is successfully completed - Contract status changes to `"Valid"`.

### 6. Valid

  - The employee is actively working at the customer’s location.

  - Contract is in progress and counted as active.

  - When the employee returns due to any of the following reasons:

    - Escape
    - Return to Lodging
    - Vacation

  - Contract status changes to `"Waiting for Exchange"`.

### 7. Waiting for Exchange

  - The contract is still active, but the assigned employee has returned (e.g., escape, lodging, vacation).

  - Contract status is updated to `"Waiting for Delivery"`.

  - Customer/User can select a new employee during this stage.

  - Once a new employee is selected - Status changes to `"Waiting for Delivery"`.

### 8. Near to Expire

  - When the remaining contract days (Total Days - Used Days) are less than 15,
the system automatically updates the contract status to `"Near to Expire"`.

### 9. Expired

  - When the remaining contract days (Total Days - Used Days) are less than 0,
the system automatically updates the contract status to `"Expired"`.

### 10. Ended

  - The employee has returned from the assignment.

  - The contract has no remaining days (Remaining Days = 0).

  - Once the customer requests to end, the status updates to `"Ended"`.

### 11. Ended with Penalty

  - The employee has returned from the assignment.

  - The contract has negative remaining days (Remaining Days < 0).

  - If the customer requests to end, the status changes to `"Ended with Penalty"`.

### 12. Cancelled

  - Customers can cancel the suspended contracts, only if specific conditions are met,

    - No Expired contract and extension.
    - Overdue installment total is less than the new contract value.

  - Customer requests to cancel the contract before any employee is delivered.

  - Once Customer applied the cancellation, the system checks the rules,
    - **If no overdues** - Proceed for the refund process.

    - **If system found overdues** - First deduct the amount for the overdues and applies for the standard cancellation policy and refunds any remaining balance.

  - Contract status changes to `"Cancelled"`.

### 13. Terminated

  - Customer requests to cancel the contract after at least one employee has been delivered.

  - Contract status changes to `"Terminated"`.