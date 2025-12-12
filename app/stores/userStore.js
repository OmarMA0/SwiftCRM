import { defineStore } from 'pinia'

export const useUserStore = defineStore('user', {
  state: () => ({
    username: null,
    plan: null,
    avatar : null
  }),
  actions: {
    setUsername(name) {
      this.username = name
      
      if (process.client) {
        localStorage.setItem('username', name)
      }
    },
    setAvatar(file) {
      this.avatar = file
      
      if (process.client) {
        localStorage.setItem('avatar', file)
      }
    },

    clearUsername() {
      this.username = null
      
      if (process.client) {
        localStorage.removeItem('username')
      }
    },
    clearAvatar() {
      this.avatar = null
      
      if (process.client) {
        localStorage.removeItem('avatar')
      }
    },

    // Load username from localStorage when app starts
    init() {
      if (process.client) {
        this.username = localStorage.getItem('username')
        this.avatar = localStorage.getItem('avatar')
      }
    }
  }
})