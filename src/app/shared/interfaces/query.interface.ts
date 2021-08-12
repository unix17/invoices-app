import { Beneficiary } from '@invoice/interfaces/beneficiary.interface';
import { Invoice } from '@invoice/interfaces/invoice.interface';

export interface Query {
  allInvoices: Invoice[]
  allBeneficiaries: Beneficiary[]
}
