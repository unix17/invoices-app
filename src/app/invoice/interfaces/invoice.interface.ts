import { Beneficiary } from './beneficiary.interface';

export interface Invoice {
  id: string;
  amount: number;
  date: Date;
  invoice_num: string;
  pnr: string;
  pax: string;
  Beneficiary: Beneficiary;
  beneficiary: string;
}
