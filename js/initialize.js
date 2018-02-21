import 'babel-polyfill'

// TODOS before prod
// TODO: make register stuff
// TODO: make log out button
// TODO: do styles
// TODO: make profile page

// TODOS of stuff to finish right miau
// TODO: make group create form
// TODO: make group join form

import loginService from '@/services/LoginService'
import profileService from '@/services/ProfileService'

import alertService from '@/stores/AlertStore'

import router from '@/core/router/Router'

import App from '@/App'

document.addEventListener('DOMContentLoaded', async () => {
  try {
    await loginService.isLoggedIn()
  } catch (error) {
    if (error.errors.networkError) {
      alertStore.updateState({toggled: true, alert: error.message})
    }
    // Not logged in; don't do anything
  }

  document.body.append(App())
})
