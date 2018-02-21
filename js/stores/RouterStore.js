import Store from '../core/Store'

class RouterStore extends Store {
  constructor () {
    super()

    this.updateState({
      currentRoute: '/',
      routes: []
    })
  }

  getRoutes () {
    return this.getState().routes
  }

  findRouteByName (routeName) {
    const routes = this.getState().routes

    return routes.find(route => route.name === routeName)
  }
}

export default (new RouterStore)
