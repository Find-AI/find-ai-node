// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import { isRequestOptions } from '../../core';
import * as Core from '../../core';
import * as EnrichAPI from './enrich';
import { type Response } from '../../_shims/index';

export class Enrich extends APIResource {
  /**
   * Returns structured data about a person based on their business email address.
   */
  create(body?: EnrichCreateParams, options?: Core.RequestOptions): Core.APIPromise<Response>;
  create(options?: Core.RequestOptions): Core.APIPromise<Response>;
  create(
    body: EnrichCreateParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<Response> {
    if (isRequestOptions(body)) {
      return this.create({}, body);
    }
    return this._client.post('/v1/people/enrich', { body, ...options, __binaryResponse: true });
  }

  /**
   * The endpoint to poll to check the latest results when data about a person isn't
   * immediately available.
   */
  retrieve(token: string, options?: Core.RequestOptions): Core.APIPromise<Response> {
    return this._client.get(`/v1/people/enrich/${token}`, { ...options, __binaryResponse: true });
  }
}

export interface EnrichCreateParams {
  /**
   * The person's business email address. We won't accept personal email address such
   * as Gmail, Yahoo etc.
   */
  email?: string;
}

export namespace Enrich {
  export import EnrichCreateParams = EnrichAPI.EnrichCreateParams;
}
