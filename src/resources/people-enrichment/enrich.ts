// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import { isRequestOptions } from '../../core';
import * as Core from '../../core';
import * as EnrichAPI from './enrich';

export class Enrich extends APIResource {
  /**
   * Returns structured data about a person based on their business email address.
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
    return this._client.post('/v1/people/enrich', { body, ...options });
  }

  /**
   * The endpoint to poll to check the latest results when data about a person isn't
   * immediately available.
   */
  retrieve(token: string, options?: Core.RequestOptions): Core.APIPromise<EnrichRetrieveResponse> {
    return this._client.get(`/v1/people/enrich/${token}`, options);
  }
}

export interface EnrichCreateResponse {
  designation: string;

  email: string;

  /**
   * A list of facts we have on record about the person.
   */
  facts: Array<string>;

  first_name: string;

  last_name: string;

  name: string;

  /**
   * A summary of information about the person.
   */
  short_description: string;

  /**
   * The URL to the person's LinkedIn profile if one exists.
   */
  linkedin_url?: string;

  /**
   * A URL to the person's profile image obtained from LinkedIn. Valid for 10
   * minutes.
   */
  photo_url?: string;
}

export interface EnrichRetrieveResponse {
  designation: string;

  email: string;

  /**
   * A list of facts we have on record about the person.
   */
  facts: Array<string>;

  first_name: string;

  last_name: string;

  name: string;

  /**
   * A summary of information about the person.
   */
  short_description: string;

  /**
   * The URL to the person's LinkedIn profile if one exists.
   */
  linkedin_url?: string;

  /**
   * A URL to the person's profile image obtained from LinkedIn. Valid for 10
   * minutes.
   */
  photo_url?: string;
}

export interface EnrichCreateParams {
  /**
   * The person's business email address. We won't accept personal email address such
   * as Gmail, Yahoo etc.
   */
  email?: string;
}

export namespace Enrich {
  export import EnrichCreateResponse = EnrichAPI.EnrichCreateResponse;
  export import EnrichRetrieveResponse = EnrichAPI.EnrichRetrieveResponse;
  export import EnrichCreateParams = EnrichAPI.EnrichCreateParams;
}
