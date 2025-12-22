import { defineStore } from 'pinia'

export const useUserStore = defineStore('user', {
  state: () => ({
    username: null,
    plan: null,
    avatar: null,
    role : null ,
    employer : null
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
    setRole(role) {
      this.role = role
      
      if (process.client) {
        localStorage.setItem('role', role)
      }
    },
    setEmployer(name) {
      this.employer = name
      
      if (process.client) {
        localStorage.setItem('employer', employer)
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
    clearRole() {
      this.employer = null
      
      if (process.client) {
        localStorage.removeItem('employer')
      }
    },
    clearEmployer() {
      this.role = null
      
      if (process.client) {
        localStorage.removeItem('employer')
      }
    },

    // Load username AND avatar from localStorage when app starts
    init() {
      if (process.client) {
        this.username = localStorage.getItem('username')
        this.avatar = localStorage.getItem('avatar')
        this.role = localStorage.getItem('role')
        this.role = localStorage.getItem('employer')
      }
    }
  }
})