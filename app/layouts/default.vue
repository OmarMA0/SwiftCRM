<script setup>
import { ref } from 'vue';
const mobileMenuOpen = ref(false)
const user = useUserStore()

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
            </div>
            <div class="flex gap-1">
            <ButtonComponent v-if="!user.username"><NuxtLink to="login">
                Log in</NuxtLink></ButtonComponent>
            <ButtonComponent v-else class="w-full">Log out</ButtonComponent>
            </div>
        </div>
        </div>
        <!--For Mobile-->
        <div class="flex flex-col lg:hidden w-full bg-[#312f2f] border-b border-[#ef626c]">
            <div class="flex justify-end">
            <button @click="mobileMenuOpen = !mobileMenuOpen" class="p-2 text-[#ef626c] justify-end">
                    <Icon name="meteor-icons:xmark" v-if="mobileMenuOpen" :size="24" />
                    <Icon name="meteor-icons:bars" v-else :size="24" />
                </button>
                <span v-if="user.username" class="text-[#f5cb5c] text-sm">Hi, {{ user.username }}</span>
            </div>
            <div class="flex flex-col p-1 bg-[#312f2f] border-t border-[#ef626c]" v-if="mobileMenuOpen">
            <ButtonComponent class="w-full">Features</ButtonComponent>
            <ButtonComponent class="w-full">Pricing</ButtonComponent>
            <ButtonComponent v-if="!user.username" class="w-full"><NuxtLink to="login">
                Log in</NuxtLink> </ButtonComponent>
            <ButtonComponent v-else class="w-full">Log out</ButtonComponent>
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