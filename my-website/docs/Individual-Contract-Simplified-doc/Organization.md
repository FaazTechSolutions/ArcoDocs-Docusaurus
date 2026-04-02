---
sidebar_position : 7
---
## Organization

# Branches

## Purpose

Defines the company's physical branch locations. These are displayed to customers in the website and mobile app, based on their active status.

### Branch Setup Fields

When creating or managing a branch, the following details are required:

  - Name
  - Location Coordinates
  - Address
  - Working Hours / Timing
  - City
  - Region
  - Contact Information
  - IsActive (Yes/No) — determines if the branch is visible to customers

### Visibility

  - Only active branches (IsActive = Yes) are shown in the customer-facing interfaces (web and app).
------------------------------------------------

## Branch Lodging

### Purpose

Allows configuration of lodging facilities under a branch for delivery, transfers, and internal logistics.

### Lodging Setup Under Branch

For each branch, the following lodging configuration can be managed:

  - **Lodging**

The lodging facility associated with the branch.

  - **IsPrimary**

Marks the primary lodging used for delivery from this branch.

  - **Delivery Time**

Estimated or configured delivery time from this lodging.

### System Logic & Behavior

  - When a new branch is created, the system **automatically creates a new lodge** with **Lodge Type = "Branch"**.

  - The user must **map the branch to a lodging** that has **Lodge Type = "Branch"**.

  - The user can **update or change the primary delivery lodging** for any branch as needed.

### Internal Lodging Transfer

  - If an employee returns to a branch, the user can create an **Internal Transfer** in the **Lodging Module** to move the employee from the **Branch to Lodging**.

  - Once the **Labour Transfer** is completed, the employee is officially moved to the lodging facility.

  ---

  # City Setup

## Purpose

The City Setup module is used to define and manage cities as part of the system's master data. Cities are used across various modules like delivery services, branches, lodging, and cost configurations.

### City Configuration Fields

To create or manage a city, provide the following:

 - **Name**

The name of the city (e.g., Riyadh, Jeddah)

  - **Region**

The region or province the city belongs to.

  - **Country**

The country where the city is located.