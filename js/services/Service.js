export default class Service {
  constructor (store) {
    this.networkError = {
      message: 'Network connection error. Please try again later or check your connection.',
      errors: {
        networkConnection: true
      }
    }

    this.notLoggedInError = {
      message: 'You\'re not logged in.',
      errors: {
        notLoggedIn: true
      }
    }

    this.store = store
  }
}
