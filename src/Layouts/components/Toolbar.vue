<template>
   <div class="toolbar-container">
     <div>
       <div class="control-btn" @click=" $emit('sidebarEvent') ">
         <n-icon :component="DoubleArrowOutlined" size="22" :depth="1"/>
       </div>
     </div>
     <div>

       <n-dropdown trigger="click" :options="options" @select="selectOption">
         <n-avatar
             style="cursor: pointer"
             round
             size="medium"
             :src="avatar"
         />
       </n-dropdown>
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
import {
  PersonCircleOutline as UserIcon,
  Pencil as EditIcon,
  LogOutOutline as LogoutIcon
} from "@vicons/ionicons5";
import {DoubleArrowOutlined} from "@vicons/material";
const router = useRouter();
const route = useRoute();

const renderIcon = (icon) => {
  return () => {
    return h(NIcon, null, {
      default: () => h(icon)
    });
  };
};
const options = [
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
