import Service from './Service'

import loginService from './LoginService'

import groupStore from '../stores/GroupStore'

import GroupAPI from '../apis/GroupAPI'

class GroupService extends Service {
  constructor () {
    super(groupStore)
  }

  getToken () {
    return loginService.getToken()
  }

  async createGroup (group) {
    const res = await GroupAPI.createGroup(this.getToken(), group)

    if (res.success) {
      if (res.actionSuccess) {
        this.store.addOrUpdateGroup(res.group)

        return res.group
      } else {
        throw res.error
      }
    } else {
      throw this.networkError
    }
  }

  async joinGroup (joinName) {
    const res = await GroupAPI.joinGroup(this.getToken(), joinName)

    if (res.success) {
      if (res.actionSuccess) {
        this.store.addOrUpdateGroup(res.group)

        return res.group
      } else {
        throw res.error
      }
    } else {
      throw this.networkError
    }
  }
}

export default (new GroupService)
