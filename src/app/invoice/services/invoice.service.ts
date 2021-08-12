import { Injectable } from '@angular/core';

import { map, take } from 'rxjs/operators';
import { Observable } from 'rxjs';

import { Beneficiary } from '@invoice/interfaces/beneficiary.interface';
import { CREATE_INVOICE, FETCH_BENEFICIARIES } from '@invoice/services/graphql-queries.constants';

import { GraphqlService } from '@shared/services/graphql.service';
import { Invoice } from '@invoice/interfaces/invoice.interface';

@Injectable({
  providedIn: 'root',
})
export class InvoiceService {
  public constructor(private graphqlService: GraphqlService) {}

  public fetchBeneficiaries(): Observable<Beneficiary[]> {
    return this.graphqlService
      .fetchQuery({
        query: FETCH_BENEFICIARIES,
        fetchPolicy: 'network-only',
      })
      .valueChanges.pipe(take(1), map(({ data }) => (data?.allBeneficiaries)));
  }

  public createInvoice(invoiceData: Invoice): Observable<Invoice> {
    return this.graphqlService
      .postMutation({
        mutation: CREATE_INVOICE,
        variables: { ...invoiceData },
      })
      .pipe(
        take(1),
        map((response: { data: { invoice: Invoice } }) => response?.data?.invoice),
      );
  }
}
