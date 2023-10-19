<template>
    <div class="pt-4 ">
        <div class="grid xl:grid-cols-4 lg:grid-cols-4 grid-cols-1 gap-2">
            <JR-Input mask="###" type="text" v-model="params.search" class="w-full block" placeholder="Qidiruv..."
                @enterEvent="get_list(params)"></JR-Input>
            <div></div>
            <div></div>
           <div></div>
        </div>
        <div class="grid grid-cols-1 mt-8 pb-20">
            <div class="overflow-x-auto" v-show="table_list.length > 0 && !table_loading">
                <table class="table-auto border-collaps bg-transparent w-full">
                    <thead class="border-input-border">
                        <tr
                            class="text-[#3f3f3f] uppercase text-sm font-normal text-center border-b-[10px] border-[#f7f7f7]">
                            <th style="min-width: 30px; width:50px;">No</th>
                            <th style="min-width: 40px; width:50px;">Avatar</th>
                            <th style="min-width: 100px; width: 200px;">Id</th>
                            <th style="min-width: 100px; width: 200px;">Ism</th>
                            <th style="min-width: 100px; width: 200px;">Username</th>
                            <th style="min-width: 100px; width: 200px;">Holati </th>
                            <th style="min-width: 100px; width: 200px;">Izdoshlar</th>

                        </tr>
                    </thead>
                    <tbody>
                        <tr class="bg-white border-b-[20px] border-[#f7f7f7] overflow-hidden" v-for="item in table_list"
                            :key="item._id">
                            <td class="text-center p-2 text-sm">{{ item.number }}</td>
                            <td class="p-2">
                                <JR-Avatar class="w-[36px] border-2 border-blue mx-auto"></JR-Avatar>
                            </td>
                            <td class="text-center p-2 xl:text-base lg:text-base text-sm">{{ item.user_id }}
                            </td>
                            <td class="text-center p-2 xl:text-base lg:text-base text-sm">{{ item.fullName }}
                            </td>
                            <td class="text-center p-2 text-blue  xl:text-base lg:text-base text-sm">
                                {{ item.username }}
                            </td>
                            <td class="p-2 xl:text-base lg:text-base text-sm text-center">
                                <span class="px-4 py-[2px] bg-[#b0fda931] text-[#46c93a] text-sm rounded-md border border-[#46c93a] shadow-lg ">active</span>
                            </td>
                            <td class="p-2 xl:text-base lg:text-base text-sm text-center">{{ item.invited_users }}</td>

                        </tr>
                    </tbody>
                </table>
                <JR-Pagination v-show="total_item>10" @chageEvent="change_pagination($event)" :total_item="total_item" :per_page="params.per_page"
                    :page="params.page"></JR-Pagination>
            </div>
            <JR-Skeleton v-show="table_loading"></JR-Skeleton>
            <JR-No-Date v-show="table_list.length == 0 && !table_loading"></JR-No-Date>
        </div>



    </div>
</template>
<script setup>
import { ref, onMounted } from 'vue';
import memberService from "@/service/services/memberService"
const table_loading = ref(false);
const table_list = ref([]);
const total_item = ref(10);
const params = ref({
    page: 1,
    per_page: 10,
    search: ''
});



function change_pagination(data) {
    params.value.page = data.page;
    params.value.per_page = data.per_page;
    get_list(params.value)
}


function get_list(payload) {
    table_loading.value = true;
    memberService.get_users(payload).then((res) => {
        total_item.value = res.data.total_item;
        let number = (params.value.page - 1) * params.value.per_page;
        res.data.data.forEach((item) => {
            number++;
            item.number = number;
        });
        table_list.value = res.data.data;
    }).finally(() => {
        table_loading.value = false;
    })
}







onMounted(() => {
    get_list(params.value)
})

</script>
