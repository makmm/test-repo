import API from './API'

import config from '../config'

const apiHost = config.apiHost

export default Object.assign({}, API, {
  PATHS: {
    group: '/group',
    joinGroup: '/group/join'
  },

  generateResponse (success, actionSuccess, group, error, otherProps) {
    return Object.assign({
      success,
      actionSuccess,
      group,
      error
    }, otherProps)
  },

  catchError: API.catchError,

  createGroup (jwtToken, group) {
    const req = fetch(
      apiHost + this.PATHS.group,
      {
        method: 'POST',
        body: JSON.stringify({group}),
        headers: {
          'Authorization': jwtToken,
          'Content-Type': 'application/json'
        }
      }
    )
      .then(res => res.json())
      .then(json => {
        if (json.success) {
          return this.generateResponse(true, true, json.group)
        } else {
          return this.generateResponse(true, false, null, json.error)
        }
      })
      .catch(e => this.catchError(e))

    return req
  },

  joinGroup (jwtToken, joinName) {
    const req = fetch(
      apiHost + this.PATHS.joinGroup,
      {
        method: 'POST',
        body: JSON.stringify({joinName}),
        headers: {
          'Authorization': jwtToken,
          'Content-Type': 'application/json'
        }
      }
    )
      .then(res => res.json())
      .then(json => {
        if (json.success) {
          return this.generateResponse(true, true, json.group)
        } else {
          return this.generateResponse(true, false, null, json.error)
        }
      })
      .catch(e => this.catchError(e))

    return req
  }

})
