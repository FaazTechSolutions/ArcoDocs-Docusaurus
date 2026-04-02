---
sidebar_position : 9
---
## Promotion

### Offer Setup
- To set up discount for contract transaction
- Offer Type
  - Promotion
    - Offer used for promotion setup
  - General
    - General offer applies automatically based on condition
- Currently, per transaction apply only one discount (multiple discounts not allowed)
- In contract transaction, if discount amount reaches min. per day cost of package, discount amount will be based on min. per day cost
- Setup with following fields:
  - Offer Type
    - Promotion
    - General Offer
  - Offer period
  - Discount
    - DiscountType
      - Percentage
      - Flat amount
      - Days
      - Days Percentage
    - Discount Value
    - Contract Min. Days
    - Discount Max Limit-limit by amount
  - Condition
    - By Package
    - Branch
    - User
    - Customer
    - Nationality
    - Profession
    - Creation Type
      - New
      - Extend
      - Both
    - Created Source
      - ERP
      - Mobile app
  - Status
    - Draft
      - User can edit offer and make action for submit
    - Submitted
      - Offer activated and applies discount in contract transaction by condition

### Promotion Setup
- User can create Promotion setup with promotion and offer
- Promotion have 2 types:
  - Affiliate-Referral
  - Marketing
- Create:
  - Promotion Type
  - Description
  - Code Format-(L - upper, l - lower, n - Number, s - Symbol)
  - Prepared Promotion code - for marketing
  - Max Count
- User creates promotion offer under promotion setup:
  - User will map the offer setup to promotion setup
    - Offer Information
    - Commission information (for referral customer-Affiliate)
- User can generate promotion code in promotion setup:
  - System generates requested number of promotion codes

### Implementation
- Marketing user creates promo code and sends notification to customer
- Customer uses promo code when creating contract. When applying promo code, based on offer condition discount is applied
- Multiple offers cannot be applied - for example: if general offer applied, cannot apply promo code offer
- If promo code assigned with customers, when applying promo code commission transaction will be created

---
