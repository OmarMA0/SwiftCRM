<template>
  <div class="homepage-background-with-gradient min-h-screen w-full p-4 md:p-6">
    <div class="max-w-7xl mx-auto flex flex-col gap-6">
      <div 
        v-for="section in leadSections" 
        :key="section.label"
        class="group flex flex-col gap-2"
      >
      <!--Each section header and size-->
        <div class="flex items-center gap-2 px-2">
          <div class="w-1 h-4 bg-[#22181c] rounded-full"></div>
          <h3 class="font-semibold text-[#22181c] uppercase tracking-wider text-xs">
            {{ section.label }} ({{ section.data.length }})
          </h3>
        </div>

        <div class="flex flex-row items-center overflow-x-auto pb-3 gap-4">
          <div class="shrink-0">
             <RowHead class="h-full flex items-center justify-center">{{ section.label }}</RowHead>
          </div>
          <!--The Card Animation when hovering-->
          <div 
            v-for="lead in section.data" 
            :key="lead._id" 
            class="transition-transform duration-200 hover:-translate-y-1"
            @click="detailsPage(lead)"
          >
            <LeadCard :lead="lead" />
          </div>

          <div v-if="section.data.length === 0" class="text-sm italic opacity-40 px-4">
            No leads in this stage
          </div>
        </div>

        <hr class="border-[#22181c]/10 mt-2" />
      </div>

    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import { navigateTo } from '#app'
const leads = useLeadStore() 
const user = useUserStore()

await user.init()

// Reactive data mapping
const leadSections = computed(() => [
  { label: 'New Leads', data: leads.leadsByStatus("new lead") },
  { label: 'Not Answering', data: leads.leadsByStatus("not answering") },
  { label: 'Negotiating', data: leads.leadsByStatus('negotiating') },
  { label: 'Deal in Pipeline', data: leads.leadsByStatus('deal in pipeline') },
  { label: 'Warm Leads', data: leads.leadsByStatus('warm') },
  { label: 'Hot Leads', data: leads.leadsByStatus('hot') },
  { label: 'Cold Leads', data: leads.leadsByStatus('cold') },
  { label: 'Deals', data: leads.leadsByStatus('deal') },
])
function detailsPage(lead){
  leads.clearLeadDetails()
  leads.setLeadDetails(lead)
  navigateTo(`leads/${lead._id}`)
}
watch(
  () => user.employer,
  (employer) => {
    if (employer) {
      leads.fetchLeads(employer)
    }
  },
  { immediate: true }
) 
</script>
