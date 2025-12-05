<script setup>
</script>

<template>
    <div class="flex">
        <!--The left navbar-->
        <div class="flex flex-col bg-[#22181c] p-2 h-screen justify-between">
            <div class="flex flex-col">
                <ButtonComponent>Leads</ButtonComponent>
                <ButtonComponent>Analytics</ButtonComponent>
                <ButtonComponent>Acquistion</ButtonComponent>
            </div>
        <ButtonComponent>dir3</ButtonComponent>
            <div class="flex flex-col">
                <ButtonComponent>dir4</ButtonComponent>
                <ButtonComponent>dir5</ButtonComponent>
            </div>
        </div>
        <!--Right The pages-->
        <div class="bg-[#312f2f] w-full" >
            <slot/>
        </div>
    </div>
</template>
