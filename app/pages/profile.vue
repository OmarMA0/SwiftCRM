<template>
    <div class="flex flex-col bg-[#22181c] text-white min-h-screen w-full">
      <div class="flex p-4 justify-center gap-2">
        <div class="max-w-1/3 flex flex-col gap-2">
            <img v-if="!profilePic" class="rounded-xl cursor-pointer w-full"
             src="../assets/images/voidprofile.png" />
             <img v-else class="rounded-xl cursor-pointer w-full"
             :src="profilePic" />
             <div>
                <input type="file" class="border-1 rounded-xl p-1 w-32 md:w-full 
                bg-[#ef626c] border-[#f6e8ea]" @change="onFileSelected">
                </input>
             </div>
             <ButtonComponent @click="handlePicSubmit">Update your avatar</ButtonComponent>
        </div>
       <div class="flex justify-center text-white w-full">
        <div class="p-2 flex flex-col gap-2" >
            <div class="flex flex-row justify-between gap-2">
                <p>First name : <baseInput v-model="firstName"></baseInput></p>
                <p>Last name : <baseInput v-model="lastName"></baseInput></p>
            </div>
            <p>Username : <baseInput v-model="usernameF"></baseInput></p>
            <ButtonComponent @click="handleSubmit">Update your profile</ButtonComponent>
            <p>Old Password : <baseInput v-model="passwordO"></baseInput></p>
            <p>New Password : <baseInput v-model="passwordN"></baseInput></p>
            <ButtonComponent @click="reset">Reset password</ButtonComponent>
            </div>
            </div>
      </div>
      <!--Adding new Employees-->
      <div class="flex justify-between pt-4 md:pt-8 lg:pt-14">
            <HContainer class="gap-2 p-2">
                <p>Add a new Employee</p>
                <ButtonComponent>+</ButtonComponent>
            </HContainer>
            <HContainer class="gap-2 p-2">
                <p>Add a new Employee</p>
                <ButtonComponent>+</ButtonComponent>
            </HContainer>
            <HContainer class="gap-2 p-2">
                <p>Add a new Employee</p>
                <ButtonComponent>+</ButtonComponent>
            </HContainer>
            <HContainer class="gap-2 p-2">
                <p>Add a new Employee</p>
                <ButtonComponent>+</ButtonComponent>
            </HContainer>
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
function handleSubmit(){

}
function reset(){

}
function onFileSelected(event){
    const file = event.target.files[0]
       if (file && file.type.startsWith('image/')) {
        profilePic.value = URL.createObjectURL(file)
       }

}
function handlePicSubmit(){
    user.setAvatar(profilePic.value)
}
</script>