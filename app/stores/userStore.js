import { defineStore } from 'pinia'

export const useUserStore = defineStore('user', {
  state: () => ({
    username: null,
    plan: null,
    avatar: null,
    role : null
    
  }),
  actions: {
    setUsername(name) {
      this.username = name
      
      if (process.client) {
        localStorage.setItem('username', name)
      }
    },
    setAvatar(url) {
      this.avatar = url
      
      if (process.client) {
        localStorage.setItem('avatar', url)
      }
    },

    clearUsername() {
      this.username = null
      
      if (process.client) {
        localStorage.removeItem('username')
        localStorage.removeItem('avatar')
      }
    },
    clearAvatar() {
      this.avatar = null
      
      if (process.client) {
        localStorage.removeItem('avatar')
      }
    },

    // Load username AND avatar from localStorage when app starts
    init() {
      if (process.client) {
        this.username = localStorage.getItem('username')
        this.avatar = localStorage.getItem('avatar')
      }
    }
  }
})