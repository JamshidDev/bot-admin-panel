<template>
    <div class="pt-4 ">
        <div class="grid xl:grid-cols-4 lg:grid-cols-4 grid-cols-1 gap-2">
            <JR-Input mask="###" type="text" v-model="params.search" class="w-full block" placeholder="Qidiruv..."
                @enterEvent="get_list(params)"></JR-Input>
            <div></div>
            <div></div>
            <div class="flex justify-end">
              <n-button type="info">
              Qo'shish
            </n-button>

                <JR-Button label="Qo'shish" class="w-auto" :iconLeft="'plus-circle'" @click="open_modal()"></JR-Button>
            </div>
        </div>
        <div class="grid grid-cols-1 mt-8 pb-20">
            <div class="overflow-x-auto" v-show="table_list.length > 0 && !table_loading">
<!--                <table class="table-auto border-collaps bg-transparent w-full">-->
<!--                    <thead class="border-input-border">-->
<!--                        <tr-->
<!--                            class="text-[#B1B1B8] uppercase text-sm font-normal text-center border-b-[10px] border-[#f7f7f7]">-->
<!--                            <th style="min-width: 30px; width:50px;">No</th>-->
<!--                            <th style="min-width: 100px; width: 120px;">Debit</th>-->
<!--                            <th style="min-width: 100px; width: 120px;">Kredit</th>-->
<!--                            <th style="min-width: 200px;">Natija(uz) </th>-->
<!--                            <th style="min-width: 200px;">Natija(ru)</th>-->
<!--                            <th style="min-width: 80px; width:120px;">Amallar</th>-->
<!--                        </tr>-->
<!--                    </thead>-->
<!--                    <tbody>-->
<!--                        <tr class="bg-white border-b-[20px] border-[#f7f7f7] overflow-hidden" v-for="item in table_list"-->
<!--                            :key="item._id">-->
<!--                            <td class="text-center p-2 text-sm">{{ item.number }}</td>-->
<!--                            <td class="text-center p-2  xl:text-base lg:text-base text-sm">{{ item.debet }}-->
<!--                            </td>-->
<!--                            <td class="text-center p-2  xl:text-base lg:text-base text-sm">-->
<!--                                {{ item.kredit }}-->
<!--                            </td>-->
<!--                            <td class="p-2 xl:text-base lg:text-base text-sm text-center">{{ item.result_uz }}</td>-->
<!--                            <td class="p-2 xl:text-base lg:text-base text-sm text-center">{{ item.result_ru }}</td>-->
<!--                            <td class="p-2">-->
<!--                                <div class="flex justify-between">-->
<!--                                    <JR-Icon-Button :icon="'edit'" @click="edit_modal(item)"></JR-Icon-Button>-->
<!--                                    <JR-Icon-Button :icon="'trash-2'" @click="delete_bank(item._id)"></JR-Icon-Button>-->
<!--                                </div>-->
<!--                            </td>-->
<!--                        </tr>-->
<!--                    </tbody>-->
<!--                </table>-->

              <n-table :bordered="false" :single-line="false" size="small">
                <thead>
                <tr>
                  <th style="min-width:40px; width: 40px;">No</th>
                  <th style="width: 80px;">Debet</th>
                  <th style="width: 80px">Kredit</th>
                  <th>Natija (uz)</th>
                  <th>Natija (ru)</th>
                  <th style="width: 140px">Amallar</th>
                </tr>
                </thead>
                <tbody>
                <tr v-for="item in table_list">
                  <td > <span class="flex justify-center items-center">{{ item.number }}</span> </td>
                  <td>{{ item.debet }}</td>
                  <td>{{ item.kredit }}</td>
                  <td>{{ item.result_uz }}</td>
                  <td>{{ item.result_ru }}</td>
                  <td>
                    <n-space >
                      <n-button strong secondary circle type="info">
                        <template #icon>
                          <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 24 24"><path d="M16 1H4c-1.1 0-2 .9-2 2v14h2V3h12V1zm3 4H8c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h11c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2zm0 16H8V7h11v14z" fill="currentColor"></path></svg>
                        </template>
                      </n-button>
                    <n-button strong secondary circle type="info">
                    <template #icon>
                      <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 24 24"><path d="M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04a.996.996 0 0 0 0-1.41l-2.34-2.34a.996.996 0 0 0-1.41 0l-1.83 1.83l3.75 3.75l1.83-1.83z" fill="currentColor"></path></svg>
                    </template>
                  </n-button>
                      <n-popconfirm
                          positive-text="Ha" negative-text="Yo'q"
                          @positive-click="handlePositiveClick"
                          @negative-click="handleNegativeClick"
                      >
                        <template #icon>
                          <n-icon color="warning">
                            <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 24 24"><g fill="none"><path d="M10.91 2.782a2.25 2.25 0 0 1 2.975.74l.083.138l7.759 14.009a2.25 2.25 0 0 1-1.814 3.334l-.154.006H4.243a2.25 2.25 0 0 1-2.041-3.197l.072-.143L10.031 3.66a2.25 2.25 0 0 1 .878-.878zm9.505 15.613l-7.76-14.008a.75.75 0 0 0-1.254-.088l-.057.088l-7.757 14.008a.75.75 0 0 0 .561 1.108l.095.006h15.516a.75.75 0 0 0 .696-1.028l-.04-.086l-7.76-14.008l7.76 14.008zM12 16.002a.999.999 0 1 1 0 1.997a.999.999 0 0 1 0-1.997zM11.995 8.5a.75.75 0 0 1 .744.647l.007.102l.004 4.502a.75.75 0 0 1-1.494.103l-.006-.102l-.004-4.502a.75.75 0 0 1 .75-.75z" fill="currentColor"></path></g></svg>
                          </n-icon>
                        </template>
                        <template #trigger>
                          <n-button strong secondary circle type="error">
                            <template #icon>
                              <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 24 24"><path d="M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z" fill="currentColor"></path></svg>
                            </template>
                          </n-button>
                        </template>
                       Haqiqattan ham bu harakatni davom ettirasizmi?
                      </n-popconfirm>


                  </n-space>
                  </td>
                </tr>

                </tbody>
              </n-table>

                <JR-Pagination @chageEvent="change_pagination($event)" v-show="total_item > 10" :total_item="total_item"
                    :per_page="params.per_page" :page="params.page"></JR-Pagination>
            </div>
            <JR-Skeleton v-show="table_loading"></JR-Skeleton>
            <JR-No-Date v-show="table_list.length == 0 && !table_loading"></JR-No-Date>


        </div>



    </div>
