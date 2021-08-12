import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';
import { Invoice } from '@invoice/interfaces/invoice.interface';
import { Observable } from 'rxjs';

import { InvoicesService } from './invoices.service';

@Injectable({
  providedIn: 'root',
})
export class InvoicesResolver implements Resolve<Observable<Invoice[]>> {
  public constructor(private invoicesService: InvoicesService) {}

  public resolve(): Observable<Invoice[]> {
    return this.invoicesService.fetchInvoices();
  }
}
