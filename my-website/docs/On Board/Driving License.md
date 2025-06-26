---
sidebar_position: 7
---

# Driving License

The Driving License process for an employee starts (if employee profession is driver) after the Iqama issuance is completed in the HRM system.

A new Driving License request is initiated for the employee.

## Workflows & Stages:

### 1. Newly Required

  - A new request is received and awaits processing. Upon completion, the request moves to the **Training stage.**

  - **User Actions -**
    - **Complete -** Moves request to **Training stage.**
    - **Reject -** Moves request to Rejected stage.

### 2. Training

  - This stage is for initial training of the employee. Once the training is completed, it moves to the **Medical Checkup stage.**

  - **User Actions -**
    - **Complete -** Moves request to **Medical Checkup stage.**
    - **Reject -** Moves request to Rejected stage.

### 3. Medical Checkup

  - Waits for medical checkup processing. Once completed, moves to **Absher Appointment stage.**

  - **User Actions -**
    - **Complete -** Moves request to **Absher Appointment stage.**
    - **Reject -** Moves request to Rejected stage.

### 4. Absher Appointment

  - Awaits processing of the application for test drive. Once completed, moves to **Driving School Payment stage.**

  - **User Actions -**
    - **Complete -** Moves request to **Driving School Payment stage.**
    - **Reject -** Moves request to Rejected stage.

### 5. Driving School Payment

  - Waits for payment processing in the Finance Department. Once completed, moves to Test Drive stage.

  - **User Actions -**
    - **Complete -** Moves request to **Normal Class stage.**

### 6. Normal Class

  - Waits for class processing. Upon completion, moves to Computer Test stage.

  - **User Actions -**
    - **Complete -** Moves request to **Computer Test stage.**
    - **Reject -** Moves request to Rejected stage.

### 7. Computer Test

  - Waits for employee to complete the computer test.

  - **User Actions -**
    - **Pass -** Moves to **Driving Test stage**.
    - **Fail -** Moves the request waits for a **Re-Test Class.**

### 8. Driving Test

  - Waits for employee to complete the driving test.

  - **User Actions -**
    - **Pass -** Moves to **License Payment**.
    - **Fail -** Moves the request waits for a **Re-Test Class.**

### 9. Re-Test Payment

  - Waits for retest payment in the Finance Department. Once completed, moves to **Re-Test Class stage.**

  - **User Actions -**
    - **Complete -** Moves request to Re-Test Class stage.

### 10. Re-Test Class

  - Waits for retest class to be completed. Once done, moves to **License Payment stage.**

  - **User Actions -**
    - **Complete -** Moves request to **License Payment Stage.**
    - **Reject -** Moves request to Rejected stage.

### 11. License Payment

  - Waits for license payment in the Finance Department. Once completed, moves to Issue License stage.

  - **User Actions -**
    - **Complete -** Moves request to **Issue License Stage.**
    - **Reject -** Moves request to Rejected stage.

### 12. Issue License

  - Waits for license to be issued to the employee. Upon issuance, moves to **Complete stage.**

  - **User Actions -**
    - **Complete -** Moves request to **Completed Stage.**

### 13. Complete

  - Final stage indicating the request is completed.

### 14. Rejected

  - This shows Rejected employees in Driving License test.