import React from 'react'
import state from '../state/index.js'
import { observer } from 'mobx-react'

const random = Math.random() * 8
const arrBlocks = new Array(10).fill(random)

export const List = observer(function List({ state }) {
  return (
    <div>
      {state.list.map((d, i) => (
        <li key={i}>{d}</li>
      ))}
    </div>
  )
})
