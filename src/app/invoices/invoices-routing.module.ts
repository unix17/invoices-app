import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { InvoicesComponent } from '@invoices/invoices.component';
import { InvoicesResolver } from '@invoices/services/invoices.resolver';

const routes: Routes = [
  {
    path: '',
    component: InvoicesComponent,
    resolve: {
      invoices: InvoicesResolver,
    },
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class InvoicesRoutingModule {}
