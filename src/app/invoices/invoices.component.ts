import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Invoice } from '@invoice/interfaces/invoice.interface';
import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-invoices',
  templateUrl: './invoices.component.html',
  styleUrls: ['./invoices.component.scss'],
})
export class InvoicesComponent implements OnInit {
  public constructor(private activatedRoute: ActivatedRoute) {}

  public invoices$!: Observable<Invoice[]>;

  public newInvoiceId$!: Observable<string>;

  public invoiceNum!: string;

  public ngOnInit(): void {
    this.invoices$ = this.activatedRoute?.data.pipe(map((data) => data?.invoices)) || of([]);
    this.newInvoiceId$ = this.generateNewInvoiceId();
  }

  public filterInvoices(invoiceNum: string): void {
    this.invoiceNum = invoiceNum;
  }

  private generateNewInvoiceId():Observable<string> {
    return this.invoices$.pipe(
      map((invoices) => invoices[invoices.length - 1]?.id || '0'),
      map((id: string) => (parseInt(id, 10) + 1).toString()),
    );
  }
}
