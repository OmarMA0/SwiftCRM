<template>
    <div class="text-white w-1/3 mx-auto">
        <h1 class="text-[#f6e8ea] text-2xl md:text-4xl font-semibold drop-shadow m-2 mt-8 ml-8">Add a new Employee</h1>
        <HContainer class="gap-4 m-4 mt-8">
          <p>Username : <baseInput v-model="usernameF"></baseInput></p>
          <p>Email : <baseInput type="email" v-model="email"></baseInput></p>
          <p>Password : <baseInput type="password" v-model="password"></baseInput></p>
          <p> The Role </p>
          <Checkbox v-model="role" value="acquisition manager">aquisition manager</Checkbox>
          <Checkbox v-model="role" value="lead agency">lead agency</Checkbox>
          <ButtonComponent @click="registerUser" class="w-full">Sign up</ButtonComponent>
          <div v-if="isLoading"><p>Loading</p></div>
          <div v-if="message"><p>{{ message }}</p></div>
        </HContainer>
      </div>
</template>

<script setup>
import { ref } from 'vue';
const user = useUserStore()
const BACKEND_URL = 'http://localhost:5000/api/users/register-employee';
const usernameF = ref('')
const password = ref('')
const email = ref('')
const isLoading = ref(false);
const message = ref('');
const isSuccess = ref(false);
const role = ref('')
async function registerUser(){
    if(role.value === ''){
    return message.value = 'Pick a role for the employee'
  }
  isLoading.value = true;
  message.value = '';
  isSuccess.value = false;
try{
    const response = await $fetch(BACKEND_URL , {
      method: 'POST',
      body: {
        username: usernameF.value,
        email: email.value,
        password: password.value,
        role : role.value,
        employer : user.username
      }
    })
    message.value = `Success! User registered: ${response.username}`;
    isSuccess.value = true;
    console.log('User created:', response);
} catch(error){
isSuccess.value = false;
    const errorData = error.response?._data;
    message.value = errorData?.message || 'Registration failed due to a server error.';
 }finally {
    isLoading.value = false;
  }
}
</script>