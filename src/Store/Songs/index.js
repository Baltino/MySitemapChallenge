import { createSlice } from '@reduxjs/toolkit'

const slice = createSlice({
  name: 'songs',
  initialState: { data: [], currentSong: {} },
  reducers: {
    setCurrentSong: (state, { payload: { artist, title, lyrics } }) => {
      state.currentSong = {
        artist,
        title,
        lyrics,
      }
    },
  },
})

export const { setCurrentSong } = slice.actions

export default slice.reducer
