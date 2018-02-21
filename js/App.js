import {div} from '@/core/elements'
import NavBar from '@/components/NavBar'
import GlobalAlert from '@/components/GlobalAlert'
import RouterView from '@/core/router/RouterView'

export default function App () {
  return div(
    {id: 'app'},
      NavBar(),
      GlobalAlert(),
      RouterView()
  )
}
