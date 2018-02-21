import Store from '../core/Store'

class GroupStore extends Store {
  constructor () {
    super({
      groups: []
    })
  }

  addOrUpdateGroup (group) {
    let groups = this.getState().groups

    // Remove group if already exists
    groups = groups.filter(obj => obj._id !== group._id)

    groups.push(group)

    this.updateState({groups})

    return group
  }

  findByJoinName (joinName) {
    let groups = this.getState().groups

    return groups.find(group => group.joinName === joinName)
  }
}

export default (new GroupStore)
