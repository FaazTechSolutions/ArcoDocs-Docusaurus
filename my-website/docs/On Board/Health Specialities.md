---
sidebar_position: 11
---

# Health Specialities

  - This workflow is only triggered if the employee’s profession is related to the health sector (e.g., doctors, nurses, pharmacists, technicians, etc.).

## Workflows & Stages:

### 1. New Request

  - Initial submission for health sector registration is received.

  - **User Actions -**
    - **Complete -** Moves request to **CSHFS Registration stage.**

    - **Reject -** Moves request to **Rejected stage.**

### 2. CSHFS Registration

  - Employee details are being registered with the Saudi Commission for Health Specialties (SCFHS).

  - **User Actions -**
    - **Complete -** Moves request to **CSHFS Payment stage.**
    - **Reject -** Moves request to **Rejected stage.**

### 3. CSHFS Payment 

  - Payment is processed for SCFHS services.
  - **User Actions -**
    - **Complete -** Moves request to **Completed stage.**

### 4. Rejected

  - Request has been rejected at any prior stage.

  - No further actions; workflow ends.

### 5. Completed

  - SCFHS registration and payment process is fully completed.

  - No further actions; workflow ends.