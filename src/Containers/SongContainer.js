import React, { useState, useEffect } from 'react'
import { ScrollView, View, Text, Image } from 'react-native'
import { useSelector } from 'react-redux'
import { useTheme } from '@/Hooks'

const RoomContainer = () => {
  const { Common, Fonts, Gutters, Layout, ImageSize } = useTheme()

  const song = useSelector(state => state.songs.currentSong)

  return (
    <ScrollView
      style={Layout.fill}
      contentContainerStyle={[
        // Layout.fill,
        Layout.colCenter,
        Gutters.smallHPadding,
      ]}
    >
      <View
        style={[
          [Layout.column, Gutters.smallHPadding, Gutters.largeBMargin],
        ]}
      >
        <Text style={Fonts.titleRegular}>{song.artist}</Text>
        <Text style={Fonts.titleSmall}>{song.title}</Text>
      </View>
      <View
        style={[Layout.column, Layout.alignItemsCenter, Gutters.regularBMargin]}
      >
        <Image
          source={{
            uri: 'https://thumbs.dreamstime.com/b/vintage-black-vinyl-record-lies-cover-music-album-old-vintage-black-vinyl-record-lies-cover-music-171869903.jpg',
          }}
          style={{ width: ImageSize.large, height: ImageSize.large }}
        />
        <Text id="welcome" style={Fonts.textRegular}>
          {song.lyrics}
        </Text>
      </View>
    </ScrollView>
  )
}

export default RoomContainer
