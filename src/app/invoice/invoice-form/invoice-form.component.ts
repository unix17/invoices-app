import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
} from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { Beneficiary } from '@invoice/interfaces/beneficiary.interface';
import { Invoice } from '@invoice/interfaces/invoice.interface';

@Component({
  selector: 'app-invoice-form',
  templateUrl: './invoice-form.component.html',
  styleUrls: ['./invoice-form.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class InvoiceFormComponent implements OnInit {
  @Input() public beneficiaries!: Beneficiary[] | null;

  @Output() public submitInvoiceForm: EventEmitter<Invoice> = new EventEmitter<Invoice>();

  public invoiceForm!: FormGroup;

  public invoiceFormValidators: any;

  public constructor(
    private formBuilder: FormBuilder,
    private router: Router,
  ) {}

  public ngOnInit(): void {
    this.invoiceForm = this.createinvoiceForm();
  }

  public onSubmit(): void {
    this.validateInvoiceForm();
    if (this.invoiceForm.valid) {
      this.submitInvoiceForm.emit(this.invoiceForm.value);
      this.router.navigate(['']);
    }
  }

  private validateInvoiceForm(): void {
    const fields = Object.keys(this.invoiceForm.value);
    this.invoiceFormValidators = fields
      .map((field) => ({ field, valid: !this.invoiceForm.get(field)?.valid }))
      .reduce((acc, val) => ({ ...acc, [val.field]: val.valid }), {});
  }

  private createinvoiceForm(): FormGroup {
    return this.formBuilder.group({
      beneficiary_id: ['', Validators.required],
      amount: ['', Validators.required],
      date: ['', Validators.required],
      invoice_num: ['', Validators.required],
      pnr: [''],
      pax: [''],
    });
  }
}
