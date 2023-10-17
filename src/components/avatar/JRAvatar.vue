<template>
    <div class="overflow-hidden rounded-[50%] cursor-pointer scale-100 hover:scale-125 transition-all duration-200 border border-transparent ">
    <img class="w-full" :src="src? src : default_avatar" alt="">
    </div>
</template>
<script setup>
import default_avatar from "../../assets/picture/member-avatar.png"
const props = defineProps({
    src:{
        type:String,
        default:null,
    }

})

</script>