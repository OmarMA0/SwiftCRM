<script setup>
import { ref } from 'vue';
const isLoading = ref(false)
const message = ref('')
const user = useUserStore()
const BACKEND_URL = 'http://localhost:5000/api/users/login';
const usernameF = ref('')
const password = ref('')
const email = ref('')
async function login(){
  try{
    isLoading.value = true
    const response = await $fetch(BACKEND_URL,{
      method : 'POST' ,
      body : {
        username : usernameF.value,
        password : password.value
      }
    })
    if (response === 'success') {
      message.value = " You have successfully logged in"
      user.setUsername(usernameF.value)
    }
    else message.value = response
  }catch(err){
    isLoading.value = false
    message.value = err
  }finally{
    isLoading.value = false
  }
}
</script>
<template>
    <div class="h-full pt-6 min-h-screen bg-[#312f2f]">
    <div class="text-white w-full md:w-1/2 lg:w-1/3 mx-auto">
        <HContainer class="gap-4 m-4 mt-8">
          <p>Username : <baseInput v-model="usernameF"></baseInput></p>
          <p>Password : <baseInput type="password" v-model="password"></baseInput></p>
          <ButtonComponent @click="login" class="w-full">Log in</ButtonComponent>
          <div v-if="isLoading"><p>Loading</p></div>
          <div v-if="message"><p>{{ message }}</p></div>
        </HContainer>
      </div>
      </div>
</template>