import gql from 'graphql-tag'

export const schema = gql`
  type Projection {
    id: String
    # referenceId: String #Either ContractId or InvoiceId
    # referenceType: String #Either Contract or Invoice
    vendorName: String
    year: String
    month: String
    version: String
    status: String
    division: String
    bu: String
    budgetAmount: String
    chargeCode: String
    allocationPercent: Int
    methodology: String
    projectedAmount: String
  }

  type Query {
    projections(division: String, bu: String): [Projection] @skipAuth
  }
`
