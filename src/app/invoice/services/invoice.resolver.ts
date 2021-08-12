import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';
import { Observable } from 'rxjs';

import { InvoiceService } from '@invoice/services/invoice.service';
import { Beneficiary } from '@invoice/interfaces/beneficiary.interface';

@Injectable({
  providedIn: 'root',
})
export class InvoiceResolver implements Resolve<Observable<Beneficiary[]>> {
  public constructor(private invoiceService: InvoiceService) {}

  public resolve(): Observable<Beneficiary[]> {
    return this.invoiceService.fetchBeneficiaries();
  }
}
