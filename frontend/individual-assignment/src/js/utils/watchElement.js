export default function watchPropsOn (el, callbackGet, callbackSet) {
  return new Proxy(el, {
    get (target, propKey, receiver) {
      callbackGet()
      return el[propKey]
    },
    set (target, propKey, value, receiver) {
      target[propKey] = value
      callbackSet()
    }
  })
}

// let elProxy = watchPropsOn(input)
// elProxy.value = 'hi there';
