// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import { isRequestOptions } from '../../core';
import * as Core from '../../core';
import * as EnrichAPI from './enrich';

export class Enrich extends APIResource {
  /**
   * Returns structured data about a company based on a domain input.
   */
  create(body?: EnrichCreateParams, options?: Core.RequestOptions): Core.APIPromise<EnrichCreateResponse>;
  create(options?: Core.RequestOptions): Core.APIPromise<EnrichCreateResponse>;
  create(
    body: EnrichCreateParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<EnrichCreateResponse> {
    if (isRequestOptions(body)) {
      return this.create({}, body);
    }
    return this._client.post('/v1/companies/enrich', { body, ...options });
  }

  /**
   * The endpoint to poll to check the latest results when data about a company isn't
   * immediately available.
   */
  retrieve(token: string, options?: Core.RequestOptions): Core.APIPromise<EnrichRetrieveResponse> {
    return this._client.get(`/v1/companies/enrich/${token}`, options);
  }
}

export interface EnrichCreateResponse {
  /**
   * A list of facts we have on record about the company.
   */
  facts: Array<string>;

  name: string;

  /**
   * A summary of information about the company.
   */
  short_description: string;

  website: string;

  /**
   * The URL to the company's LinkedIn profile if one exists.
   */
  linkedin_url?: string;

  /**
   * A URL to an image of the company's logo. Valid for 10 minutes.
   */
  photo_url?: string;
}

export interface EnrichRetrieveResponse {
  /**
   * A list of facts we have on record about the company.
   */
  facts: Array<string>;

  name: string;

  /**
   * A summary of information about the company.
   */
  short_description: string;

  website: string;

  /**
   * The URL to the company's LinkedIn profile if one exists.
   */
  linkedin_url?: string;

  /**
   * A URL to an image of the company's logo. Valid for 10 minutes.
   */
  photo_url?: string;
}

export interface EnrichCreateParams {
  /**
   * The domain of the company.
   */
  domain?: string;
}

export namespace Enrich {
  export import EnrichCreateResponse = EnrichAPI.EnrichCreateResponse;
  export import EnrichRetrieveResponse = EnrichAPI.EnrichRetrieveResponse;
  export import EnrichCreateParams = EnrichAPI.EnrichCreateParams;
}
