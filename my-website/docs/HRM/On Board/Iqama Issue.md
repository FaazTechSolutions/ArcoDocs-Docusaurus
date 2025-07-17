---
sidebar_position: 5
---

# Iqama Issue

  - Initiated by the user selecting the Iqama period (based on Labour Office payment).

  - Managed by the Manpower team via the Muqueem portal.

  - This stage marks the beginning of the Iqama (Resident Identity) issuance process for the employee.

  - The Iqama ID is a resident permit issued by the KSA Government, and it serves as the official identity for the employee within the HRM system.

  - Once the Iqama ID is received, the following processes are triggered:
    - Medical Insurance activation
    - ATM issuance
    - GOSI (Government Social Insurance) registration

## Workflow Stages:

### 1. Iqama Issued

  - Manpower user initiates Iqama issuance in the Muqueem portal.

  - Iqama details (ID number, issue date, expiry date) are imported into the HRM system using an Excel upload via the "Import" option.

  - The official Iqama process begins.

  - This allows tracking of the Iqama issuance for the employee.

  - **User Actions -**
    - **Complete -** Moves the request to Waiting to Receive stage.

### 2. Waiting to Receive

  - Awaiting physical delivery of the Iqama card to the employee’s lodging.

  - Once received, moves to the next stage.

  - **User Actions -**
    - **Complete -** Moves to Put in Envelope stage.
    - **Reject -** Ends and completes the request.

### 3. Put in Envelope

  - Iqama card is prepared for delivery to the employee's working location.

  - **User Actions -**
    - **Complete -** Moves to Completed stage.

### 4. Completed

  - Iqama issuance is finalized.

  - The following processes are automatically triggered:
    - Medical Insurance - Moves from "Linked to CCHI Waiting for Iqama".
    - ATM issuance
    - Driving License (if the employee’s profession is “Driver”)
    - GOSI registration
    - Qiwa Contract activation
    - Health Specialties registration (for health sector roles)
    - Employee Absher account setup