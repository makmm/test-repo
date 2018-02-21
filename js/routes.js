import IndexView from '@/components/views/IndexView'
import NotFoundView from '@/components/views/NotFoundView'
import LoginView from '@/components/views/LoginView'
import GroupsView from '@/components/views/GroupsView'
import JoinGroupView from '@/components/views/JoinGroupView'
import GroupView from '@/components/views/GroupView'

export default [
  {
    exp: '/',
    element: IndexView()
  },
  {
    exp: '404',
    element: NotFoundView()
  },
  {
    exp: '/login',
    element: LoginView()
  },
  {
    exp: '/groups',
    element: GroupsView()
  },
  {
    exp: '/joingroup',
    element: JoinGroupView()
  },
  {
    exp: /^\/group\/([0-9A-Za-z]+)$/, // fucking kill me
    element: GroupView()
  }
]
