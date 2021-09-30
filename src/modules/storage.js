export default {
  get: function(prop) {
    if (!localStorageIsAvailable) throw 'localStorage is not available'

    const stringifiedVal = window.localStorage.getItem(prop)
    return JSON.parse(stringifiedVal)
  },

  post: function(prop, val) {
    if (!localStorageIsAvailable) throw 'localStorage is not available'

    const stringifiedVal = JSON.stringify(val)
    window.localStorage.setItem(prop, stringifiedVal)
  },

  update: function(prop, val) {
    if (!localStorageIsAvailable) throw 'localStorage is not available'

    this.post(prop, val)

    return this.get(prop)
  }
}


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
