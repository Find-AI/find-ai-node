// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../resource';
import { isRequestOptions } from '../core';
import * as Core from '../core';
import * as SearchesAPI from './searches';

export class Searches extends APIResource {
  /**
   * Starts a search.
   */
  create(body?: SearchCreateParams, options?: Core.RequestOptions): Core.APIPromise<SearchCreateResponse>;
  create(options?: Core.RequestOptions): Core.APIPromise<SearchCreateResponse>;
  create(
    body: SearchCreateParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<SearchCreateResponse> {
    if (isRequestOptions(body)) {
      return this.create({}, body);
    }
    return this._client.post('/v1/searches', { body, ...options });
  }

  /**
   * The endpoint to poll to check the latest results of a search.
   */
  retrieve(id: string, options?: Core.RequestOptions): Core.APIPromise<SearchRetrieveResponse> {
    return this._client.get(`/v1/searches/${id}`, options);
  }
}

export interface SearchCreateResponse {
  poll: SearchCreateResponse.Poll;
}

export namespace SearchCreateResponse {
  export interface Poll {
    token: string;

    path: string;
  }
}

export type SearchRetrieveResponse = Array<SearchRetrieveResponse.SearchRetrieveResponseItem>;

export namespace SearchRetrieveResponse {
  export interface SearchRetrieveResponseItem {
    linkedin_url: string;

    name: string;

    /**
     * Returned only for a person.
     */
    company?: string;

    criteria_and_reasons?: Array<SearchRetrieveResponseItem.CriteriaAndReason>;

    /**
     * Returned only for a company.
     */
    domain?: string;

    /**
     * Returned only for a person.
     */
    title?: string;
  }

  export namespace SearchRetrieveResponseItem {
    export interface CriteriaAndReason {
      /**
       * Match criteria
       */
      criteria?: string;

      /**
       * Whether it's a match
       */
      match?: boolean;

      /**
       * Reason for the match
       */
      reason?: string;
    }
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
  result_mode?: 'exact' | 'best';

  /**
   * The scope of the search. Valid values are 'person' or 'company'.
   */
  scope?: 'person' | 'company';
}

export namespace Searches {
  export import SearchCreateResponse = SearchesAPI.SearchCreateResponse;
  export import SearchRetrieveResponse = SearchesAPI.SearchRetrieveResponse;
  export import SearchCreateParams = SearchesAPI.SearchCreateParams;
}
