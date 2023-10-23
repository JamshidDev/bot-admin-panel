<template>
   <div class="toolbar-container">
     <div></div>
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
import { NIcon } from "naive-ui";
import {
  PersonCircleOutline as UserIcon,
  Pencil as EditIcon,
  LogOutOutline as LogoutIcon
} from "@vicons/ionicons5";


// @click="$emit('sidebarEvent')"
const renderIcon = (icon) => {
  return () => {
    return h(NIcon, null, {
      default: () => h(icon)
    });
  };
};

const  options= [
  {
    label: 'Profile',
    key: 'profile',
    icon: renderIcon(UserIcon)
  },
  {
    label: 'Edit Profile',
    key: 'editProfile',
    icon: renderIcon(EditIcon)
  },
  {
    label: 'Logout',
    key: 'logout',
    icon: renderIcon(LogoutIcon)
  }
]

const handleSelect = (event)=>{
  console.log(event)
}
defineEmits(['sidebarEvent']);
</script>
