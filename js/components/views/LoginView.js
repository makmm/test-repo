import {div, form} from '../../core/elements'
import Title from '../Title'
import Button from '../Button'
import Input from '../Input'

import alertStore from '../../stores/AlertStore'

import loginService from '../../services/LoginService'
import profileService from '../../services/ProfileService'

import router from '../../core/router/Router'

console.log(router)

const LoginView = () => {
  const logIn = async event => {
    event.preventDefault()

    const form = event.target

    const [username, password] = [
      form.elements.username.value,
      form.elements.password.value
    ]

    const userCreds = {username, password}

    try {
      await loginService.logIn(userCreds)

      router.setRoute('/')
    } catch (error) {
      alertStore.updateState({toggled: true, alert: error.message})
    }

    return false
  }

  const render = () => {
    return div(
      {class: 'login-container'},
      Title('Log in'),
      form({
          class: 'login-form',
          onsubmit: logIn
        },
        Input('Username', {
          type: 'text',
          name: 'username',
        }),
        Input('Password', {
          type: 'password',
          name: 'password'
        }),
        Button('Log me in!', {
          type: 'submit'
        })
      )
    )
  }

  return render()
}

export default LoginView
