import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { InvoiceRoutingModule } from '@invoice/invoice-routing.module';

import { InvoiceComponent } from '@invoice/invoice.component';
import { InvoiceFormComponent } from '@invoice/invoice-form/invoice-form.component';
import { InvoiceHeaderComponent } from '@invoice/invoice-header/invoice-header.component';

@NgModule({
  declarations: [
    InvoiceComponent,
    InvoiceHeaderComponent,
    InvoiceFormComponent,
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    InvoiceRoutingModule,
  ],
})
export class InvoiceModule {}
