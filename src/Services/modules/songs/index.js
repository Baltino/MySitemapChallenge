import { api } from '@/Services/api'

export const songsApi = api.injectEndpoints({
  endpoints: build => ({
    fetchLyrics: build.query({
      query: ({ artist, song }) => `${artist}/${song}`,
    }),
  }),
  overrideExisting: false,
})

export const { useLazyFetchLyricsQuery } = songsApi
