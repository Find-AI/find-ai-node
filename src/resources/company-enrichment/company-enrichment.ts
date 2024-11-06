// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import * as EnrichAPI from './enrich';
import { Enrich } from './enrich';

export class CompanyEnrichment extends APIResource {
  enrich: EnrichAPI.Enrich = new EnrichAPI.Enrich(this._client);
}

CompanyEnrichment.Enrich = Enrich;

export declare namespace CompanyEnrichment {
  export { Enrich as Enrich };
}
