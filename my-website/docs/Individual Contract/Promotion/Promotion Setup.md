# Promotion Setup

## Purpose

The Promotion Setup module is used to create and manage campaign-based or referral-based promotions, including:

  - Generating promo codes
  - Assigning offers
  - Handling Affiliate commissions

### Promotion Types

**1. Affiliate – Referral**

  - Used for referral programs.

  - Includes commission tracking for referred customers.

**2. Marketing**

  - Used for marketing campaigns (e.g. seasonal offers).

  - Promo codes are generated and shared with customers.

### Promotion Creation Fields

When creating a promotion, the following fields must be defined:

  - Promotion Type
    - Affiliate
    - Marketing

  - **Description**

A short summary of the promotion's purpose.

  - **Code Format**

Defines how promo codes are generated:

  - L = Uppercase letter
  - l = Lowercase letter
  - n = Number
  - s = Symbol

(Example format: LLnn → AB12)

  - **Prepared Promotion Code (Optional)**

Predefined codes used in marketing, rather than generated dynamically.

  - **Max Count**

The maximum number of promo codes to generate or use.

### Promotion Offer Mapping

  - Users can link one or more offers to the promotion

  - Mapped fields include:
    - Offer Information (from Offer Setup)
    - Commission Information (only for Affiliate Type)

      - Defines referral benefit structure for the referring customer.

### Promo Code Generation

  - System allows **bulk generation of promo codes** based on defined format and max count

  - Each code can be assigned to:
    - No one (open marketing use)
    - Specific customers (controlled use)

### Implementation Workflow

**1. Marketing User:**

  - Creates promotion setup and promo codes.
  - Sends promo code notifications to customers.

**2. Customer:**

  - Enters promo code when creating a contract.
  - If the promo code matches the offer conditions, discount is applied.

**3. Rules & Constraints:**

  - Only one offer can be applied per transaction.
    - If a General Offer is already applied, a Promo Code cannot be used.

  - If a Promo Code is assigned to a customer, and they apply it:
    - A commission transaction is created for the referring user (Affiliate).