import React from 'react'
import { types as t } from 'mobx-state-tree'
import { observer, inject } from 'mobx-react'

export const DisplayCounter = inject('state')(
  observer(function display({ state }) {
    console.log(state.counter)

    return (
      <>
        <h1>{state.counter}</h1>
      </>
    )
  })
)
