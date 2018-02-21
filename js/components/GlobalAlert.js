import {div, p} from '../core/elements'
import Component from '../core/Component'

import alertStore from '../stores/AlertStore'

function GlobalAlert () {
  return Component({
    stores: [alertStore],
    render (state) {
      return state.toggled ?
        div(
          {class: 'global-alert'},
          p(state.alert)
        ) :
        div()
    }
  })
}

export default GlobalAlert
