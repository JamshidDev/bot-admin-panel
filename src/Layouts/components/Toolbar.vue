<template>
   <div class="toolbar-container">
     <div>
       <n-button strong secondary circle  @click="$emit('sidebarEvent')">
         <template #icon>
           <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 24 24"><g fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M10 12h10"></path><path d="M10 12l4 4"></path><path d="M10 12l4-4"></path><path d="M4 4v16"></path></g></svg>
         </template>
       </n-button>
     </div>
     <div>

       <n-dropdown trigger="click" :options="options" @select="handleSelect">
         <n-avatar
             style="cursor: pointer"
             round
             size="medium"
             src="https://demo.dashboardmarket.com/ninjadash-vue/img/7.e1cdced9.png"
         />
       </n-dropdown>
     </div>
   </div>
  <div class="toolbar-helper">

  </div>
</template>

<script setup>
import { h, defineComponent } from "vue";

defineEmits(['sidebarEvent']);
</script>
