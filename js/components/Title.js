import {h1} from '../core/elements'

const Title = (text, props) =>
  h1(Object.assign({class: 'title'}, props), text)

export default Title
