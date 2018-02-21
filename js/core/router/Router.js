import Store from '@/core/Store'

import alertStore from '@/stores/AlertStore'

class Router extends Store {
  constructor () {
    console.log('routes', require('@/routes'))

    super({
      currentRouteName: window.location.hash.substr(1),
      specialData: undefined,
      routes: require('@/routes')
    })

    window.onhashchange = this.onHashChange.bind(this)
    this.onHashChange()
  }

  onHashChange (event) {
    if (window.location.hash.length > 1) {
      const currentPath = this.getCurrentPath()

      this.setRoute(currentPath)
    } else { // Invalid link, go to index
      this.setRoute('/')
    }
  }

  setPath (path) {
    this.updateState({
      currentPath: path
    })

    return window.location.hash = `#${path}`
  }

  setRoute (path) {
    const route = this.findRoute(path)

    if (route && route.protected && !loginStore.isLoggedIn()) {
      // not logged in and on protected route; redirect to login
      alertStore.updateState({
        toggled: true,
        message: 'You must be logged in to do that'
      })

      this.setRoute('/login')
    } else {
      this.updateState({currentRoute: route})

      this.setPath(path)
    }
  }

  getCurrentPath () {
    return window.location.hash.substr(1)
  }

  getCurrentRoute () {
    return this.getState().currentRoute
  }

  getCurrentRouteElement () {
    let route = this.findRoute(this.getCurrentPath())

    if (!route) {
      route = this.findRoute('404')
    }

    return route.element
  }

  getRoutes () {
    return this.getState().routes
  }

  getSpecialData () {
    const exp = this.getCurrentRoute().exp

    if (!exp instanceof RegExp) return false

    return this.getCurrentPath().match(this.getCurrentRoute().exp)[1]
  }

  findRoute (path) {
    const routes = this.getRoutes()

    return routes.find(route =>
      route.exp instanceof RegExp ?
        route.exp.test(path) :
        route.exp === path
    )
  }
}

export default router = new Router()
