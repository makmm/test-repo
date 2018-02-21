import {div} from '@/core/elements'

export default function Component (settings) {
  settings = settings || {}

  const stores = settings.stores || []

  const render = settings.render || (state => div())

  let el
  let state = {}
  let listeners = {}

  const update = (prevEl, newData) => {
    const nextEl = render(newData)

    if (nextEl.isEqualNode(prevEl)) {
      console.warn('render() was called but there was no change in the rendered output', prevEl)
    } else {
      prevEl.parentElement.replaceChild(nextEl, prevEl)
    }

    return nextEl
  }

  if (stores) {
    for (const store of stores) {
      Object.assign(state, store.getState())

      listeners[store] =
        store.addListener(newState => {
          Object.assign(state, newState)

          el = update(el, state)
        })
    }
  }

  el = render(state)

  return el
}
