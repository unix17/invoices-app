import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { Beneficiary } from '@invoice/interfaces/beneficiary.interface';
import { InvoiceService } from '@invoice/services/invoice.service';
import { Invoice } from '@invoice/interfaces/invoice.interface';

@Component({
  selector: 'app-invoice',
  templateUrl: './invoice.component.html',
  styleUrls: ['./invoice.component.scss'],
})
export class InvoiceComponent implements OnInit {
  public beneficiaries$!: Observable<Beneficiary[]>;

  public constructor(
    private activatedRoute: ActivatedRoute,
    private invoiceService: InvoiceService,
  ) {}

  public ngOnInit(): void {
    this.beneficiaries$ = this.activatedRoute?.data.pipe(map((data) => data?.beneficiaries));
  }

  public creareInvoice(invoice: Invoice): void {
    this.invoiceService.createInvoice(invoice).subscribe();
  }
}
