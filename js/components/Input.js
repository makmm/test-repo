import {div, label, input} from '../core/elements'

const Input = (labelString, props) =>
  div(
    {class: 'input-container'},
    label(labelString),
    input(Object.assign({type: 'text'}, props))
  )

export default Input
