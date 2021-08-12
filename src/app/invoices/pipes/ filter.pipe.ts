import { Pipe, PipeTransform } from '@angular/core';
import { Invoice } from '@invoice/interfaces/invoice.interface';

@Pipe({ name: 'InvoiceFilter' })
export class InvoiceFilter implements PipeTransform {
  // eslint-disable-next-line class-methods-use-this
  public transform(invoices: Invoice[], invoiceNum?: string): Invoice[] {
    if (!invoices) return [];
    if (!invoiceNum) return invoices;
    return invoices.filter((invoice: Invoice) => invoice?.invoice_num === invoiceNum);
  }
}
