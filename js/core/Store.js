import {objectEquals} from '@/core/utils.js'

export default class Store {
  constructor (initialState) {
    this.state = {}
    this.listeners = []

    if (initialState) {
      this.updateState(initialState)
    }
  }

  getState () {
    return Object.assign({}, this.state)
  }

  updateState (state) {
    const newState = Object.assign({}, this.getState(), state)

    if (objectEquals(newState, this.state)) {
      return
    }

    for (const listener of this.listeners) {
      if (listener) {
        listener(newState)
      }
    }

    return this.state = newState
  }

  addListener (listener) {
    return this.listeners.push(listener) - 1
  }

  removeListener (index) {
    this.listeners[index] = undefined
  }
}
