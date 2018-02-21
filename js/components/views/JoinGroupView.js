import {div, form} from '../../core/elements'
import Title from '../Title'
import Input from '../Input'
import Button from '../Button'
import RouterLink from '../../core/router/RouterLink'

import alertStore from '../../stores/AlertStore'
import groupService from '../../services/GroupService'

import router from '../../core/router/Router'

const JoinGroupView = () => {
  const joinGroup = async event => {
    event.preventDefault()

    const form = event.target

    const joinName = form.elements.joinName.value

    try {
      await groupService.joinGroup(joinName)

      router.setRoute('/')
    } catch (error) {
      alertStore.updateState({toggled: true, alert: error.message})
    }

    return false
  }

  const render = () => div(
    Title('Join Group'),
    form({
        class: 'join-group-form',
        onsubmit: joinGroup
      },
      Input('Join Name', {
        type: 'text',
        name: 'joinName'
      }),
      Button('Join group', {
        type: 'submit'
      })
    )
  )

  return render()
}

export default JoinGroupView
