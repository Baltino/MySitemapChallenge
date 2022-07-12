import { api } from '@/Services/api'

export const authApi = api.injectEndpoints({
  endpoints: build => ({
    login: build.mutation({
      query: ({ user, password }) => ({
        url: '/users',
        method: 'POST',
        body: { user, password },
      }),
    }),
  }),
  overrideExisting: false,
})

export const { useLazyLoginQuery } = authApi
