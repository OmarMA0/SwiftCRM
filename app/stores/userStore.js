import { defineStore } from 'pinia'

export const useUserStore = defineStore('user', {
  state: () => ({
    username: null,
    plan: null
  }),

  actions: {
    setUsername(name) {
      this.username = name
    },

    clearUsername() {
      this.username = null
    },
    setPlan(plan) {
      this.plan = plan
    },
    
    clearPlan() {
      this.plan = null
    }
  }
})