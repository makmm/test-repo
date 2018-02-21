import {div, p} from '../../core/elements'
import Title from '../Title'
import RouterLink from '../../core/router/RouterLink'

const GroupsView = () =>
  div(
    Title('Groups'),
    div(
      RouterLink('/group/join', 'Join group')
    )
  )

export default GroupsView
