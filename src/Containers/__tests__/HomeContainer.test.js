import React from 'react'
import HomeContainer from '../HomeContainer'

import { Provider } from 'react-redux'
import { store } from '@/Store'
import renderer from 'react-test-renderer'
import '@/Translations'

describe('Song Component', () => {
  it('Should render the welcome message', () => {
    const roomRendered = renderer.create(
      <Provider store={store}>
        <HomeContainer />
      </Provider>,
    )
    expect(
      roomRendered.root.findByProps({ id: 'artistlabel' }).props.children,
    ).toEqual('Write the artist')
  })
})
