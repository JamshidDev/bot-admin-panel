<template>
  <button
    class="flex justify-center items-center gap-2 rounded-full border text-black-icon border-transparent bg-transparent hover:bg-color-hover-icon-button  "
    :disabled="disabled"
    :class="[size == 'md' && 'py-[6px] px-[6px] text-base', size == 'sm' && 'py-[4px] px-[26px] text-sm', size == 'lg' && 'py-[12px] px-[12px] text-base']">
    <vue-feather v-show="loading" type="loader" animation="spin"></vue-feather>
    <vue-feather v-show="!loading" class="font-medium" :type="icon" size="24"></vue-feather>
  </button>
</template>
    
<script setup>
defineProps({

  label: {
    type: String,
    default: 'Primary',
  },
  size: {
    type: String,
    default: 'md',  // lg; md; sm  50 38 30
  },
  icon: {
    type: String,
    default: 'globe',
  },
  type: {
    type: String,
    default: 'primary',
  },
  loading: {
    type: Boolean,
    default: false,
  },
  disabled: {
    type: Boolean,
    default: false,
  }



})
</script>
    
    