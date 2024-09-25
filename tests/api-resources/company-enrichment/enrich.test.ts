// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import FindAI from 'find-ai';
import { Response } from 'node-fetch';

const client = new FindAI({ baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010' });

describe('resource enrich', () => {
  test('create', async () => {
    const responsePromise = client.companyEnrichment.enrich.create();
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('create: request options instead of params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.companyEnrichment.enrich.create({ path: '/_stainless_unknown_path' }),
    ).rejects.toThrow(FindAI.NotFoundError);
  });

  test('create: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.companyEnrichment.enrich.create({ domain: 'domain' }, { path: '/_stainless_unknown_path' }),
    ).rejects.toThrow(FindAI.NotFoundError);
  });

  test('retrieve', async () => {
    const responsePromise = client.companyEnrichment.enrich.retrieve('token');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('retrieve: request options instead of params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.companyEnrichment.enrich.retrieve('token', { path: '/_stainless_unknown_path' }),
    ).rejects.toThrow(FindAI.NotFoundError);
  });
});
