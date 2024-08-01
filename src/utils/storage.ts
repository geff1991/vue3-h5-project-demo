/**
 * localStorage封装
 */
const loStorage = {
  setItem(key: string, value: any) {
    window.localStorage.setItem(key, JSON.stringify(value))
  },
  getItem(key: string) {
    try {
      const value = window.localStorage.getItem(key)
      if (!value) {
        return null
      }
      return JSON.parse(value)
    } catch (err) {
      return null
    }
  },
  removeItem(key: string) {
    window.localStorage.removeItem(key)
  }
}

/**
 * sessionStorage封装
 */
const seStorage = {
  setItem(key: string, value: any) {
    sessionStorage.setItem(key, JSON.stringify(value))
  },
  getItem(key: string) {
    try {
      const value = sessionStorage.getItem(key)
      if (!value) {
        return null
      }
      return JSON.parse(value)
    } catch (err) {
      return null
    }
  },
  removeItem(key: string) {
    sessionStorage.removeItem(key)
  }
}

export { seStorage, loStorage }
