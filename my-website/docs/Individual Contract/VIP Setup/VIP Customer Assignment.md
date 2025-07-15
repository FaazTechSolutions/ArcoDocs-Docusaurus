# VIP Customer Assign

## Purpose

The VIP Customer Assign module allows assigning an Active VIP Profile to a specific Customer. Once assigned and activated, the customer is eligible to receive the benefits defined in the profile.

### How It Works

  - User selects a Customer and an Active VIP Profile.

  - Once assigned, the Customer Assignment becomes Active.

  - The assignment is valid for 1 year.

  - The customer can use VIP benefits by clicking "Use VIP" during contract creation.

### Important Notes

  - Only one active profile can be assigned to a customer at a time.

  - After 1 year, the assignment expires and must be renewed.

  - Benefits are applied only if the profile rules and limits are met.

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