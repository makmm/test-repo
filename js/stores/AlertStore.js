import Store from '../core/Store'

class AlertStore extends Store {
  constructor () {
    super({
      toggled: false,
      alert: ''
    })
  }
}

export default (new AlertStore)
