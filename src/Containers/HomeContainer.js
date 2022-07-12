import React, { useState, useEffect } from 'react'
import { View, Text, ScrollView } from 'react-native'
import { useTranslation } from 'react-i18next'
import { useTheme } from '@/Hooks'
import { Brand } from '@/Components'

const HomeContainer = () => {
  const { t } = useTranslation()
  const { Fonts, Gutters, Layout } = useTheme()

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
        <Brand />
      </View>
    </ScrollView>
  )
}

export default HomeContainer
