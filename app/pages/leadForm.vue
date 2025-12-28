<template>
    <div class="homepage-background-with-gradient min-h-screen w-full">
        <div class="flex justify-center text-white w-full pt-10">
        <div class="p-2 flex flex-col gap-2 bg-[#312f2f]/50 p-6 rounded-xl" >
            <div class="flex flex-row justify-between gap-2">
                <p>seller : <baseInput v-model="seller"></baseInput></p>
                <p>address : <baseInput v-model="address"></baseInput></p>
            </div>
            <p>Asking Price: <baseInput v-model="ap"></baseInput></p>
            <p>Closing Timeline in months : <baseInput v-model="closingTimeline"></baseInput></p>
            <p>Reason : <baseInput v-model="reason"></baseInput></p>
            <p>Market Value : <baseInput v-model="mv"></baseInput></p>
            <p>Condition : <baseInput v-model="condition"></baseInput></p>
            <p>note : <baseInput v-model="note"></baseInput></p>
            <p> phone :<baseInput v-model="phone"></baseInput></p>
            <ButtonComponent @click="submit">Push Lead</ButtonComponent>
            <p v-if="message">{{ message }} </p>
            <p> {{ user.employer }}</p>
            
            </div>
            </div>
</div>
</template>
<script setup>
const user = useUserStore()
const seller = ref('')
const address = ref('')
const ap = ref('')
const closingTimeline = ref('')
const reason = ref('')
const mv = ref('')
const condition = ref('')
const note = ref('')
const phone = ref('')
const message = ref('')
const BACKEND_URL = computed(()=>`http://localhost:5000/api/leads/push-lead/${user.employer}`)  
async function submit() {
    try{ 
    const response = await $fetch(BACKEND_URL.value , {
     method : 'POST' , 
     body : {
            seller : seller.value ,
            address : address.value , 
            ap : ap.value ,
            closingTimeline : closingTimeline.value ,
            mv : mv.value , 
            condition : condition.value , 
            note : note.value ,
            pusher : user.username ,
            phone : phone.value ,
            reason : reason.value

    },
    })
    message.value = response
    }catch(err){
    message.value = err

    }
    }
</script>