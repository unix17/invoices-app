import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InvoiceModule } from '@invoice/invoice.module';

import { InvoicesModule } from '@invoices/invoices.module';

const routes: Routes = [
  {
    path: '',
    loadChildren: async (): Promise<InvoicesModule> => (await import('@invoices/invoices.module')).InvoicesModule,
  },
  {
    path: ':id',
    loadChildren: async (): Promise<InvoiceModule> => (await import('@invoice/invoice.module')).InvoiceModule,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
