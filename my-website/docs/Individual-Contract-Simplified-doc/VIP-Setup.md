---
sidebar_position : 10
---
# VIP Setup

- VIP Setup to give benefits for VIP Clients by profile

### VIP Profile
- Setup Benefit or condition for VIP Profile
- In setup, count 0 means "Unlimited" count

#### Setup Benefits

- General
  - ProfileType
    - Profile lookup fields
  - Name
  - Level
    - Customer
    - Contract
  - Contract Creation Type-by Customer level
    - New
    - Extend
    - Both
  - No of Contracts--by Customer level

- Discount
  - Discount Count
  - DiscountType
    - Percentage
    - Flat amount
    - Days
    - Days Percentage
  - Discount Value
  - Discount Max Limit-limit by amount

- Paylater
  - Paylater Count
  - PL Max Limit-Amount Limit
  - PL No of Contracts
  - PL per contract Limit-Amount Limit
  - Can PL Refill
    - If Customer paid after paylater transaction, he can use paylater amount limit

- Penalty
  - Skip Penalty Count
  - Skip Exchange Fee
  - Skip Terminate fee
  - Skip Cancel Fee

- Sponsor Transfer-not used in latest implementation
  - Discount Percentage
  - Eligible Days

- Other Benefits
  - Min Eligible Contract Days For New
  - Max Eligible Contract Days For New
  - Min Eligible Contract Days For Extend
  - Max Eligible Contract Days For Extend
  - Skip Promissory Note - not used
  - Skip Contract Sign
  - Exclude Min Package Amt Validation
  - Can Document Delivery
  - Can Employee Delivery
  - Can Employee PickUp

### Stages

- Requested
  - Once User Created, move the profile for Verification
  - Verification code send to CEO

- Verification
  - User complete profile by Verification Code

- Active
  - Once Profile User can assign Customer/Contract to the profile
  - Once profile activated, profile can active for one year
  - Once profile expired, move to expired

- Expired
  - User cannot assign customer to profile
  - User can renew and make active again

  ### VIP Customer Assignment

- User will create Customer Assignment by selecting customer and active profile
- Once Customer assignment is active, Customer will get VIP Benefit by Profile
- Assignment will expire after one year
- Customer can use VIP benefit, by selecting "Use VIP" action in contract transaction

#### Stages

- Requested
  - Once User Created, move the request for Verification
  - Verification code send to CEO

- Verification
  - User complete request by Verification Code

- Active
  - Customer will get VIP Benefit by Profile
  - Once profile activated, profile can be active for one year
  - Once profile expired, move to expired

- Expired
  - User cannot assign customer to profile
  - User can renew and make active again

- Customer VIP information and Transaction details will be shown in Customer Details

---
