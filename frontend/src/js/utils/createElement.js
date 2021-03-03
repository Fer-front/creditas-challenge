export default function createElement (tagName, props) {
  const element = document.createElement('option')
  const atributes = Object.entries(props)

  atributes.forEach(([key, value]) => (element.setAttribute(key, value)))

  return element
}