<!--    <JR-Modal v-model="add_dialog" :header="dialog_type? 'Yangi bank qo\'shish' : 'Bankni tahrirlash'">-->
<!--        <template v-slot:body>-->
<!--            <div class="grid grid-cols-1 p-4 gap-2">-->
<!--                <JR-Input mask="###" type="number" v-model="bank_details.debet" :invalid="submitted"-->
<!--                    :errorMessage="'Username kiritilishi shart!'" label="Debit raqam" class="w-full block"-->
<!--                    placeholder="Kiriting"></JR-Input>-->
<!--                <JR-Input mask="###" type="number" v-model="bank_details.kredit" :invalid="submitted"-->
<!--                    :errorMessage="'Username kiritilishi shart!'" label="Kredit raqam" class="w-full block"-->
<!--                    placeholder="Kiriting"></JR-Input>-->
<!--                <JR-Input mask="###" type="text" v-model="bank_details.result_uz" :invalid="submitted"-->
<!--                    :errorMessage="'Username kiritilishi shart!'" label="Natijani kiriting(uz)" class="w-full block"-->
<!--                    placeholder="Kiriting"></JR-Input>-->
<!--                <JR-Input mask="###" type="text" v-model="bank_details.result_ru" :invalid="submitted"-->
<!--                    :errorMessage="'Username kiritilishi shart!'" label="Natijani kiriting(ru)" class="w-full block"-->
<!--                    placeholder="Kiriting"></JR-Input>-->
<!--            </div>-->
<!--        </template>-->
<!--        <template v-slot:footer>-->
<!--            <div class="flex justify-end p-2">-->
<!--                <JR-Button label="Saqlash" class="w-auto" :iconLeft="'save'" @click="add_bank()"></JR-Button>-->
<!--            </div>-->

