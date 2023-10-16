<template>
    <div class="w-full">
        <div class="w-full my-4 pb-4 pt-1 flex gap-2 justify-center items-center border-b-[1px] border-[#474747] ">
            <img src="../../assets/picture/robot.png" class="w-[30px]" alt="">
            <span class="font-bold uppercase text-white text-xl">Telegram bot</span>
        </div>
        <div v-for="item in menu_list" :key="item.to" :class="route.path == item.to && 'text-white'" @click="router.push(item.to)"
            class="w-full text-color-sidebar-text-color hover:text-white">
            <div class="flex gap-2 mx-3 my-1 p-2 cursor-pointer transition-all duration-200">
                <vue-feather :type="item.icon" size="18" class=""></vue-feather>
                <div class="text-sm font-normal ">{{ item.label }}</div>
            </div>
        </div>
        <a href="tel:+998977716004" class="block m-4 p-4 border text-[#5036c5] border-[#5036c5] rounded-lg mt-10 shadow-lg">
            <h3 class=" text-center text-sm uppercase font-bold ">Support call</h3>
            <h3 class=" text-center text-sm uppercase font-bold cursor-pointer ">
                +998 (97) 771-60-04
            </h3>
            <h6 class="text-center text-xs uppercase font-normal mt-2 ">🧑‍💻 Jamshid Raximov</h6>
        </a>
    </div>
</template>
 
<script setup>
import { onMounted } from "vue";
import { useRouter, useRoute } from 'vue-router';





const emit = defineEmits(['sidebarEvent']);

const router = useRouter();
const route = useRoute();
const menu_list = [
    {
        label: 'Umumiy Statistika',
        icon: 'pie-chart',
        to: '/main',
        visible: () => true,

    },
    {
        label: "Bank ma'lumotlari",
        icon: 'book-open',
        to: '/bank',
        visible: () => true,

    },
    {
        label: 'Hisoblar',
        icon: 'dollar-sign',
        to: '/main2',
        visible: () => true,
    },
    {
        label: 'Foydalanuvchilar',
        icon: 'users',
        to: '/main2',
        visible: () => true,
    },
    {
        label: 'Yetkazilgan Buyurtma',
        icon: 'check-circle',
        to: '/main2',
        visible: () => true,
    },
    {
        label: 'Yetkazilmagan Buyurtma',
        icon: 'info',
        to: '/main2',
        visible: () => true,
    },
    {
        label: 'Curyerlar',
        icon: 'user',
        to: '/main2',
        visible: () => true,
    },
    {
        label: 'Yangi buyurtmalar',
        icon: 'shopping-bag',
        to: '/main2',
        visible: () => true,
    },
    {
        label: 'Kanallar',
        icon: 'radio',
        to: '/main2',
        visible: () => true,
    },
    {
        label: 'Gruppalar',
        icon: 'radio',
        to: '/main2',
        visible: () => true,
    },
    {
        label: 'Buyurtmalar',
        icon: 'globe',
        to: '/main2',
        visible: () => true,
    },
    {
        label: 'Buyurtmalar',
        icon: 'globe',
        to: '/main2',
        visible: () => true,
    },
    {
        label: 'Buyurtmalar',
        icon: 'globe',
        to: '/main2',
        visible: () => true,
    },
    {
        label: 'Buyurtmalar',
        icon: 'globe',
        to: '/main2',
        visible: () => true,
    }


];



</script>
 