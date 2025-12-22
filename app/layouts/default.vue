<script setup>
import { navigateTo } from '#app';
import { ref } from 'vue';
const mobileMenuOpen = ref(false)
const user = useUserStore()
const get_avatar_URL = 'http://localhost:5000/api/users/get-avatar'
onMounted(() => {
  user.init()
})
function logout(){
    user.clearUsername()
    user.clearAvatar()
    user.clearRole()
    navigateTo('/')
}
watch(
  () => user.username,
  async (username) => {
    if (!username) return

    try {
      const { avatar } = await $fetch(
        `http://localhost:5000/api/users/get-avatar/${username}`
      )
      user.setAvatar(avatar)
    } catch (err) {
    }
  },
  { immediate: true }
)
</script>
<template>
    <!--Top Navbar-->
    <!--For PC-->
    <div class="hidden lg:flex flex-col w-full h-full border-b border-[#ef626c]">  
        <div class="bg-[#312f2f] w-full flex justify-between" >
            <p class="text-2xl md:text-3xl lg:text-4xl font-bold text-[#ef626c] mb-4">Swift CRM</p>
            <div class="flex gap-1">
            <ButtonComponent>Features</ButtonComponent>
            <ButtonComponent>Pricing</ButtonComponent>
            <ButtonComponent>Resources</ButtonComponent>
            <ButtonComponent>Contact</ButtonComponent>
            <p>{{user.role}}</p>
            </div>
            <div class="flex gap-1">
            <ButtonComponent v-if="!user.username"><NuxtLink to="login">
                Log in</NuxtLink></ButtonComponent>
            <div v-else class="flex gap-1 w-full">
            <ButtonComponent @click="logout" class="w-full">Log out</ButtonComponent>
             <NuxtLink to="profile">
                <div v-if="user.avatar" class="relative w-16 h-full">
                <img
                :src="user.avatar"
                class="w-full h-full rounded-full object-cover"/>
                </div>
                <div v-else class="relative w-15 h-full">
                <img
                src="../assets/images/voidprofile.png"
                class="w-full h-full rounded-full object-cover"/>
                </div>
             </NuxtLink>
            </div>
            </div>
        </div>
        </div>
        <!--For Mobile-->
        <div class="flex flex-col lg:hidden w-full bg-[#312f2f] border-b border-[#ef626c]">
            <div class="flex justify-between">
            <button @click="mobileMenuOpen = !mobileMenuOpen" class="p-2 text-[#ef626c]">
                    <Icon name="meteor-icons:xmark" v-if="mobileMenuOpen" :size="24" />
                    <Icon name="meteor-icons:bars" v-else :size="24" />
                </button>
                <p v-if="user.username" class="text-[#ef626c] text-sm p-2">Hi, {{ user.username }}</p>
            </div>
            <div class="flex flex-col p-1 bg-[#312f2f] border-t border-[#ef626c]" v-if="mobileMenuOpen">
            <ButtonComponent class="w-full">Features</ButtonComponent>
            <ButtonComponent class="w-full">Pricing</ButtonComponent>
            <ButtonComponent v-if="!user.username" class="w-full"><NuxtLink to="login">
                Log in</NuxtLink> </ButtonComponent>
            <div v-else class="flex gap-1 w-full">
            <ButtonComponent @click="logout" class="w-full">Log out</ButtonComponent>
            <ButtonComponent class="w-full">
             <NuxtLink to="profile"><Icon name="iconamoon:profile" size="2rem"/></NuxtLink>
            </ButtonComponent>
            </div>
            </div>
        </div>
        <div >
        <slot/>
        </div>
        <!--Bottom Footer-->
        <footer class="bg-[#312f2f] w-full h-full text-white p-6 border-t border-[#ef626c]">
            <div class="flex justify-center gap-15">
                <div class="flex flex-col gap-4">
                    <p>About us</p>
                    <p>Pricing</p>
                </div>
                <div class="flex flex-col gap-4">
                    <p>Resources</p>
                    <p>Features</p>
                </div>
                
            </div>
        </footer>

</template>