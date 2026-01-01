<template>
  <div class="group flex flex-col w-64 bg-[#22181c]/60 backdrop-blur-md p-5 rounded-2xl border border-[#ef626c]/30 
              shadow-xl hover:shadow-[#ef626c]/10 hover:border-[#ef626c] 
              transition-all duration-300 hover:-translate-y-1 cursor-pointer overflow-hidden relative">
    
    <div class="flex justify-between items-start mb-4">
      <span class="text-[10px] uppercase tracking-widest text-white/40 font-mono">
        ID: {{ lead._id.slice(-6) }}
      </span>
      <!--The Top Right neon light and effect-->
      <div class="w-2 h-2 rounded-full bg-[#ef626c] shadow-[0_0_8px_#ef626c]"></div>
    </div>

    <div class="flex flex-col mb-4">
      <p class="text-[10px] uppercase text-[#ef626c] font-bold tracking-tighter">Asking Price</p>
      <h2 class="text-2xl font-bold text-white drop-shadow-sm">
        {{ numerical_formatter(lead.ap) }}
      </h2>
    </div>

    <div class="grid grid-cols-2 gap-3 pt-4 border-t border-white/5">
      <div class="flex flex-col">
        <p class="text-[10px] text-white/50 uppercase">Market Value</p>
        <p class="text-sm font-medium text-white/90">{{ numerical_formatter(lead.mv) }}</p>
      </div>
      <div class="flex flex-col">
        <p class="text-[10px] text-white/50 uppercase">Timeline</p>
        <p class="text-sm font-medium text-white/90">{{ lead.closingTimeline }} Months</p>
      </div>
    </div>

    <div class="mt-4 p-2.5 bg-black/20 rounded-lg border border-white/5">
       <p class="text-[10px] text-[#ef626c] uppercase font-bold mb-1">Reason for sale</p>
       <p class="text-xs text-white/80 line-clamp-2 leading-relaxed">
         {{ lead.reason }}
       </p>
    </div>
    <!--The Shine effect that you get when you hover on a lead-->
    <div class="absolute inset-0 bg-gradient-to-tr from-transparent via-white/5 to-transparent 
                translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700"></div>
  </div>
</template>

<script setup>
const props = defineProps(['lead'])

function numerical_formatter(N) {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    maximumFractionDigits: 0
  }).format(N)
}
</script>