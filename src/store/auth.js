import { defineStore } from 'pinia'

export const useAuth = defineStore('auth-store', {
  state: () => ({
    user: (() => {
      const user = localStorage.getItem('user')
      if (user) return JSON.parse(user)
      return null
    })()
  }),
  actions: {
    logout() {
      this.user = null
    },
    login(user) {
      this.user = user
    },
    isLoggedIn() {
      if (this.user) return true
      return false
    }
  }
})
