import React, { useState, useEffect } from 'react'
import { View, Text, ScrollView } from 'react-native'
import { useTranslation } from 'react-i18next'
import { useTheme } from '@/Hooks'
import { Brand } from '@/Components'
import { TextInput } from 'react-native-gesture-handler'

const HomeContainer = () => {
  const { t } = useTranslation()
  const { Common, Fonts, Gutters, Layout } = useTheme()

  const [artist, setArtist] = useState('')
  const [song, setSong] = useState('');

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
          style={[
            Layout.column,
            Gutters.smallHPadding,
            Gutters.largeVMargin,
          ]}
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
        </View>
      </View>
    </ScrollView>
  )
}

export default HomeContainer
