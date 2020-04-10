import React from 'react'
import { types as t } from 'mobx-state-tree'
import { observer } from 'mobx-react'
import { Provider } from 'mobx-react'
import { FormProject, Input } from './InputField'
import { State } from '../state/index.js'
import { Slider } from './SliderUi'
import { DisplayCounter } from './DisplayCounter'

export const App = observer(function App() {
  const state = State.create({})

  window.STATE = state

  return (
    <Provider state={state}>
      <div>
        <Slider min={0} max={800} handleDimension={40} fullWidthSlider={300} />
      </div>
    </Provider>
  )
})
