<script setup>
defineProps({
    input_text : {
        type : String,
        default : "",
    },
    modelValue :{
        type: String,
        default : "",
    },
    type:{
        type:String,
        default : "text",
    },
    placeholder:{
        type:String,
        default : "",
    },
})
</script>

<template>
    <div>
        <label for="">{{input_text}}</label>
        <input :type="type" :value="modelValue"
        @input="$emit('update:modelValue',$event.target.value)"  
        class="bg-[#e6e8e6] border rounded shadow p-2 
        focus:outline-none w-full focus:shadow-lg text-black"
        :placeholder="placeholder">     <!-- this emits the input to the parent-->
    </div>
</template>