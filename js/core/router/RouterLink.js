import {a} from '../elements'

export default function RouterLink (link, text, otherProps) {
  return a(Object.assign({
    href: `#${link}`,
  }, otherProps), text)
}
