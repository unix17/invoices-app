import gql from 'graphql-tag';

export const FETCH_BENEFICIARIES = gql`
  query fetchBeneficiaries {
    allBeneficiaries {
      id
      name
    }
  }
`;

export const CREATE_INVOICE = gql`
  mutation createInvoice(
    $beneficiary_id: ID!,
    $amount: Float!,
    $date: Date!,
    $invoice_num: String!
    $pnr: String,
    $pax: String
  ) {
    createInvoice(
      beneficiary_id: $beneficiary_id,
      amount: $amount,
      date: $date,
      invoice_num: $invoice_num,
      pnr: $pnr,
      pax: $pax
    ) {
      id
    }
  }
`;
