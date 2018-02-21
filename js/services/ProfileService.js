import Service from './Service'

import loginService from './LoginService'

import profileStore from '../stores/ProfileStore'

import ProfileAPI from '../apis/ProfileAPI'

class ProfileService extends Service {
  constructor () {
    super(profileStore)
  }

  getToken () {
    return loginService.getToken()
  }

  async getProfile () {
    const res = await ProfileAPI.getProfile(this.getToken())

    if (res.success) {
      if (res.profile) {
        this.store.updateState({
          profile: res.profile
        })

        return res.profile
      } else if (res.error.notLoggedIn) {
        throw this.notLoggedInError
      }
    } else {
      throw this.networkError
    }
  }
}

export default (new ProfileService)
