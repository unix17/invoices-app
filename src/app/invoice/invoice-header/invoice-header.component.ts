import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-invoice-header',
  templateUrl: './invoice-header.component.html',
  styleUrls: ['./invoice-header.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class InvoiceHeaderComponent implements OnInit {
  public invoiceId!: number;

  public constructor(private activatedRoute: ActivatedRoute) {}

  public ngOnInit(): void {
    this.invoiceId = this.activatedRoute.snapshot.params?.id;
  }
}
