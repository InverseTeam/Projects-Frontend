import { IAuth, IToken } from '@/shared/interfaces/Auth.interface';
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const loginApi = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://inverse-projects.store/api'}),
  endpoints: (builder) => ({
    getUsers: builder.query({
      query: () => ({
        url: '/users/auth/users/me/',
        method: 'GET',
        headers: {
          Authorization: 'Token f8add927010cbde1e7220ccc37946a9f4aec2299',
        },
      }),
    }),
    login: builder.mutation<IToken, IAuth>({
        query: (userData) => ({
            url: `/users/auth/token/login/`,
            method: 'POST',
            body: userData
        }),
    }),
  }),
});

export const { useGetUsersQuery, useLoginMutation } = loginApi;
