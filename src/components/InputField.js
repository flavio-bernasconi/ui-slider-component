import React from 'react'
import { types as t } from 'mobx-state-tree'
import { observer, inject } from 'mobx-react'

export const Input = inject('state')(
  observer(function Input({ state }) {
    return (
      <input
        style={{ marginLeft: 300 }}
        type="number"
        value={state.counter}
        onInput={e => state.setCounter(Number(e.target.value))}
      />
    )
  })
)
