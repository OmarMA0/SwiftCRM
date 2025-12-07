<script setup>
const user = useUserStore()
user.init()
</script>

<template>
   <div class="w-full h-full">
      <div class="homepage-background-with-gradient min-h-screen">
      <!--elements starts from here-->
      <div class="flex flex-col items-center text-white pt-6">
        <p class="text-2xl md:text-4xl font-semibold drop-shadow">Manage Leads</p>
        <p class="text-2xl md:text-4xl font-semibold drop-shadow">Close Deals</p>
        <p class="text-2xl md:text-4xl font-semibold drop-shadow">Grow your Real Estate business</p>
      </div>
      <div class="flex flex-col lg:flex-row text-white items-center justify-center">
        <!-- Home Features -->
          <div class="flex flex-col p-2 pl-4 mt-6 ml-1 md:ml-6 bg-[#312f2f]/50 border-2 border-[#f6e8ea] rounded-xl backdrop-blur-lg">
            <Icon name="iconamoon:file-document" size="4rem" />
            <p class="text-xl font-semibold drop-shadow">Streamlined Workflow</p>
            <p class="text-base drop-shadow break-words">Streamlining workflows optimizes processes to eliminate waste</p>
            <p class="text-base drop-shadow">and increase efficiency. By simplifying tasks</p>
          </div>
          <div class="flex flex-col p-2 pl-4 mt-6 ml-1 md:ml-6 bg-[#312f2f]/50 border-2 border-[#f6e8ea] rounded-xl backdrop-blur-lg">
            <Icon name="la:handshake" size="4rem" />
            <p class="text-xl font-semibold drop-shadow">Nurture Client Relationships</p>
            <p class="text-base drop-shadow break-words">Nurturing client relationships builds trust and loyalty through</p>
            <p class="text-base drop-shadow">personalized service, ensuring repeat business and positive referrals.</p>
          </div>
          <div class="flex flex-col p-2 pl-4 mt-6 ml-1 md:ml-6 bg-[#312f2f]/50 border-2 border-[#f6e8ea] rounded-xl backdrop-blur-lg">
            <Icon name="iconamoon:trend-up" size="4rem" />
            <p class="text-xl font-semibold drop-shadow">Boost Productivity</p>
            <p class="text-base drop-shadow break-words">by centralizing tasks, communication</p>
            <p class="text-base drop-shadow">and real-time progress tracking in one place</p>
          </div>
      </div>
      <!--Sign up Form-->
      <div v-if="!user.username">
      <Signup class="w-full md:w-1/2 lg:w-1/3 p-4"></Signup>
      <!--Already Logged in-->
      </div v-else>
        
      </div>
   </div>
</template>
<style>
/*
body {
    margin: 0;
    padding: 0;
    min-height: 100vh;
    background-image: linear-gradient(to bottom, rgba(0,0,0,.3) 0%, rgba(0,0,0,0.9) 100%), url('../assets/images/Background.jpg');
    background-size: cover;
    background-position: center;
    background-attachment: fixed;
    background-repeat: no-repeat;
}*/
</style>
