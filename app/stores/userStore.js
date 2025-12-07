import { defineStore } from 'pinia'

export const useUserStore = defineStore('user', {
  state: () => ({
    username: null,
    plan: null
  }),

  actions: {
    setUsername(name) {
      this.username = name
      if (process.client) {
        localStorage.setItem('username', name)
      }
    },

    clearUsername() {
      this.username = null
      if (process.client) {
        localStorage.removeItem('username')
      }
    },

    // Load username from localStorage when app starts
    init() {
      if (process.client) {
        this.username = localStorage.getItem('username')
      }
    }
  }
})