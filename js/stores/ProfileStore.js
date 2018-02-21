import Store from '../core/Store'

class ProfileStore extends Store {
  constructor () {
    super()

    this.updateState({
      profile: {}
    })
  }
}

export default (new ProfileStore)
