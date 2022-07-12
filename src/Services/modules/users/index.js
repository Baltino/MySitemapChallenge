import { api } from '@/Services/api'

export const usersApi = api.injectEndpoints({
  endpoints: build => ({
    fetchOne: build.query({
      query: id => `/users/${id}`,
    }),
  }),
  overrideExisting: false,
})

export const { useLazyFetchOneQuery } = usersApi
