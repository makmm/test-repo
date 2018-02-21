import API from './API'

import config from '../config'

const apiHost = config.apiHost

export default Object.assign({}, API, {
  PATHS: {
    profile: '/login/profile'
  },

  generateResponse (success, profile, error, otherProps) {
    return Object.assign({
      success,
      profile,
      error
    }, otherProps)
  },

  catchError: API.catchError,

  getProfile (jwtToken) {
    const req = fetch(
      apiHost + this.PATHS.profile,
      {
        method: 'GET',
        headers: {
          'Authorization': jwtToken
        }
      }
    )
      .then(res => res.json())
      .then(json => {
        if (json.success) {
          return this.generateResponse(true, json.profile)
        } else {
          return this.generateResponse(true, null, json.error)
        }
      })
      .catch(e => this.catchError(e))

    return req
  }
})
