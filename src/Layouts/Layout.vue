<template>
    <div class="w-full min-h-screen relative overflow-hidden box-border ">
        <div :class="[open_sidebar? 'left-[0px]': 'left-[-260px]']" class="bg-gray-dark  w-[260px] overflow-x-hidden overflow-y-auto  fixed z-[6]  top-0 min-h-full transition-all duration-300">
        </div> 
       <div :class="[open_sidebar? 'xl:ml-[260px] lg:ml-[260px] ml-[0px]': 'ml-[0px]']" class="block w-full">
        <Toolbar></Toolbar>
       </div>
        <div :class="[open_sidebar? 'xl:ml-[260px] lg:ml-[260px] ml-[0px]': 'ml-[0px]']"  class="block bg-color-page-content  min-h-screen h-[1600px]  w-full relative z-[2] transition-all duration-300 ">
            <JR-Button label="Tizimga kirish" class="" @click="open_sidebar = !open_sidebar"></JR-Button>
        </div>
        <!-- sidebar overal menu -->
        <div @click="open_sidebar = !open_sidebar" v-if="open_sidebar" class="xl:hidden lg:hidden  w-full fixed min-h-screen z-[5] bg-gray-dark bg-color-layout-overal top-0 left-0 bottom-0 right-0">
        </div>
    </div>
</template>
<script setup>
import { ref } from 'vue';

import Toolbar from './components/Toolbar.vue';

const open_sidebar = ref(true)
</script>