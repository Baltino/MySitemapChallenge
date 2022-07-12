import React, { useState, useEffect } from 'react'
import { View, Text, ScrollView, ActivityIndicator } from 'react-native'
import { useTranslation } from 'react-i18next'
import { useTheme } from '@/Hooks'
import { TextInput, TouchableOpacity } from 'react-native-gesture-handler'
import { useDispatch } from 'react-redux'
import { setCurrentSong } from '@/Store/Songs'
import { useLazyFetchLyricsQuery } from '@/Services/modules/songs'
import { navigate } from '@/Navigators/utils'

const HomeContainer = () => {
  const { t } = useTranslation()
  const dispatch = useDispatch()
  const { Common, Fonts, Gutters, Layout } = useTheme()

  const [fetchLyrics, { data, isSuccess, isLoading, isFetching, error }] =
    useLazyFetchLyricsQuery()

  const [artist, setArtist] = useState('')
  const [song, setSong] = useState('')

  const canGetLyrics = artist && song && !isLoading

  const handleGetLyrics = async () => {
    await fetchLyrics({ artist, song })
    //dispatch(setCurrentSong())
  }

  useEffect(() => {
    if (data && data.lyrics) {
      dispatch(setCurrentSong({ artist, title: song, lyrics: data.lyrics }))
      navigate('SongViewer')
    }
  }, [data])

  return (
    <ScrollView
      style={Layout.fill}
      contentContainerStyle={[
        // Layout.fill,
        Layout.colCenter,
        Gutters.smallHPadding,
      ]}
    >
      <View>
        <Text style={Fonts.titleLarge}>{t('home.title')}</Text>
        <View
          style={[Layout.column, Gutters.smallHPadding, Gutters.largeVMargin]}
        >
          <Text style={[Fonts.textCenter, Fonts.textSmall]}>
            {t('home.labels.artist')}
          </Text>
          <TextInput
            placeholder={t('home.placeholders.artist')}
            onChangeText={setArtist}
            keyboardType={'default'}
            maxLength={100}
            value={artist}
            selectTextOnFocus
            style={[Common.textInput]}
          />
          <Text style={[Fonts.textCenter, Fonts.textSmall]}>
            {t('home.labels.song')}
          </Text>
          <TextInput
            placeholder={t('home.placeholders.song')}
            onChangeText={setSong}
            keyboardType={'default'}
            maxLength={200}
            value={song}
            selectTextOnFocus
            style={[Common.textInput]}
          />
          <TouchableOpacity
            style={[
              Layout.rowVCenter,
              Common.button.rounded,
              Gutters.regularBMargin,
              !canGetLyrics ? { backgroundColor: '#fafafa' } : {},
            ]}
            onPress={handleGetLyrics}
            disabled={!canGetLyrics}
          >
            {isLoading && (
              <ActivityIndicator size="large" />
            )}
            <Text style={Fonts.textRegular}>Get lyrics</Text>
          </TouchableOpacity>
          {error && (
            <View style={[]}>
              <Text style={{ color: 'red' }}>{t('home.error', { error: error.data?.error })}</Text>
            </View>
          )}
        </View>
      </View>
    </ScrollView>
  )
}

export default HomeContainer
