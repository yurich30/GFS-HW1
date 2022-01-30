import fetchMock from 'jest-fetch-mock';
import { setupApiStore } from './StoreForTesting';
import { videosApi } from '../services/videosApi';

describe('Test videosApi fetchAllVideos', () => {
  beforeEach((): void => {
    fetchMock.resetMocks();
  });

  it('request is correct fetchAllVideos', () => {
    const storeReference = setupApiStore(videosApi, {
      [videosApi.reducerPath]: videosApi.reducer,
    });
    fetchMock.mockResponse(JSON.stringify({}));

    return storeReference.store
      .dispatch<any>(videosApi.endpoints.fetchAllVideos.initiate(''))
      .then(() => {
        const { method, headers, url } = fetchMock.mock.calls[0][0] as Request;

        expect(fetchMock).toBeCalledTimes(1);
        expect(method).toBe('GET');
        expect(url).toBe('https://tiktok33.p.rapidapi.com/trending/feed');
        expect(headers).toBe('application/json');
      });
  });

  it('successful response fetchAllVideos', () => {
    const storeReference = setupApiStore(videosApi, {
      [videosApi.reducerPath]: videosApi.reducer,
    });
    fetchMock.mockResponse(JSON.stringify(['videos']));

    return storeReference.store
      .dispatch<any>(videosApi.endpoints.fetchAllVideos.initiate(''))
      .then((action: any) => {
        const { status, data, isSuccess } = action;
        expect(status).toBe('fulfilled');
        expect(isSuccess).toBe(true);
        expect(data).toStrictEqual(['videos']);
      });
  });

  it('unsuccessful response fetchAllVideos', () => {
    const storeReference = setupApiStore(videosApi, {
      [videosApi.reducerPath]: videosApi.reducer,
    });
    fetchMock.mockReject(new Error('Internal Server Error'));

    return storeReference.store
      .dispatch<any>(videosApi.endpoints.fetchAllVideos.initiate(''))
      .then((action: any) => {
        const {
          status,
          error: { error },
          isError,
        } = action;
        expect(status).toBe('rejected');
        expect(isError).toBe(true);
        expect(error).toBe('Error: Internal Server Error');
      });
  });
});

describe('Test videosApi fetchUserInfo', () => {
  beforeEach((): void => {
    fetchMock.resetMocks();
  });

  it('request is correct fetchUserInfo', () => {
    const storeReference = setupApiStore(videosApi, {
      [videosApi.reducerPath]: videosApi.reducer,
    });
    fetchMock.mockResponse(JSON.stringify({}));

    return storeReference.store
      .dispatch<any>(videosApi.endpoints.fetchUserInfo.initiate(''))
      .then(() => {
        const { method, headers, url } = fetchMock.mock.calls[0][0] as Request;

        expect(fetchMock).toBeCalledTimes(1);
        expect(method).toBe('GET');
        expect(url).toBe('https://tiktok33.p.rapidapi.com/user/info/dave.xp');
        expect(headers).toBe('application/json');
      });
  });

  it('successful response fetchUserInfo', () => {
    const storeReference = setupApiStore(videosApi, {
      [videosApi.reducerPath]: videosApi.reducer,
    });
    fetchMock.mockResponse(JSON.stringify(['user']));

    return storeReference.store
      .dispatch<any>(videosApi.endpoints.fetchUserInfo.initiate(''))
      .then((action: any) => {
        const { status, data, isSuccess } = action;
        expect(status).toBe('fulfilled');
        expect(isSuccess).toBe(true);
        expect(data).toStrictEqual(['user']);
      });
  });

  it('unsuccessful response fetchUserInfo', () => {
    const storeReference = setupApiStore(videosApi, {
      [videosApi.reducerPath]: videosApi.reducer,
    });
    fetchMock.mockReject(new Error('Internal Server Error'));

    return storeReference.store
      .dispatch<any>(videosApi.endpoints.fetchUserInfo.initiate(''))
      .then((action: any) => {
        const {
          status,
          error: { error },
          isError,
        } = action;
        expect(status).toBe('rejected');
        expect(isError).toBe(true);
        expect(error).toBe('Error: Internal Server Error');
      });
  });
});
