<template>
  <button class="flex justify-center items-center   gap-2 text-white rounded-md border"
    :class="[type == 'primary' && 'bg-primary border-primary', type == 'success' && 'bg-success border-success ', size=='md' && 'py-[6px] px-[26px] text-base', size=='sm' && 'py-[4px] px-[26px] text-sm', size=='lg' && 'py-[12px] px-[26px] text-base' ]"
  >
    <vue-feather v-show="loading" type="loader" animation="spin"></vue-feather>
    <vue-feather  v-if="!loading && iconLeft" :type="iconLeft" size="18"></vue-feather>
    {{ label }}
    <vue-feather v-if="!loading && iconRight" :type="iconRight" size="18"></vue-feather>
  </button>
  </template>
  
  <script setup>
defineProps({
   
    label:{
      type:String,
      default:'Primary',
    },
    size:{
      type:String,
      default:'md',  // lg; md; sm
    },
    type:{
        type:String,
      default:'primary', 
    },
    loading:{
        type:Boolean,
      default:false,
    },
    iconLeft :{
        type:String,
        default:null,
    },
    iconRight :{
        type:String,
        default:null,
    }

 

  })
  const invalid_values = ['', null, undefined]
</script>
  
  