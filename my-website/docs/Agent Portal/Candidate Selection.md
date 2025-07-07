---
sidebar_position : 4
---

# Candidate Selection Process

After a candidate is selected by the Client or Arco (from the application process), the selection process begins.

### Workflow Stages & Actions :

**1. Selection**

  - List of Candidate shortlisted for the job.

  - **Actions :**
    - **Selection Process Reject -** Moves to Rejected Stage.
    - **Selection to Offer Letter -** Moves to Offer Letter stage.

**2. Offer Letter**

  - IR user prepares and uploads the offer letter based on the RON.

  - **Actions :**
    - **Selection Process Reject -** Moves to Rejected Stage.

**3. Offer Negotiation**

  - IR Manager can negotiate and update salary details.

  - **Actions :**
    - **Selection Process Reject -** Moves to Rejected Stage.

**4. Offer Acceptance**

  - Download offer letter.
  - Upload signed offer letter from candidate.
  - Move to Medical Test stage.

  - **Actions :**
    - **Selection Process Reject -** Moves to Rejected Stage.
    - **Send to Medical Test -** Moves to Medical Test stage.

**5. Medical Test**

  - After completion of Medical test, move to Documentation stage.

  - **Actions :**
    - **Selection Process Reject -** Moves to Rejected Stage.
    - **Documentation -** Moves to Documentation stage.

**6. Documentation**
  
  - After completion of Documentation, move to Visa Stamping stage.

  - **Actions :**
    - **Proceed to Stamping -** Moves to Visa Stamping stage.

**7. Visa Stamping**

  - User enters Visa Stamping Number (from Enjaz file) and Delegation Number (Ewakala).

  - System creates Ewakala stamping record.

  - **Actions :**
    - **Selection Process Reject -** Moves to Rejected Stage.

**8. Waiting For Travel**

  - Update travel details via form or bulk upload:

    - Flight information
    - Arrival date

**9. Waiting for Arrival (External Requests only)**

  - Lodging user marks arrival to **Customer** or **Lodging:**

    - **To Customer:**
      - Create employee, assign contract, set salary status to "Working".

    - **To Lodging:**
      - Create employee, assign contract, default lodging check-in, salary status "Booked".

**10. Arrived**

  - Candidate officially arrived and onboarded.

**11. Stamping Cancellation**

  - If rejected after visa stamping, cancellation process starts in visa module.

  - After Cancellation process completed in Visa module, it come back to **Stamping Cancellation**.

**12. Ewakala Cancellation**

  - If rejected and candidate has Ewakala in **Mussanad**, system triggers cancellation in visa module.

  - After completion, moves to **Rejected**.

**13. Stamping Extension**

  - Triggered if the visa stamp has expired.

  - May involve restarting or extending the stamping process.

**14. Visa Stamp Expired**

  - The candidate's visa was stamped (usually in the passport),

  - But the visa validity period expired before the candidate could travel or complete the joining process.

**15. Rejected**

  - Final state for any **rejected candidates**.

  - Can happen:

    - Before visa stamping (direct rejection),

    - After **Ewakala Cancellation**,

    - After **Stamping Cancellation**.

**16. Visa Cancelled**

  - Used when the visa is formally cancelled, separate from stamping cancellation.

  - Typically marked in the visa system as a closed/cancelled visa case.

**17. Migrate Arrived**

  - Used to manually move a candidate to the 'Arrived' stage (in special cases).

  - Usually for data migration or correcting system state.