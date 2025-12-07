<script setup>

</script>

<template>
    <div class="bg-gradient-to-r from-[#f6e8ea] to-[#84dccf] w-full min-h-screen flex flex-col text-white" >
      <h1>Swift CRM</h1>
      <div class="flex flex-col">
      <!--TOP Left most data-->
      <div class="flex flex-col lg:flex-row w-full gap-2 md:gap-6 lg:gap-12">
        <div class="flex flex-col lg:flex-row">
        <HContainer class="p-4 gap-1 min-w-60 cursor-pointer">
          <p>Leads</p>
          <div class="flex flex-row gap-3 justify-between">
            <span class="text-4xl pt-2">345</span> <Icon name="iconamoon:invoice" size="4rem"/>
          </div>
        </HContainer>
        <HContainer class="p-4 gap-1 min-w-60 cursor-pointer">
          <p>Properties</p>
          <div class="flex flex-row gap-3 justify-between">
            <span class="text-4xl pt-2">80</span> <Icon name="iconamoon:home" size="4rem"/>
          </div>
        </HContainer>
        <HContainer class="p-4 gap-1 min-w-60 cursor-pointer">
          <p>Deals in pipline</p>
          <div class="flex flex-row gap-3 justify-between">
            <span class="text-4xl pt-2">4</span> <Icon name="iconamoon:briefcase" size="4rem"/>
          </div>
        </HContainer>
        </div>
        <!--Top Right Most Feed-->
        <div class="flex flex-col">
          <h1 class="text-black text-xl font-semibold">Recent Activity</h1>
          
        </div>
       </div>
       <!--Second row-->
      </div>
    </div>
</template>