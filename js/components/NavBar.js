import {a, div, nav} from '../core/elements'
import RouterLink from '../core/router/RouterLink'
import Component from '../core/Component'

import navStore from '../stores/NavStore'
import loginStore from '../stores/LoginStore'
import profileStore from '../stores/ProfileStore'

function NavToggler () {
  return a({
    id: 'nav-toggler',
    href: '',
    onclick (event) {
      navStore.updateState({
        toggled: !navStore.getState().toggled
      })
    }
  }, 'toggle nav')
}

const NavLink = (link, text) =>
  RouterLink(link, text, {
    onclick (e) {
      navStore.updateState({toggled: false})
    }
  })

function NavAccountStuff () {
  return Component({
    stores: [loginStore, profileStore],
    render (state) {
      return state.loggedIn ?
        div(
          NavLink('/profile', `Welcome, ${state.profile.username}!`),
          NavLink('/groups', 'Groups')
        ) : div(
          NavLink('/login', 'Log in')
        )
    }
  })
}

function Nav () {
  return Component({
    stores: [navStore],
    render (state) {
      return state.toggled ?
        nav(
          div(
            NavLink('/', 'Home'),
            div(NavAccountStuff())
          )
        ) :
        div()
    }
  })
}

export default function NavBar () {
  return div({class: 'nav-stuff-container'},
    NavToggler(),
    Nav()
  )
}
