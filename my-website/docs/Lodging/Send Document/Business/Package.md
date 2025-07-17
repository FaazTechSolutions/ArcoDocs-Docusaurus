---
sidebar_position : 1
---

# Package

  - Envelopes are initially created with an Open status.

  - After completing the "Put in Envelope" stage, the envelope moves to a package as follows:

    - It moves to an Open Package at the customer’s location.

    - If no open package exists, a new package is created and the envelope is moved there.

  - Users can manage and prioritize packages on the Move Envelope page.

## Workflow Stages & Actions :

### 1. Open Packages

  - Users can add envelopes to the package at this stage.

  - Once a document is delivered, its envelope status changes to "InProgress".

  - **Actions :**
    - **Complete -** Moves the package to Closed - Under Preparation stage.
    - **Hold -** Moves the package to the On Hold stage.

### 2. Closed - Under Preparation

  -The package is closed; no further envelopes can be added.

  - **Actions :**
    - **Complete -** Moves the package to the Despatching stage.

### 3. Despatching

  - Indicates that the despatching process is underway.

  - **Actions :**
    - **Complete -** Moves the package to Dispatched & Waiting for Confirmation.

### 4. Dispatched & Waiting for Confirmation

  - User can move envelopes to another package or confirm envelope delivery.

  - **Actions :**
    - **Complete -** Moves the package to the Complete stage.

### 5. Complete

  - All documents have been successfully delivered.

  - Envelope statuses are updated to Closed.

  - _No further actions are required._.

### 6. On Hold

  - Packages in this stage have been paused or hold.

  - **Actions :**
    - **Resume -** Returns the package to the Open Packages stage to continue processing.