// Inspired/copypasted from https://hackernoon.com/how-i-converted-my-react-app-to-vanillajs-and-whether-or-not-it-was-a-terrible-idea-4b14b1b2faff

const attributeExceptions = [
  'role'
]

function appendText (el, text) {
  const textNode = document.createTextNode(text)
  el.appendChild(textNode)
}

function appendArray (el, children) {
  children.forEach((child) => {
    append(el, child)
  })
}

function append (el, child) {
  if (child instanceof window.Element) {
    el.appendChild(child)
  } else if (Array.isArray(child)) {
    appendArray(el, child)
  } else if (typeof child === 'string') {
    appendText(el, child)
  } else {
    return false // can't append
  }
  return child
}

function setStyles(el, styles) {
  if (!styles) {
    el.removeAttribute('styles')
    return
  }

  Object.keys(styles).forEach((styleName) => {
    if (styleName in el.style) {
      el.style[styleName] = styles[styleName]
    } else {
      console.warn(`${styleName} is not a valid style for a <${el.tagName.toLowerCase()}>`)
    }
  })
}

function makeElement (type, propsOrChild, ...otherChildren) {
  const el = document.createElement(type)

  const appendedChild = append(el, propsOrChild)

  if (!appendedChild && typeof propsOrChild === 'object') {
    Object.keys(propsOrChild).forEach((propName) => {
      const value = propsOrChild[propName]

      if (propName in el || attributeExceptions.includes(propName)) {
        if (propName === 'style') {
          setStyles(el, value)
        } else if (value) {
          el[propName] = value
        }
      } else if (propName === 'class') {
        el.classList += `${value} `
      } else {
        console.warn(`${propName} is not a valid property of a <${type}>`)
      }
    })
  }

  if (otherChildren) append(el, otherChildren)

  return el
}

const a = (...args) => makeElement('a', ...args)
const button = (...args) => makeElement('button', ...args)
const input = (...args) => makeElement('input', ...args)
const div = (...args) => makeElement('div', ...args)
const h1 = (...args) => makeElement('h1', ...args)
const h3 = (...args) => makeElement('h3', ...args)
const p = (...args) => makeElement('p', ...args)
const small = (...args) => makeElement('small', ...args)
const label = (...args) => makeElement('label', ...args)
const nav = (...args) => makeElement('nav', ...args)
const form = (...args) => makeElement('form', ...args)

// TODO:; MPROBLEMA::: javascript aparentemente si exportas un objeto no lo
// podes importar estilo 'import {lpm} from lpm' asi que me quiero tirar x
// la ventana xq juan no me ama

export {appendText, appendArray, append, makeElement,
        a, button, input, div, h1, h3, p, small, label, nav, form}

// export default Object.assign({
//   appendText, appendArray, append, makeElement
// }, elementFunctions)
