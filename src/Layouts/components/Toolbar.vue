<template>
   <div class="toolbar-container">
     <div>
       <div class="control-btn" @click=" $emit('sidebarEvent') ">
<!--         <n-icon :component="ChevronDoubleLeft16Filled" size="26" :depth="1"/>-->
       </div>
     </div>
     <div>

<!--       <n-dropdown trigger="click" :options="options" @select="selectOption">-->
<!--         <n-avatar-->
<!--             style="cursor: pointer"-->
<!--             round-->
<!--             size="medium"-->
<!--             :src="avatar"-->
<!--         />-->
<!--       </n-dropdown>-->
     </div>
   </div>
  <div class="toolbar-helper">

  </div>
</template>

<script setup>
import { h, defineComponent } from "vue";
import avatar from "../../assets/picture/member-avatar.png"
import {
  useRoute,
  useRouter,
} from 'vue-router';
import { NIcon } from "naive-ui";

// import { PersonCircle20Regular,SignOut24Regular,Settings48Regular, ChevronDoubleLeft16Filled } from "@vicons/fluent";
const router = useRouter();
const route = useRoute();

// const renderIcon = (icon) => {
//   return () => {
//     return h(NIcon, null, {
//       default: () => h(icon)
//     });
//   };
// };
// const options = [
//   {
//     label: 'Profile',
//     key: 'profile',
//     icon: renderIcon(PersonCircle20Regular)
//   }, {
//     label: 'Sozlamalar',
//     key: 'setting',
//     icon: renderIcon(Settings48Regular)
//   },
//   {
//     label: 'Logout',
//     key: 'logout',
//     icon: renderIcon(SignOut24Regular)
//   }
// ]
defineEmits(['sidebarEvent']);

const selectOption = (key)=>{
  console.log(key)
  if(key == 'logout'){
    sessionStorage.removeItem("access_token")
    sessionStorage.removeItem("user_profile")
    router.push("/login")
  }
}
</script>
