---
sidebar_position : 1
---

# Envelope

### **Send Document Overview**

This process is used for sending documents to clients or branches. Commonly handled documents include Iqama and ATM cards, which are packaged and delivered as part of a delivery envelope.

**1. Individual Employees**

  - Documents are sent to the Customer Branch.

  - A notification is sent to the customer to collect the document.

**2. Business Employees**

  - Documents are sent in a bulk package directly to the customer location.

------------------------------------------------

## Individual

### Envelope

This process manages document delivery for individual employees. The workflow is driven by the employee's current Paygroup Branch Location.

  - **Initial Document Handling:**

    - All documents are first received at the default lodging location (Munisiah Lodge).

### Workflow Stages & Actions :

### 1. Waiting

  - The user reviews the employee's current branch location.

  - If the document is already at the employee’s branch, the request moves to Waiting for Delivery.

  - If not, the request moves to Send to Branch.

### 2. Send To Branch

  - The user initiates the transfer of the document to the correct employee location.

  - An envelope movement is recorded, including From and To locations.

  - **Actions :**
    - **Complete -** Moves to Receive in Branch stage.
    - **Lost -** Moves to Lost stage.

### 3. Receive in Branch

  - Once the user confirms receipt of the document at the branch, the system evaluates the employee’s current branch location.

  - If the document is at the correct employee branch, the request moves to Waiting for Delivery.

  - If the document is at the wrong branch, the request moves back to Send to Branch.

### 4.  Waiting for Delivery

  - The customer is notified that the employee’s document is ready for collection.

### 5. Lost

  - If the document cannot found, the user can manually move the request to the Lost stage.

### 6. Complete

  - Once the document is successfully delivered, the envelope status is updated to Closed.