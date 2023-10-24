<template>
  <div class="pt-4 page-card">
    <n-grid cols="1 s:2 m:2 l:2 xl:2 xxl:2" responsive="screen" style="margin-bottom: 20px">
      <n-grid-item>
        <n-input style="width:100%; max-width: 200px" v-model:value="params.search" type="text" placeholder="Qidiruv"/>
      </n-grid-item>
      <n-grid-item>
      </n-grid-item>
    </n-grid>
    <div class="grid grid-cols-1 mt-8 pb-20">
      <n-grid cols="1">
        <n-grid-item>
          <div>
            <n-spin v-if="table_loading" style="min-height: 200px; width: 100%">
              <template #description>
                Ma'lumotlar yuklanmoqda
              </template>
            </n-spin>
          </div>
          <div style="overflow-x: auto" v-show="table_list.length > 0 && !table_loading">
            <n-table :bordered="false" :single-line="false" size="small" class="table-border-x">
              <thead>
              <tr>
                <th style="min-width:40px; width: 40px;">No</th>
                <th style="min-width:80px; width: 80px">Avatar</th>
                <th style="min-width:100px; width: 100px">Telegram id</th>
                <th style="min-width: 200px">Ism</th>
                <th style="min-width:100px; width: 150px">Username</th>
                <th style="min-width:100px; width: 100px">Izdoshlar</th>
                <th style="min-width:100px; width: 100px">Referal id</th>
              </tr>
              </thead>
              <tbody>
              <tr v-for="item in table_list">
                <td><span style="display: flex; justify-content: center; align-items: center">{{ item.number }}</span>
                </td>
                <td>
                <n-space justify="center">
                  <n-avatar
                      round
                      size="small"
                      :src="user_avatar"
                  />
                </n-space>
                </td>
                <td>{{ item.user_id }}</td>
                <td>{{ item.fullName }}</td>
                <td>
                  <n-space v-if="item.username" justify="center">
                    <n-tag type="info" size="small" round>
                      {{ item.username }}
                    </n-tag>
                  </n-space>
                </td>
                <td>
                 <n-space justify="center">
                   <n-tag type="success" size="medium" round>
                     {{ item.invited_users }}
                   </n-tag>
                 </n-space>
                </td>
                <td>
                  <n-space v-if="item.referal_id" justify="center">
                    <n-tag type="info" size="small" round>
                      {{ item.referal_id }}
                    </n-tag>
                  </n-space>
                </td>


              </tr>

              </tbody>
            </n-table>
            <n-space justify="space-between" style="margin-top: 20px">
              <span><span style="font-weight: 600">{{ total_item }}</span> tadan <span
                  style="font-weight: 600; margin-left: 20px">{{ (params.page - 1) * params.per_page }} - {{ params.page * params.per_page }}</span> gacha ko'rsatilmoqda</span>
              <n-pagination

                  v-model:page="params.page"
                  v-model:page-size="params.per_page"
                  :page-count="Math.ceil(total_item /params.per_page)"
                  show-size-picker
                  :page-sizes="pageSizes"
                  :on-update:page="change_pagination"
                  :on-update:page-size="change_per_page"
              />
            </n-space>
          </div>

          <JR-No-Date v-show="table_list.length == 0 && !table_loading"></JR-No-Date>
        </n-grid-item>
      </n-grid>

    </div>
  </div>
  <n-modal v-model:show="dialog" preset="card" size="medium" style="width: 600px"
           :title="dialog_type? `Xizmat qo'shish` : `Xizmatni tahrirlash`" :bordered="true">
    <n-form ref="formRef" :model="item_details" :rules="rules">

      <n-form-item label="Xizmat nomi (uz)" path="name_uz">
        <n-input
            v-model:value="item_details.name_uz"
            type="text"
            placeholder="Natija (uz)"
        />
      </n-form-item>
      <n-form-item label="Xizmat nomi (ru)" path="name_ru">
        <n-input
            v-model:value="item_details.name_ru"
            type="text"
            placeholder="Natija (ru)"
        />
      </n-form-item>
      <n-form-item>
        <n-space justify="end">
          <n-button type="info" @click="add_bank()">
            Saqlash
          </n-button>
        </n-space>
      </n-form-item>
    </n-form>
  </n-modal>
</template>
<script setup>
import {ref, onMounted, defineComponent} from 'vue';
import generalService from "@/service/services/generalService.js";
import user_avatar from '../../assets/picture/member-avatar.png'

const dialog = ref(false);
const submitted = ref(false);
const table_loading = ref(false);
const dialog_type = ref(true);
const edited_item_id = ref(null);
const table_list = ref([]);
const total_item = ref(10);
const params = ref({
  page: 1,
  per_page: 10,
  search: ''
});
const pageSizes = [
  {
    label: '10 tadan',
    value: 10
  },
  {
    label: '20 tadan',
    value: 20
  }, {
    label: '30 tadan',
    value: 30
  },
  {
    label: '40 tadan',
    value: 40
  },

]


const item_details = ref({
  name_uz: null,
  name_ru: null,
})


const formRef = ref(null)
const rules = {
  name_uz: [
    {
      required: true,
      message: "Maydon to'ldirilishi shart!",
      trigger: ["input", "blur"]
    }
  ],
  name_ru: [
    {
      required: true,
      message: "Maydon to'ldirilishi shart!",
      trigger: ["input", "blur"]
    }
  ]
}


const change_pagination = (page) => {
  params.value.page = page;
  get_list(params.value)
}

const change_per_page = (per_page) => {
  params.value.page = 1;
  params.value.per_page = per_page;
  get_list(params.value)
}


function get_list(payload) {
  table_loading.value = true;
  generalService.get_user_list(params.value).then((res) => {
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
