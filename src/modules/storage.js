const localStorageIsAvailable = () => {
  const x = 'x'

  try {
    window.localStorage.setItem(x, x)
    window.localStorage.removeItem(x)

    return true
  } catch(e) {
    return false
  }
}


export function get(prop) {
  if (!localStorageIsAvailable) throw 'localStorage is not available'


  const stringifiedVal = window.localStorage.getItem(prop)
  return JSON.parse(stringifiedVal)
}


export function post(prop, val) {
  if (!localStorageIsAvailable) throw 'localStorage is not available'

  const stringifiedVal = JSON.stringify(val)
  window.localStorage.setItem(prop, stringifiedVal)
}


export function update(prop, val) {
  if (!localStorageIsAvailable) throw 'localStorage is not available'

  post(prop, val)

  return get(prop)
}
