import Store from '../core/Store'

class NavStore extends Store {
  constructor () {
    super()

    this.updateState({
      toggled: false
    })
  }
}

export default (new NavStore)
