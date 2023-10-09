<template>
    <div class="">
      <label class="font-medium block text-[15px] mb-1" >{{label }}</label>
    <div class="relative">
      <input
    :v-bind="$attrs"
    :type="pasword? 'password' : 'text'"
    :placeholder="placeholder"
    :value="modelValue"
    @input="$emit('update:modelValue', $event.target.value)"
     class="w-full border border-input-border rounded-md   transition  focus:outline-none  placeholder:font-light placeholder:text-sm"
     :class="[(invalid && invalid_values.includes(modelValue) || custom_invalid)? 'border-input-error focus:border-input-error font-medium ' : 'focus:border-input-focus',size =='md' && 'py-[6px] px-[10px] text-base', size =='sm' && 'py-[4px] px-[8px] text-sm', size =='lg' && 'py-[12px] px-[12px] text-base']"
     >
     <vue-feather @click="pasword=!pasword" class="absolute  text-input-text  cursor-pointer text-sm" :class="[size == 'md'&& 'right-[10px] top-[10px]', size == 'sm'&& 'right-[10px] top-[6px]', size == 'lg'&& 'right-[10px] top-[16px]']" size="18" :type="pasword? 'eye' : 'eye-off'"></vue-feather>
    </div>
     <Transition name="error-message"  mode="out-in">
      <small v-if="(invalid && invalid_values.includes(modelValue) || custom_invalid)" class="text-xs font-medium text-input-error">{{ errorMessage}}</small>
  </Transition>
    
    </div>
  </template>
  
  <script setup>
import { ref } from 'vue';

defineProps({
    placeholder: {
      type:String,
      default:''
    },
    label:{
      type:String,
      default:'',
    },
    size:{
      type:String,
      default:'md',  // lg; md; sm
    },
    errorMessage:{
      type:String,
      default:'Error message',
    },
    invalid:{
      type:Boolean,
      default:false,
    },
    custom_invalid:{
      type:Boolean,
      default:false,
    },
    modelValue:[Number, String,]
  })
  defineEmits(['update:modelValue']);

const pasword = ref(true)
  
  const invalid_values = ['', null, undefined];

</script>
  
  