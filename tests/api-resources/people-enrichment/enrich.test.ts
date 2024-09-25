// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import FindAI from 'find-ai';

const client = new FindAI({ baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010' });

describe('resource enrich', () => {
  test('create: request options instead of params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(client.peopleEnrichment.enrich.create({ path: '/_stainless_unknown_path' })).rejects.toThrow(
      FindAI.NotFoundError,
    );
  });

  test('create: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.peopleEnrichment.enrich.create({ email: 'email' }, { path: '/_stainless_unknown_path' }),
    ).rejects.toThrow(FindAI.NotFoundError);
  });

  test('retrieve: request options instead of params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.peopleEnrichment.enrich.retrieve('token', { path: '/_stainless_unknown_path' }),
    ).rejects.toThrow(FindAI.NotFoundError);
  });
});
