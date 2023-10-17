<template>
    <div class="pt-4 ">
        <div class="grid xl:grid-cols-4 lg:grid-cols-4 grid-cols-1 gap-2">
            <JR-Input mask="###" type="text" v-model="params.search" class="w-full block" placeholder="Qidiruv..."
                @enterEvent="get_list(params)"></JR-Input>
            <div></div>
            <div></div>
            <div class="flex justify-end">
                <JR-Button label="Qo'shish" class="w-auto" :iconLeft="'plus-circle'" @click="open_modal()"></JR-Button>
            </div>
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
                            <th style="min-width: 100px; width: 200px;">Ismi</th>
                            <th style="min-width: 100px; width: 200px;">Username</th>
                            <th style="min-width: 100px; width: 200px;">Holati </th>
                            <th style="min-width: 100px; width: 200px;">Sana</th>

                        </tr>
                    </thead>
                    <tbody>
                        <tr class="bg-white border-b-[20px] border-[#f7f7f7] overflow-hidden" v-for="item in table_list"
                            :key="item._id">
                            <td class="text-center p-2 text-sm">{{ item.number }}</td>
                            <td class="p-2">
                                <JR-Avatar class="w-[36px] border-2 border-blue mx-auto"></JR-Avatar>
                            </td>
                            <td class="text-center p-2 xl:text-base lg:text-base text-sm">32424234
                            </td>
                            <td class="text-center p-2 xl:text-base lg:text-base text-sm">Jamshid Raximov
                            </td>
                            <td class="text-center p-2 text-blue  xl:text-base lg:text-base text-sm">
                                @jamacoder
                            </td>
                            <td class="p-2 xl:text-base lg:text-base text-sm text-center">
                                <span class="px-4 py-[2px] bg-[#b0fda931] text-[#46c93a] text-sm rounded-md border border-[#46c93a] shadow-lg ">A'zo</span>
                            </td>
                            <td class="p-2 xl:text-base lg:text-base text-sm text-center">17-04-2023</td>

                        </tr>
                    </tbody>
                </table>
                <JR-Pagination @chageEvent="change_pagination($event)" :total_item="total_item" :per_page="params.per_page"
                    :page="params.page"></JR-Pagination>
            </div>
            <JR-Skeleton v-show="table_loading"></JR-Skeleton>
            <JR-No-Date v-show="table_list.length == 0 && !table_loading"></JR-No-Date>


        </div>



    </div>
    <JR-Modal v-model="add_dialog" header="Yangi bank qo'shish">
        <template v-slot:body>
            <div class="grid grid-cols-1 p-4 gap-2">
                <JR-Input mask="###" type="number" v-model="bank_details.debet" :invalid="submitted"
                    :errorMessage="'Username kiritilishi shart!'" label="Debit raqam" class="w-full block"
                    placeholder="Kiriting"></JR-Input>
                <JR-Input mask="###" type="number" v-model="bank_details.kredit" :invalid="submitted"
                    :errorMessage="'Username kiritilishi shart!'" label="Kredit raqam" class="w-full block"
                    placeholder="Kiriting"></JR-Input>
                <JR-Input mask="###" type="text" v-model="bank_details.result_uz" :invalid="submitted"
                    :errorMessage="'Username kiritilishi shart!'" label="Natijani kiriting(uz)" class="w-full block"
                    placeholder="Kiriting"></JR-Input>
                <JR-Input mask="###" type="text" v-model="bank_details.result_ru" :invalid="submitted"
                    :errorMessage="'Username kiritilishi shart!'" label="Natijani kiriting(ru)" class="w-full block"
                    placeholder="Kiriting"></JR-Input>
            </div>
        </template>
        <template v-slot:footer>
            <div class="flex justify-end p-2">
                <JR-Button label="Saqlash" class="w-auto" :iconLeft="'save'" @click="add_bank()"></JR-Button>
            </div>

        </template>

    </JR-Modal>
</template>
<script setup>
import { ref, onMounted } from 'vue';
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

const bank_details = ref({
    debet: null,
    kredit: null,
    result_uz: null,
    result_ru: null,
})

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
