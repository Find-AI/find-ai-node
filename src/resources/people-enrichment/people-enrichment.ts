// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import * as EnrichAPI from './enrich';

export class PeopleEnrichment extends APIResource {
  enrich: EnrichAPI.Enrich = new EnrichAPI.Enrich(this._client);
}

export namespace PeopleEnrichment {
  export import Enrich = EnrichAPI.Enrich;
  export import EnrichCreateResponse = EnrichAPI.EnrichCreateResponse;
  export import EnrichRetrieveResponse = EnrichAPI.EnrichRetrieveResponse;
  export import EnrichCreateParams = EnrichAPI.EnrichCreateParams;
}
