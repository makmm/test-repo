import Component from '../Component'

import router from './Router'

export default function RouterView () {
  return Component({
    stores: [router],
    render (state) {
      return router.getCurrentRouteElement()
    }
  })
}
