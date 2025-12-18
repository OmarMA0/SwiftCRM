<script setup>
defineProps({
  modelValue: [String, Number, Boolean, Object],
  value: [String, Number, Boolean, Object],
  name: String
});
defineEmits(['update:modelValue']);
</script>
<template>
    
<div class="flex gap-3">
<input type="radio"
:checked="modelValue === value"
:value="value"
@input="$emit('update:modelValue',value)">
<slot></slot></input>
</div>
</template>