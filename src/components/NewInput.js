import React from 'react'
import { types as t } from 'mobx-state-tree'
import { observer } from 'mobx-react'

export const NewForm = observer(function NewForm(props) {
  const { state } = props
  console.log(state.digit)

  return (
    <>
      value : {state.inputValue}
      <form>
        <input
          name="name"
          value={state.digit}
          onChange={e => state.setInputValue(e.target.value)}
        />
        <button type="submit">send</button>
      </form>
    </>
  )
})
