---
sidebar_position : 12
---
## Other Transaction

### Credit Note Approval
- User create request to create credit note
- Once Finance Manager approved, Credit note will create
- User can reject the request

### Debit Note Approval
- User create request to create debit note
- Once Finance Manager approved, debit note will create
- User can reject the request

### Credit Control
- Customer /User cannot assign or reserve employee with following criteria:
  - Customer any Contract status in Expired
  - Any Contract have due more than 50
- Employee assignment rule can override by credit control approval
- User create request with following:
  - Contract info
  - Assign User

#### Stages
- Management Approval
  - Supervisor User move the request to Approved
  - Verification code send to CEO or management User
- Approved
  - User will complete the request by Verification code
- Completed
  - Once Verified, Employee can be assigned to Contract by requested User
- Rejected
