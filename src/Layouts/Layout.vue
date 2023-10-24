<template>
  <div class="layout-wrapper" :class="sidebar ? 'open-sidebar' : 'close-sidebar'">
    <div class="sidebar-container">
    <Sidebar @sidebar-event="control_sidebar()"></Sidebar>
    </div>
    <div class="main-page-content">
      <Toolbar @sidebar-event="control_sidebar()" />
      <div class="page-content">
        <router-view></router-view>
      </div>
    </div>
    <div @click="control_sidebar()" class="sidebar-overal-bg">

    </div>
  </div>
</template>
<script setup>
import { ref, onMounted } from 'vue';
import Toolbar from './components/Toolbar.vue';
import Sidebar from './components/Sidebar.vue';

const sidebar = ref(true);
const control_sidebar = () => {
  sidebar.value = !sidebar.value;
    localStorage.setItem('sidebar-store', JSON.stringify(sidebar.value))
}


onMounted(() => {
    // let sidebar = localStorage.getItem('sidebar-store') ? JSON.parse(localStorage.getItem('sidebar-store')) : true;
    // open_sidebar.value = sidebar;

})
</script>