import gql from 'graphql-tag';

export const FETCH_INVOICES = gql`
  query fetchInvoices {
    allInvoices {
      id
      amount
      date
      invoice_num
      pnr
      pax
      Beneficiary {
        name
      }
    }
  }
`;
