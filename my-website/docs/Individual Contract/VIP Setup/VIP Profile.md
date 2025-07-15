# VIP Profile

## Purpose

The VIP Setup module is used to grant exclusive benefits to VIP clients by assigning them to a VIP Profile. Each profile contains specific conditions and privileges tied to customer or contract behaviors.

### Configuration Fields

**General**

Defines the basic identity and applicability of the profile.

  - **Profile Type:** Lookup field category to classify the profile
    - Bronze
    - Silver
    - Gold
    - Platinum

  - Profile Name
  - Setup Level
    - **Customer:** Applies benefits at the customer level
    - **Contract:** Applies benefits per contract
  - Contract Creation Type (From Customer level)
    - New
    - Extend
    - Both
  - No. of Contracts: Maximum contracts allowed under this VIP profile
(Set 0 for unlimited)

**Discount**

Configure special discounts for VIP members:

  - **Discount Count:** Number of times discount can be used
(0 = unlimited)
  - **Discount Type**
    - Percentage
    - Flat Amount
    - Days
    - Days Percentage
  - **Discount Value:** Numeric value based on type.
  - **Discount Max Limit:** Maximum allowed discount amount.

**Pay Later**

Allow VIP clients to delay payments under controlled limits:

  - **Pay Later Count:** Number of times PL can be used.

  - **PL Max Limit:** Total amount allowed for all PL transactions

  - **PL No. of Contracts:** Number of contracts allowed under PL

  - **PL per Contract Limit:** Max PL amount per contract

  - **Can PL Refill:**
    - **Yes:** Limit is reset when previous PL amount is paid.
    - **No:** Limit does not reset

**Penalty**

Waive or reduce penalties for specific contract events:

  - Skip Penalty Count
  - Skip Exchange Fee
  - Skip Terminate Fee
  - Skip Cancel Fee

**Other Benefits**

Additional controls and exceptions for VIP users:

  - Minimum Eligible Contract Days for New
  - Maximum Eligible Contract Days for New
  - Minimum Eligible Contract Days for Extend
  - Maximum Eligible Contract Days for Extend
  - Skip Contract Sign
  - Exclude Minimum Package Amount Validation
  - Can Document Delivery
  - Can Employee Delivery
  - Can Employee Pickup

### Workflow Stages and Actions :

### 1. Requested

  - Profile is created and awaiting verification.

  - Verification code sent to CEO.

  - **Actions :**
    - **Complete -** Action to send for Verification, Moved to Verification stage.

### 2. Verification

  - User submits verification code.

  - **Actions :**
    - **Verify -** Verified and Moved to the Active stage.

### 3. Active

  - VIP profile becomes available.
  - Can be assigned to customers or contracts.
  - Profile remains active for 1 year.

  - **Actions :**
    - **Expired -** Action to move the expired profile to the Expired stage.

### 4. Expired

  - Profile becomes inactive.
  - Cannot assign to customers
  - Can be renewed to become active again.
  - _No further actions required._

### 5. Completed

  - Final status after expiration or deactivation
  - _No further actions required._