<!--        </template>-->

<!--    </JR-Modal>-->
  <n-modal v-model:show="add_dialog" preset="card" size="medium" style="width: 600px"
           :title="dialog_type? 'Yangi bank qo\'shish' : 'Bankni tahrirlash'" :bordered="true">
    <n-row>
      <n-col   span="24" style="margin-bottom: 10px">
        <n-text type="primary">Debet - Kredit</n-text>
        <n-input
            pair
            separator="-"
            :placeholder="['Debet', 'Kredit']"
            clearable
            v-model:value="pair_number"

        />
      </n-col>
      <n-col span="24" style="margin-bottom: 10px">
        <n-text type="primary">Natijani kiriitng (uz)</n-text>
        <n-input
            v-model:value="value"
            type="textarea"
            placeholder="Natija (uz)"
        />
      </n-col>
      <n-col span="24" style="margin-bottom: 10px">
        <n-text type="primary">Natijani kiriitng (ru)</n-text>
        <n-input
            v-model:value="value"
            type="textarea"
            placeholder="Natija (ru)"
        />
      </n-col>
    </n-row>


<!--    <template #action>-->
<!--      <div>action</div>-->
<!--    </template>-->
  </n-modal>
</template>
<script setup>
import {ref, onMounted, defineComponent} from 'vue';
import bankService from "@/service/services/bankService"
const add_dialog = ref(false);
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

const pair_number = ref(['34334', '345345'])


const bank_details = ref({
    debet: null,
    kredit: null,
    result_uz: null,
    result_ru: null,
})
const handleInputInput =(event)=> {
  console.log(event)
  console.log(pair_number.value)
}


function change_pagination(data) {
    params.value.page = data.page;
    params.value.per_page = data.per_page;
    get_list(params.value)
}


function get_list(payload) {
    table_loading.value = true;
    bankService.get_banks(payload).then((res) => {
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
    for (const key in bank_details.value) {
        bank_details.value[key] = null;
    }
    submitted.value = false;
    add_dialog.value = true;
    dialog_type.value = true;

}

const edit_modal = (data) => {
    edited_item_id.value = data._id;
    bank_details.value.debet = data.debet;
    bank_details.value.kredit = data.kredit;
    bank_details.value.result_uz = data.result_uz;
    bank_details.value.result_ru = data.result_ru;
    submitted.value = false;
    add_dialog.value = true
    dialog_type.value = false;
}

const add_bank = () => {
    submitted.value = true;
    table_loading.value = true;
    add_dialog.value = false;
    if (dialog_type.value) {
        bankService.create_banks({ data: bank_details.value }).finally(() => {
            get_list()
        })
    } else {
        bankService.update_banks({ bank_id: edited_item_id.value, data: bank_details.value }).finally(() => {
            get_list()
        })
    }
}

const delete_bank = (id) => {
    Swal.fire({
        title: "Haqiqattan ham o'chirmoqchimisiz?",
        showDenyButton: true,
        showCancelButton: false,
        confirmButtonText: 'Ha',
        denyButtonText: `Yo'q`,
    }).then((result) => {
        /* Read more about isConfirmed, isDenied below */
        if (result.isConfirmed) {
            bankService.delete_banks({ bank_id: id }).finally(() => {
                Swal.fire("Muvofaqiyatli o'chirildi!", '', 'success')
                get_list()

            })
        }
    })
}


onMounted(() => {
    get_list(params.value)
})

</script>
