<template>
    <div class="flex flex-col bg-[#22181c] text-white min-h-screen w-full">
      <div class="flex p-4 justify-center gap-2">
        <div class="max-w-1/3 flex flex-col gap-2">
            <img v-if="!profilePic && !user.avatar" class="rounded-xl cursor-pointer w-full"
             src="../assets/images/voidprofile.png" />
             <img v-if="profilePic" class="rounded-xl cursor-pointer w-full"
             :src="profilePic" />
             <img v-else class="rounded-xl cursor-pointer w-full"
             :src="user.avatar" />
             <div>
                <input type="file" class="border-1 rounded-xl p-1 w-32 md:w-full 
                bg-[#ef626c] border-[#f6e8ea]" @change="onFileSelected">
                </input>
             </div>
             <ButtonComponent @click="handlePicSubmit">Update your avatar</ButtonComponent>
             <p v-if="avatarError" class="text-red-500"> {{ avatarError }}</p>
        </div>
       <div class="flex justify-center text-white w-full">
        <div class="p-2 flex flex-col gap-2" >
            <div class="flex flex-row justify-between gap-2">
                <p>First name : <baseInput v-model="firstName"></baseInput></p>
                <p>Last name : <baseInput v-model="lastName"></baseInput></p>
            </div>
            <p>Username : <baseInput v-model="usernameF"></baseInput></p>
            <ButtonComponent @click="handleSubmit">Update your profile</ButtonComponent>
            <p>Old Password : <baseInput type="password" v-model="passwordO"></baseInput></p>
            <p>New Password : <baseInput type="password" v-model="passwordN"></baseInput></p>
            <ButtonComponent @click="reset">Reset password</ButtonComponent>
            <p v-if="passResetError" class="text-red-500"> {{ passResetError }}</p>
            <p v-else>{{ passResetMessage }}</p>
            <EmploySignup class="w-full"></EmploySignup>
            </div>
            </div>
      </div>
    </div>
</template>
<script setup>
const user = useUserStore()
import { ref } from 'vue';
const profilePic = ref('')
const firstName = ref('')
const lastName = ref('')
const usernameF = ref('')
const passwordO = ref('')
const passwordN = ref('')
const picSelected = ref('')
const avatarError = ref('')
const passResetError = ref('')
const passResetMessage = ref('')
function handleSubmit(){

}
async function reset(){
    passResetError.value =''
    passResetMessage.value = ''
    const BACKEND_URL = `http://localhost:5000/api/users/reset-password/${user.username}`
    try{
        const response = await $fetch(BACKEND_URL,{
            method : 'PATCH',
            body : {
                oldpassword : passwordO.value,
                newpassword : passwordN.value
            }
        })

        passResetMessage.value =  response.message
    }
    catch(err){
        passResetError.value = err
    }
}
function onFileSelected(event){
    picSelected.value = event.target.files[0]
       if (picSelected.value && picSelected.value.type.startsWith('image/')) {
        profilePic.value = URL.createObjectURL(picSelected.value)
       }

}
async function handlePicSubmit(){
    const BACKEND_URL = 'http://localhost:5000/api/users/upload-avatar'
    if (picSelected.value && user.username){
    try{
        const formData = new FormData();
        formData.append('username', user.username);
        formData.append('avatar', picSelected.value)
        const response = await $fetch(BACKEND_URL,{
            method : 'POST' ,
            body :formData
    })
    }catch(err){
        Error.value = err
    }
    }
}
</script>