export function localStorageIsAvailable(){
  const x = 'x'

  try {
    localStorage.setItem(x, x)
    localStorage.removeItem(x)

    return true
  } catch(e) {
    return false
  }
}


export function post(prop, val) {
  if (!localStorageIsAvailable) throw 'localStorage is not available'

  const stringifiedVal = JSON.stringify(val)
  window.localStorage.setItem(prop, stringifiedVal)
}


export function get(prop) {
  if (!localStorageIsAvailable) throw 'localStorage is not available'


  const stringifiedVal = window.localStorage.getItem(prop)
  return JSON.parse(stringifiedVal)
}
