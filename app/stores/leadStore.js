import { defineStore } from 'pinia'

export const useLeadStore = defineStore('lead', {
  state: () => ({
    leads : [],
  }),
  actions: {
    setLeads(LeadArray) {
      this.leads = LeadArray
      
    },
    clearLeads(){
        this.leads = []
    },
    
    async fetchLeads(employer) {
      if (!employer) return

      this.loading = true
      this.error = null

      try {
        const data = await $fetch(
          `http://localhost:5000/api/leads/get-leads/${employer}`
        )

        this.leads = data.leads || []
      } catch (err) {
        this.error = err
      } finally {
        this.loading = false
      }
  } 
},
getters : {
  leadsByStatus : (state)=>{
  return(status)=> state.leads.filter(lead =>lead.status === status)
  }
}
})