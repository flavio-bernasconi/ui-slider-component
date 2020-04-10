import { types as t } from 'mobx-state-tree'

export const State = t
  .model('State', {
    counter: t.optional(t.number, 0),
  })
  .actions(self => ({
    setCounter(value) {
      self.counter = value
      if (value > 800) {
        self.counter = 800
      }
    },
  }))
  .views(self => ({
    get digit() {
      return self.inputValue
    },
  }))
