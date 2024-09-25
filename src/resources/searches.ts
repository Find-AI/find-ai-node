// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../resource';
import { isRequestOptions } from '../core';
import * as Core from '../core';
import * as SearchesAPI from './searches';
import { type Response } from '../_shims/index';

export class Searches extends APIResource {
  /**
   * Starts a search.
   */
  create(body?: SearchCreateParams, options?: Core.RequestOptions): Core.APIPromise<Response>;
  create(options?: Core.RequestOptions): Core.APIPromise<Response>;
  create(
    body: SearchCreateParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<Response> {
    if (isRequestOptions(body)) {
      return this.create({}, body);
    }
    return this._client.post('/v1/searches', { body, ...options, __binaryResponse: true });
  }

  /**
   * The endpoint to poll to check the latest results of a search.
   */
  retrieve(id: string, options?: Core.RequestOptions): Core.APIPromise<void> {
    return this._client.get(`/v1/searches/${id}`, {
      ...options,
      headers: { Accept: '*/*', ...options?.headers },
    });
  }
}

export interface SearchCreateParams {
  /**
   * The maximum number of results to return. optional for result_mode exact
   */
  max_matches?: number;

  /**
   * Search query.
   */
  query?: string;

  /**
   * The mode of the search. Valid values are 'exact' or 'best'.
   */
  result_mode?: string;

  /**
   * The scope of the search. Valid values are 'people' or 'companies'.
   */
  scope?: string;
}

export namespace Searches {
  export import SearchCreateParams = SearchesAPI.SearchCreateParams;
}
