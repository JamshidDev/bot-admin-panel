<template>
  <div class="pt-4 page-card">
    <n-grid cols="1 s:2 m:2 l:2 xl:2 xxl:2" responsive="screen" style="margin-bottom: 20px">
      <n-grid-item>
        <n-input style="width:100%; max-width: 200px" v-model:value="params.search" type="text" placeholder="Qidiruv" />
      </n-grid-item>
      <n-grid-item>
        <n-space justify="end">
          <n-button type="info" @click="open_modal()">
            Qo'shish
          </n-button>
        </n-space>
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
                <th style="min-width: 200px">Xizmat nomi (uz)</th>
                <th style="min-width: 200px">Xizmat nomi (ru)</th>
                <th style="min-width: 100px; width:100px">Amallar</th>
              </tr>
              </thead>
              <tbody>
              <tr v-for="item in table_list">
                <td><span style="display: flex; justify-content: center; align-items: center">{{ item.number }}</span>
                </td>
                <td>{{ item.name_uz }}</td>
                <td>{{ item.name_ru }}</td>
                <td>
                  <n-space>
                    <n-button strong secondary circle type="info" @click="edit_modal(item)">
                      <template #icon>
                        <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"
                             viewBox="0 0 24 24">
                          <path
                              d="M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04a.996.996 0 0 0 0-1.41l-2.34-2.34a.996.996 0 0 0-1.41 0l-1.83 1.83l3.75 3.75l1.83-1.83z"
                              fill="currentColor"></path>
                        </svg>
                      </template>
                    </n-button>
                    <n-popconfirm
                        positive-text="Ha" negative-text="Yo'q"
                        @positive-click="delete_bank(item._id)"
                    >
                      <template #icon>
                        <n-icon color="warning">
                          <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"
                               viewBox="0 0 24 24">
                            <g fill="none">
                              <path
                                  d="M10.91 2.782a2.25 2.25 0 0 1 2.975.74l.083.138l7.759 14.009a2.25 2.25 0 0 1-1.814 3.334l-.154.006H4.243a2.25 2.25 0 0 1-2.041-3.197l.072-.143L10.031 3.66a2.25 2.25 0 0 1 .878-.878zm9.505 15.613l-7.76-14.008a.75.75 0 0 0-1.254-.088l-.057.088l-7.757 14.008a.75.75 0 0 0 .561 1.108l.095.006h15.516a.75.75 0 0 0 .696-1.028l-.04-.086l-7.76-14.008l7.76 14.008zM12 16.002a.999.999 0 1 1 0 1.997a.999.999 0 0 1 0-1.997zM11.995 8.5a.75.75 0 0 1 .744.647l.007.102l.004 4.502a.75.75 0 0 1-1.494.103l-.006-.102l-.004-4.502a.75.75 0 0 1 .75-.75z"
                                  fill="currentColor"></path>
                            </g>
                          </svg>
                        </n-icon>
                      </template>
                      <template #trigger>
                        <n-button strong secondary circle type="error">
                          <template #icon>
                            <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"
                                 viewBox="0 0 24 24">
                              <path d="M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z"
                                    fill="currentColor"></path>
                            </svg>
                          </template>
                        </n-button>
                      </template>
                      O'chirmoqchimisiz?
                    </n-popconfirm>
                  </n-space>
                </td>
              </tr>

              </tbody>
            </n-table>
            <n-space justify="space-between" style="margin-top: 20px">
              <span><span style="font-weight: 600">{{total_item}}</span> tadan <span style="font-weight: 600; margin-left: 20px">{{(params.page -1) * params.per_page}} - {{params.page * params.per_page}}</span> gacha ko'rsatilmoqda</span>
              <n-pagination

                  v-model:page="params.page"
                  v-model:page-size="params.per_page"
                  :page-count="Math.ceil(total_item /params.per_page)"
                  show-size-picker
                  :page-sizes="pageSizes"
                  :on-update:page="change_pagination"
                  :on-update:page-size ="change_per_page"
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
  },{
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


const change_pagination =(page)=> {
  params.value.page = page;
  get_list(params.value)
}

const change_per_page =(per_page)=>{
  params.value.page = 1;
  params.value.per_page = per_page;
  get_list(params.value)
}


function get_list(payload) {
  table_loading.value = true;
  generalService.get_categories(params.value).then((res) => {
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

const open_modal = () => {
  item_details.value.name_uz = null;
  item_details.value.name_ru = null;
  submitted.value = false;
  dialog.value = true;
  dialog_type.value = true;
}

const edit_modal = (data) => {
  edited_item_id.value = data._id;
  item_details.value.name_uz = data.name_uz;
  item_details.value.name_ru = data.name_ru;
  submitted.value = false;
  dialog.value = true
  dialog_type.value = false;
}

const add_bank = () => {
  formRef.value?.validate(
      (errors) => {
        if (!errors) {
          dialog.value = false;
          let data = {
            name_uz: item_details.value.name_uz,
            name_ru: item_details.value.name_ru,
          }
          if (dialog_type.value) {
            generalService.create_category({data}).finally(() => {
              get_list()
            })
          } else {
            generalService.update_category({category_id: edited_item_id.value, data}).finally(() => {
              get_list()
            })
          }
        }
      }
  );

}

const delete_bank = (id) => {
  generalService.delete_category({category_id: id}).finally(() => {
    get_list()
  })
}


onMounted(() => {
  get_list(params.value)
})

</script>
