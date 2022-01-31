/**
 * @jest-environment jsdom
 */

import React from 'react';
import fetchMock from 'jest-fetch-mock';
import { renderHook } from '@testing-library/react-hooks';
import { Provider } from 'react-redux';
import { setupApiStore } from '../../store/StoreForTesting';
import { videosApi } from '../../services/videosApi';

describe('useListVariantsQuery hook test', () => {
  const updateTimeout = 5000;

  const wrapper: React.FC = ({ children }: any) => {
    const storeReference = setupApiStore(videosApi);
    return <Provider store={storeReference.store}>{children}</Provider>;
  };

  beforeEach((): void => {
    fetchMock.resetMocks();
  });

  it('Success', async () => {
    fetchMock.mockResponse(JSON.stringify(['videos']));
    const { result, waitForNextUpdate } = renderHook(
      () => videosApi.useFetchAllVideosQuery(''),
      { wrapper }
    );

    const initialResponse = result.current;
    expect(initialResponse.data).toBeUndefined();
    expect(initialResponse.isLoading).toBe(true);

    await waitForNextUpdate({ timeout: updateTimeout });

    const nextResponse = result.current;
    expect(nextResponse.data).not.toBeUndefined();
    expect(nextResponse.isLoading).toBe(false);
    expect(nextResponse.isSuccess).toBe(true);
  });

  it('Internal Server Error', async () => {
    fetchMock.mockReject(new Error('Internal Server Error'));
    const { result, waitForNextUpdate } = renderHook(
      () => videosApi.useFetchAllVideosQuery(''),
      { wrapper }
    );

    const initialResponse = result.current;
    expect(initialResponse.data).toBeUndefined();
    expect(initialResponse.isLoading).toBe(true);

    await waitForNextUpdate({ timeout: updateTimeout });

    const nextResponse = result.current;
    expect(nextResponse.data).toBeUndefined();
    expect(nextResponse.isLoading).toBe(false);
    expect(nextResponse.isError).toBe(true);
  });
});
