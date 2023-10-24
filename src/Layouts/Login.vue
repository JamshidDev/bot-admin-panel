<template>
  <div class="login-container">

    <div class="form-box">
      <n-form>
        <n-form-item>
          <span style="font-size: 20px; font-weight:bold;text-align: center; width: 100%">Admin Panel <span>Redox</span></span>
        </n-form-item>
        <n-form-item label="Login">
          <n-input
              v-model:value="user.login"
              type="text"
              placeholder="Bu yerga login yozing..."
          />
        </n-form-item>
        <n-form-item label="Parol">
          <n-input
              v-model:value="user.password"
              type="password"
              placeholder="Bu yerga parol yozing..."
          />
        </n-form-item>
        <n-form-item>
          <n-space justify="center" style="width: 100%">
            <n-button type="info" :loading="loading" @click="login()">
              Tizimga kirish
            </n-button>
          </n-space>
        </n-form-item>
      </n-form>
    </div>

  </div>
</template>

<script setup>
import {ref} from 'vue';

import authService from '@/service/services/authService';

const user = ref({
  login: '',
  password: '',
})

const submitted = ref(false);
const loading = ref(false);


const login = () => {
  submitted.value = true;
  if (user.value.login && user.value.password) {
    loading.value = true
    authService.login_user({data: user.value}).then((res) => {
      sessionStorage.setItem("access_token", res.data.access_token);
      sessionStorage.setItem("user_profile", JSON.stringify(res.data.data));
      $router.push("/bank")
    }).finally(() => {
      loading.value = false
    })
  }

}


</script>
