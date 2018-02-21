import Store from '../core/Store'

class LoginStore extends Store {
  constructor () {
    super()

    this.updateState({
      loggedIn: false
    })
  }

  isLoggedIn () {
    return this.getState().loggedIn
  }
}

export default (new LoginStore)
