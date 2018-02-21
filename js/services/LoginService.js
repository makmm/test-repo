import Service from './Service'

import profileService from '../services/ProfileService'

import loginStore from '../stores/LoginStore'
import profileStore from '../stores/ProfileStore'

import LoginAPI from '../apis/LoginAPI'

class LoginService extends Service {
  constructor () {
    super(loginStore)
  }

  getToken () {
    return localStorage.getItem('jwtToken')
  }

  async isLoggedIn () {
    const res = await LoginAPI.getSession(this.getToken())

    if (res.success) {
      if (res.loggedIn) {
        try {
          await profileService.getProfile()
        } catch (error) {
          throw error
        }
      }

      this.store.updateState({
        loggedIn: res.loggedIn
      })

      return res.loggedIn
    } else {
      throw this.networkError
    }
  }

  async logIn (userCreds) {
    const res = await LoginAPI.createSession(userCreds)

    if (res.success) {
      if (res.loggedIn) {
        localStorage.setItem('jwtToken', res.token)

        try {
          await profileService.getProfile()
        } catch (error) {
          throw error
        }

        this.store.updateState({
          loggedIn: res.loggedIn
        })

        return true
      } else {
        throw res.error
      }
    } else {
      throw this.networkError
    }
  }
}

export default (new LoginService)
