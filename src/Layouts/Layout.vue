<template>
    <div :class="[open_sidebar ? 'open-sdebar' : 'close-sdebar']"
        class="w-full min-h-screen relative overflow-hidden box-border ">
        <div :class="[open_sidebar ? 'left-[0px]' : 'left-[-260px]']"
            class="sidebar-scroll pb-6 bg-color-sidebar-bg-color w-[260px] overflow-y-auto   fixed z-[6]  top-0 min-h-screen max-h-screen  transition-all duration-300">
            <Sidebar />
        </div>
        <div class="page-content block w-full transition-all duration-300">
            <Toolbar @sidebar-event="control_sidebar()" />
        </div>
        <div
            class=" page-content block bg-color-page-content  min-h-screen  w-full relative  transition-all duration-300 px-4 ">
            <router-view></router-view>
        </div>
        <!-- sidebar overal menu -->
        <div @click="control_sidebar()" v-if="open_sidebar"
            class="layout-overal_bg  w-full fixed min-h-screen z-[5] bg-color-layout-overal top-0 left-0 bottom-0 right-0">
        </div>
    </div>
</template>
<script setup>
import { ref, onMounted } from 'vue';
import Toolbar from './components/Toolbar.vue';
import Sidebar from './components/Sidebar.vue';

const open_sidebar = ref(true);
const control_sidebar = () => {
    open_sidebar.value = !open_sidebar.value;
    localStorage.setItem('sidebar-store', JSON.stringify(open_sidebar.value))
}


onMounted(() => {
    let sidebar = localStorage.getItem('sidebar-store') ? JSON.parse(localStorage.getItem('sidebar-store')) : true;
    open_sidebar.value = sidebar;

})
</script>