<template>
  <div class="sidebar-dark-box">
    <div class="control-btn" @click="emit('sidebarEvent')">
      <n-icon :component="ChevronDoubleLeft16Filled" size="26" :depth="1"/>
    </div>
    <div class="logo-box" @click="router.push('/')">
      <img src="../../assets/picture/robot.png" alt="">
      <span class="logo-name" >Telegram Bot</span>
    </div>
    <div class="item-subtitle">
      Asosiy
    </div>
    <div class="single-item" v-for="item in menu_list" @click="router.push(item.to)" :class="route.path == item.to && 'active-item-single'" :key="item.to">
      <n-icon :component="item.icon" size="22" :depth="1"/>
      <span>{{item.label}}</span>
    </div>


    <div class="help-center-box">
        <span class="help-icon">
          <n-icon size="26"  color="#6090E4">
          <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 512 512"><path d="M60.44 389.17c0 .07 0 .2-.08.38c.03-.12.05-.25.08-.38z" fill="currentColor"></path><path d="M439.9 405.6a26.77 26.77 0 0 1-9.59-2l-56.78-20.13l-.42-.17a9.88 9.88 0 0 0-3.91-.76a10.32 10.32 0 0 0-3.62.66c-1.38.52-13.81 5.19-26.85 8.77c-7.07 1.94-31.68 8.27-51.43 8.27c-50.48 0-97.68-19.4-132.89-54.63A183.38 183.38 0 0 1 100.3 215.1a175.9 175.9 0 0 1 4.06-37.58c8.79-40.62 32.07-77.57 65.55-104A194.76 194.76 0 0 1 290.3 32c52.21 0 100.86 20 137 56.18c34.16 34.27 52.88 79.33 52.73 126.87a177.86 177.86 0 0 1-30.3 99.15l-.19.28l-.74 1c-.17.23-.34.45-.5.68l-.15.27a21.63 21.63 0 0 0-1.08 2.09l15.74 55.94a26.42 26.42 0 0 1 1.12 7.11a24 24 0 0 1-24.03 24.03z" fill="currentColor"></path><path d="M299.87 425.39a15.74 15.74 0 0 0-10.29-8.1c-5.78-1.53-12.52-1.27-17.67-1.65a201.78 201.78 0 0 1-128.82-58.75A199.21 199.21 0 0 1 86.4 244.16C85 234.42 85 232 85 232a16 16 0 0 0-28-10.58s-7.88 8.58-11.6 17.19a162.09 162.09 0 0 0 11 150.06C59 393 59 395 58.42 399.5c-2.73 14.11-7.51 39-10 51.91a24 24 0 0 0 8 22.92l.46.39A24.34 24.34 0 0 0 72 480a23.42 23.42 0 0 0 9-1.79l53.51-20.65a8.05 8.05 0 0 1 5.72 0c21.07 7.84 43 12 63.78 12a176 176 0 0 0 74.91-16.66c5.46-2.56 14-5.34 19-11.12a15 15 0 0 0 1.95-16.39z" fill="currentColor"></path></svg>
          </n-icon>
        </span>
      <div class="help-text">
        <span>Support call</span>
        <span>+998(97)7716004</span>
      </div>
      <span class="help-icon">
          <n-icon size="20"  color="#83899F">
          <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 16 16"><g fill="none"><path d="M5.74 3.2a.75.75 0 0 0-.04 1.06L9.227 8L5.7 11.74a.75.75 0 1 0 1.1 1.02l4-4.25a.75.75 0 0 0 0-1.02l-4-4.25a.75.75 0 0 0-1.06-.04z" fill="currentColor"></path></g></svg>
          </n-icon>
        </span>
    </div>




  </div>

</template>
 
<script setup>
import { onMounted } from 'vue';

import {
  useRoute,
  useRouter,
} from 'vue-router';
import { ChartMultiple20Filled, BuildingBank16Regular, ChevronDoubleLeft16Filled, PersonCircle24Regular } from "@vicons/fluent";


const emit = defineEmits(['sidebarEvent']);

const router = useRouter();
const route = useRoute();
const menu_list = [
    {
        label: 'Umumiy Statistika',
        icon:ChartMultiple20Filled,
      to: '/coming-soon',
        visible: () => true,

    },
    {
        label: "Bank ma'lumotlari",
        icon: BuildingBank16Regular,
        to: '/bank',
        visible: () => true,

    },
    {
        label: "Xizmatlar",
        icon: ChartMultiple20Filled,
        to: '/services',
        visible: () => true,
    },
    {
        label: 'Foydalanuvchilar',
        icon: PersonCircle24Regular,
        to: '/members',
        visible: () => true,
    },
    {
        label: 'Kanallar',
        icon: ChartMultiple20Filled,
        to: '/coming-soon',
        visible: () => true,
    },
    {
        label: 'Gruppalar',
        icon: ChartMultiple20Filled,
        to: '/coming-soon',
        visible: () => true,
    },
    // {
    //     label: 'Buyurtmalar',
    //     icon: 'globe',
    //     to: '/coming-soon',
    //     visible: () => true,
    // },
    // {
    //     label: 'Buyurtmalar',
    //     icon: 'globe',
    //     to: '/coming-soon',
    //     visible: () => true,
    // },
    // {
    //     label: 'Buyurtmalar',
    //     icon: 'globe',
    //     to: '/coming-soon',
    //     visible: () => true,
    // },
    // {
    //     label: 'Buyurtmalar',
    //     icon: 'globe',
    //     to: '/coming-soon',
    //     visible: () => true,
    // }


];




</script>
 