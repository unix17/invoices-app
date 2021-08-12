import { Injectable } from '@angular/core';

import { map, take } from 'rxjs/operators';
import { Observable } from 'rxjs';

import { GraphqlService } from '@shared/services/graphql.service';
import { Invoice } from '@invoice/interfaces/invoice.interface';

import { FETCH_INVOICES } from './graphql-queries.constants';

@Injectable({
  providedIn: 'root',
})
export class InvoicesService {
  public constructor(private graphqlService: GraphqlService) {}

  public fetchInvoices(): Observable<Invoice[]> {
    return this.graphqlService
      .fetchQuery({
        query: FETCH_INVOICES,
        fetchPolicy: 'network-only',
      })
      .valueChanges.pipe(
        take(1),
        // eslint-disable-next-line max-len
        map(({ data }) => (data?.allInvoices.map((invoice) => ({ ...invoice, beneficiary: invoice?.Beneficiary?.name })))),
      );
  }
}
