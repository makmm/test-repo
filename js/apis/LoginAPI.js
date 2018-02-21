import API from './API'

import config from '../config'

const apiHost = config.apiHost

export default Object.assign({}, API, {
  PATHS: {
    session: '/login/session'
  },

  generateResponse (success, loggedIn, error, otherProps) {
    return Object.assign({
      success,
      loggedIn,
      error
    }, otherProps)
  },

  catchError: API.catchError,

  getSession (jwtToken) {
    const req = fetch(
      apiHost + this.PATHS.session,
      {
        method: 'GET',
        headers: {
          'Authorization': jwtToken
        }
      }
    )
      .then(res => res.json())
      .then(json => {
        if (json) {
          return this.generateResponse(true, json.success)
        }
      })
      .catch(e => this.catchError(e))

    return req
  },

  createSession (userCreds) {
    const req = fetch(
      apiHost + this.PATHS.session,
      {
        method: 'POST',
        body: JSON.stringify(userCreds),
        headers: {
          'Content-Type': 'application/json'
        }
      }
    )
      .then(res => res.json())
      .then(json => {
        if (json.success) {
          return this.generateResponse(true, true, null, {
            token: json.token
          })
        } else {
          return this.generateResponse(true, false, json.error)
        }
      })
      .catch(e => this.catchError(e))

    return req
  }
})
