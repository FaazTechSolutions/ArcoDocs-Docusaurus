---
sidebar_position : 1
---

# Selection Process

## Overview

Manages the full candidate journey from offer to arrival, including visa and travel processes.

### Workflow Stages & Actions :

### 1. Selection

  - List of Candidate shortlisted for the job.

  - **Actions :**
    - **Selection Process Reject -** 
    - **Selection to Offer Letter -**

### 2. Offer Letter

  - IR user prepares and uploads the offer letter based on the RON.

  - **Actions :**
    - **Selection Process Reject -** 
    - **Offer Acceptance -** Moves to Offer Acceptance Stage.
    - **Selection -** Move Back to Selection Stage.

### 3. Offer Negotiation

  - IR Manager can negotiate and update salary details.

  - **Actions :**
    - **Selection Process Reject -** 
    - **Approve -** Moves to Offer Letter Stage.
    - **Not Approve -** Move back to Offer Letter stage.

### 4. Offer Acceptance

  - Candidate accepts the offer via agent or IR user.

  - Signed Offer letter is uploaded.

  - **Actions :**
    - **Selection Process Reject -** 
    - **Send to Medical Test -** Moves to Medical test Stage.

### 5. Medical Test

  - Candidate completes medical, and documentation proceeds.

  - **Actions :**
    - **Selection Process Reject -** 
    - **Proceed to Stamping -** 
    - **UnFit -** Moves to Rejected Stage.

### 6. Ewakala (only if needed)

  - Starts if the Job Post doesn’t have available Ewakala quantity.

  - Skipped if Ewakala is available.

  - **Actions :**
    - **Selection Process Reject -** 
    - **Proceed to Stamping -** 

### 7. Visa Stamping

  - User enters Visa Stamping Number (from Enjaz file) and Delegation Number (Ewakala).

  - System creates Ewakala stamping record.

  - **Actions :**
    - **Multiple Visa Update -**
    - **Selection Process Reject -** 
    - **Waiting for Travel -** Moves to Waiting for Travel Stage.
    - **Medical Test -** Moves to Medical Test Stage.

### 8. Waiting for Travel

  - Travel info added via form or import.

  - Auto-completes when employee arrives in Muqueem file.

  - **For Internal Request:**

    - Candidate moves to Arrived, employee record is created, check-in to default lodging.

  - **For External Request:**

    - Moves to Waiting for Arrival.

  - **Actions :**
    - **Attach Travel Ticket -**
    - **Arrived -** Moves to Arrived Stage.
    - **Rejected -** Moves to Stamping Cancellation stage.
    - **Stamping Entention -** Moves to Stamping Extension stage.
    - **Visa Stamping -** Moves to Visa Stamping

### 9. Waiting for Arrival (External Requests only)

  - Lodging user marks arrival to **Customer** or **Lodging:**

    - **To Customer:**
      - Create employee, assign contract, set salary status to "Working".

    - **To Lodging:**
      - Create employee, assign contract, default lodging check-in, salary status "Booked".

  - **Actions :**
    - **Arrived -** Moves to Arrived stage.
    - **Waiting for Travel -** Moves to Waiting for Travel stage.

### 10. Arrived

  - Candidate officially arrived and onboarded.

  - **Actions -**
    - **Waiting for Travel -** Moves to Waiting for Travel stage.
    - **Waiting for Action Arrived -** Moves to Waiting for Action Arrived stage.

### 11. Stamping Cancellation

  - If rejected after visa stamping, cancellation process starts in visa module.

  - After Cancellation process completed in Visa module, it come back to **Stamping Cancellation**.

### 12. Ewakala Cancellation

  - If rejected and candidate has Ewakala in **Mussanad**, system triggers cancellation in visa module.

  - After completion, moves to **Rejected**.

### 13. Stamping Extension

  - Triggered if the visa stamp has expired.

  - May involve restarting or extending the stamping process.

  - **Actions -**
    - **Waiting for Travel -** Moves to Waiting for Travel stage.

### 14. Visa Stamp Expired

  - The candidate's visa was stamped (usually in the passport),

  - But the visa validity period expired before the candidate could travel or complete the joining process.

  - **Actions -**
    - **Stamping Cancellation -** Moves to Stamping Cancellation stage.
    - **Waiting for Travel -** Moves to Waiting for Travel stage.

### 15. Rejected

  - Final state for any **rejected candidates**.

  - Can happen:

    - Before visa stamping (direct rejection),

    - After **Ewakala Cancellation**,

    - After **Stamping Cancellation**.

### 16. Visa Cancelled

  - Used when the visa is formally cancelled, separate from stamping cancellation.

  - Typically marked in the visa system as a closed/cancelled visa case.

### 17. Migrate Arrived

  - Used to manually move a candidate to the 'Arrived' stage (in special cases).

  - Usually for data migration or correcting system state.