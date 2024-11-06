// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import * as EnrichAPI from './enrich';
import { Enrich } from './enrich';

export class PeopleEnrichment extends APIResource {
  enrich: EnrichAPI.Enrich = new EnrichAPI.Enrich(this._client);
}

PeopleEnrichment.Enrich = Enrich;

export declare namespace PeopleEnrichment {
  export { Enrich as Enrich };
}
