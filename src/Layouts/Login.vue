<template>
    <div class="bg-zinc-200 min-w-full  min-h-screen flex justify-center items-start">
        <div
            class="shadow-md xl:rounded-md lg:rounded-md overflow-hidden bg-gray-light w-full  lg:w-[900px] lg:flex xl:w-[1200px] xl:flex xl:mt-20 lg:mt-20 mt-0 ">
            <div class="xl:w-2/5 lg:w-2/5 w-full bg-black-700">
                <h3 class="text-white text-lg text-center pt-6  px-4font-semibold uppercase">Telegram bot admin panel</h3>
                <h6 class=" text-gray text-sm text-center mb-6 px-4">Biznesingizni biz bilan raqamlashtiring</h6>
                <div class="flex pt-10 relative pb-4">
                    <div class="w-[300px] h-[300px] border border-gray  rounded-[50%] m-auto flex">
                        <div class="w-[250px] h-[250px] border border-gray  rounded-[50%] m-auto flex">
                            <div class="w-[200px] h-[200px] border border-gray  rounded-[50%] m-auto flex">
                                <div class="w-[150px] h-[150px] border border-gray  rounded-[50%] m-auto flex">
                                    <div class="w-[100px] h-[100px] border border-gray  rounded-[50%] m-auto flex">
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <img src="../assets/picture/robot.png" class="absolute left-[50%] translate-x-[-50%] w-[200px]">

                </div>
                <h6 class=" text-gray text-sm text-center pb-6  mt-10 px-4 hidden xl:block lg:block ">© 2023 Admin panel.
                    Crafted with by Jamacoder</h6>
            </div>
            <div class="xl:w-3/5 lg:w-3/5 w-full bg-white py-10">
                <h3 class="w-full text-center mt-[120px] font-semibold text-2xl text-color-title ">Xush kelibsiz</h3>
                <h6 class="text-color-subtitle text-xs font-normal text-center mt-2 mb-4">Bugalter bot admin panelga kirish
                </h6>
                <div class="grid grid-cols-1  gap-4 px-6 mx-2 xl:mx-20 lg:mx-20 items-center  ">
                    <JR-Input mask="###" type="text" v-model="user.login" :invalid="submitted"
                        :errorMessage="'Username kiritilishi shart!'" label="Username" class="w-full block"
                        placeholder="Username kiriting"></JR-Input>
                    <JR-Password label="Parol" v-model="user.password" :invalid="submitted"
                        :errorMessage="'Parol kiritilishi shart!'" placeholder="Parolni kiriting"></JR-Password>
                    <JR-Button label="Tizimga kirish" class="mt-10" @click="login()" :disabled="loading" :loading="loading"></JR-Button>
                </div>
                <h6 class=" text-gray text-sm text-center mb-2  mt-20 px-4  xl:hidden lg:hidden ">© 2023 Crafted with by
                    Jamacoder.uz</h6>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue';

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
        authService.login_user({data: user.value}).then((res)=>{
            localStorage.setItem("access_token",res.data.access_token);
            localStorage.setItem("user_profile", JSON.stringify(res.data.data));
            $router.push("/bank")
        }).finally(()=>{
            loading.value = false
        }) 
    }

}


</script>
