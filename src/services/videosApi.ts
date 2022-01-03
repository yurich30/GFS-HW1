import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/dist/query/react';
import { IVideos } from '../models/IVideos';

const headersApi = {
  'x-rapidapi-host': 'tiktok33.p.rapidapi.com',
  'x-rapidapi-key':
    '294f036434msh90cf68bd9dd8898p152614jsn805ac4221ef0',
};

export const videosApi = createApi({
  reducerPath: 'videosApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://tiktok33.p.rapidapi.com' }),
  endpoints: (build) => ({
    fetchAllVideos: build.query<IVideos[], string>({
      query: () => ({
        method: 'GET',
        url: '/trending/feed',
        headers: headersApi,
      }),
    }),
    fetchUserInfo: build.query({
      query: () => ({
        method: 'GET',
        url: '/user/info/dave.xp',
        headers: headersApi,
      }),
    }),
  }),
});
