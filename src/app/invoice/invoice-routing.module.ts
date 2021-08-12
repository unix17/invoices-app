import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { InvoiceComponent } from '@invoice/invoice.component';
import { InvoiceResolver } from '@invoice/services/invoice.resolver';

const routes: Routes = [
  {
    path: '',
    component: InvoiceComponent,
    resolve: {
      beneficiaries: InvoiceResolver,
    },
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class InvoiceRoutingModule {}
