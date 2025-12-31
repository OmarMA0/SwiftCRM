<template>
 <div class="flex flex-col border-2 bg-[#22181c]/50 p-3 rounded-xl shadow-lg text-white border-[#ef626c]
             gap-2 cursor-pointer">
    <h1>
      Lead ID :  {{ lead._id }}
    </h1>
    <div class="flex gap-1">
        <p> Asking Price :</p>
        <p class="text-[#ef626c] font-semibold drop-shadow">{{ numerical_formatter(lead.ap) }}</p>
    </div>
    <p> Market Value : {{ numerical_formatter(lead.mv) }}</p>
    <p> Closing Timeline : {{ lead.closingTimeline }} months</p>
    <p class="font-semibold"> Reason : {{ lead.reason }}</p>

 </div>
</template>
<script setup>
const props = defineProps(['lead'])
function numerical_formatter(N){
     return `$${Number(N).toLocaleString()}`
}
        
</script>