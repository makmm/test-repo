import {div, p} from '../../core/elements'
import Component from '../../core/Component'
import Title from '../Title'

import groupStore from '../../stores/GroupStore'

import groupService from '../../services/GroupService'

import router from '../../core/router/Router'

console.log(groupStore.getState())

const GroupShower = () =>
  Component({
    stores: [router, groupStore],
    render (state) {
      const joinName = router.getSpecialData()

      const group = state.groups.find(group => group.joinName === joinName)

      return p(JSON.stringify(group))
    }
  })

const GroupView = () => {
  const render = () => {
    return div(
      Title('Group'),
      GroupShower()
    )
  }

  return render()
}

export default GroupView
