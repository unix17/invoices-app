import { Injectable } from '@angular/core';
import { Apollo, QueryRef } from 'apollo-angular';

import { Query } from '@shared/interfaces/query.interface';
import { Mutation } from '@shared/interfaces/mutation.interface';

@Injectable({
  providedIn: 'root',
})
export class GraphqlService {
  public constructor(private apolloClient: Apollo) {}

  public fetchQuery(query: any): QueryRef<Query> {
    return this.apolloClient.watchQuery<Query>(query);
  }

  public postMutation(query: any): any {
    return this.apolloClient.mutate<Mutation>(query);
  }
}
