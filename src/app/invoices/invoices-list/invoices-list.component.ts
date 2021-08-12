import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { Invoice } from '@invoice/interfaces/invoice.interface';

@Component({
  selector: 'app-invoices-list',
  templateUrl: './invoices-list.component.html',
  styleUrls: ['./invoices-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class InvoicesListComponent {
  @Input() public invoices!: Invoice[];

  @Input() public invoiceNum!: string;
}
