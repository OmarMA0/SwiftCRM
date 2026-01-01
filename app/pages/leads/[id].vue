<template>
<div class="bg-[#312f2f] min-h-screen w-full pt-16">
    <div class="flex flex-col bg-[#22181c]/60 shadow-xl hover:shadow-[#ef626c]/10 hover:border-[#ef626c]
        backdrop-blur-md p-5 rounded-2xl border border-[#ef626c]/30 w-auto lg:w-7xl mx-auto">
    <!--ID and Neon light-->
    <div class="flex justify-between items-start mb-4 w-full p-2">
      <span class="text-lg uppercase tracking-widest text-white/40 font-mono">
        ID: {{ id }}
      </span>
      <!--The Top Right neon light and effect-->
      <div class="w-2 lg:w-6 h-2 lg:h-6 rounded-full bg-[#ef626c] shadow-[0_0_8px_#ef626c]"></div>
    </div>
    <!--Seller-->
    <div class="flex justify-between p-2 mb-4">
      <p class="text-xl uppercase text-[#ef626c] font-bold tracking-tighter">Seller :</p>
      <h2 class="text-2xl font-bold text-white drop-shadow-sm">
        {{ lead.seller }}
      </h2>
    </div>
    <!--Address-->
    <div class="flex justify-between p-2 mb-4">
      <p class="text-lg md:text-xl uppercase text-[#ef626c] font-bold tracking-tighter">Address :</p>
      <h2 class="text-xl md:text-2xl font-bold text-white drop-shadow-sm">
        {{ lead.address }}
      </h2>
    </div>
    <!--AP-->
    <div class="flex justify-between p-2 mb-4">
      <p class="text-xl uppercase text-[#ef626c] font-bold tracking-tighter">Asking Price :</p>
      <h2 class="text-2xl font-bold text-white drop-shadow-sm">
        {{ numerical_formatter(lead.ap) }}
      </h2>
    </div>
      <!--Market V and Timeline-->
    <div class="grid grid-cols-2 gap-3 pt-4 border-t border-white/5">
      <div class="flex flex-col">
        <p class="text-lg text-white/50 uppercase">Market Value</p>
        <p class="text-2xl font-medium text-white/90">{{ numerical_formatter(lead.mv) }}</p>
      </div>
      <div class="flex flex-col">
        <p class="text-lg text-white/50 uppercase">Timeline</p>
        <p class="text-2xl font-medium text-white/90">{{ lead.closingTimeline }} Months</p>
      </div>
    </div>
    <!--Phone and pushing date-->
    <div class="grid grid-cols-2 gap-3 pt-4 mt-3 border-t border-white/5">
      <div class="flex flex-col">
        <p class="text-lg text-white/50 uppercase">Phone</p>
        <p class="text-2xl font-medium text-white/90">{{ lead.phone }}</p>
      </div>
      <div class="flex flex-col">
        <p class="text-lg text-white/50 uppercase">Date Pushed</p>
        <p class="text-2xl font-medium text-white/90">{{ formatDateAgo(lead.datePushed) }}</p>
      </div>
    </div>
    <!--Condition-->
    <div class="mt-4 p-2.5 bg-black/20 rounded-lg border border-white/5">
       <p class="text-xl text-[#ef626c] uppercase font-bold mb-1">Condition</p>
       <p class="text-lg text-white/80 line-clamp-2 leading-relaxed">
         {{ lead.condition }}
       </p>
    </div>
    <!--Note-->
    <div class="mt-4 p-2.5 bg-black/20 rounded-lg border border-white/5">
       <p class="text-xl text-[#ef626c] uppercase font-bold mb-1">Notes</p>
       <p class="text-lg text-white/80 line-clamp-2 leading-relaxed">
         {{ lead.note }}
       </p>
    </div>
    <!--Reason-->
    <div class="mt-4 p-2.5 bg-black/20 rounded-lg border border-white/5">
       <p class="text-xl text-[#ef626c] uppercase font-bold mb-1">Reason</p>
       <p class="text-lg text-white/80 line-clamp-2 leading-relaxed">
         {{ lead.reason }}
       </p>
    </div>
    <!--Pusher and Status-->
    <div class="grid grid-cols-2 gap-3 pt-4 mt-3 border-t border-white/5">
      <div class="flex flex-col">
        <p class="text-lg text-white/50 uppercase">Pusher</p>
        <p class="text-2xl font-medium text-white/90">{{ lead.pusher }}</p>
      </div>
      <div class="flex flex-col">
        <p class="text-lg text-white/50 uppercase">Status</p>
        <p class="text-2xl font-medium text-white/90">{{ lead.status }}</p>
      </div>
    </div>
    </div>
    
</div>
</template>

<script setup>
const leads = useLeadStore() 
const { id } = useRoute().params
const [lead] = leads.leadByID(id)
function numerical_formatter(N) {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    maximumFractionDigits: 0
  }).format(N)
}
function formatDateAgo(dateString) {
  const date = new Date(dateString)
  const now = new Date()

  const diffMs = now - date
  const diffDays = Math.floor(diffMs / (1000 * 60 * 60 * 24))

  // Format time → 3 PM
  const time = date.toLocaleTimeString("en-US", {
    hour: "numeric",
    minute: "2-digit",
    hour12: true,
  })

  if (diffDays === 0) return `Today at ${time}`
  if (diffDays === 1) return `Yesterday at ${time}`

  return `${diffDays} days ago at ${time}`
}

</script>