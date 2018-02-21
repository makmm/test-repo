import {div} from '../../core/elements'
import Title from '../Title'
import RouterLink from '../../core/router/RouterLink'

const NotFoundView = () =>
  div(
    Title('I can\'t seem to be able to find that.'),
    RouterLink('/', 'Go back home.')

  )
export default NotFoundView
