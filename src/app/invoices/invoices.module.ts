import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { InvoicesComponent } from '@invoices/invoices.component';
import { InvoicesSearchComponent } from '@invoices/invoices-search/invoices-search.component';
import { InvoicesListComponent } from '@invoices/invoices-list/invoices-list.component';
import { InvoiceFilter } from '@invoices/pipes/ filter.pipe';

import { InvoicesRoutingModule } from '@invoices/invoices-routing.module';

@NgModule({
  declarations: [
    InvoicesComponent,
    InvoicesSearchComponent,
    InvoicesListComponent,
    InvoiceFilter,
  ],
  imports: [
    CommonModule,
    FontAwesomeModule,
    InvoicesRoutingModule,
    ReactiveFormsModule,
  ],
})
export class InvoicesModule {}
