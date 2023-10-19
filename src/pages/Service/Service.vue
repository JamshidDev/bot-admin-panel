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
                            class="text-[#B1B1B8] uppercase text-sm font-normal text-center border-b-[10px] border-[#f7f7f7]">
                            <th style="min-width: 30px; width:50px;">No</th>
                            <th style="min-width: 200px;">Xizmat nomi(uz) </th>
                            <th style="min-width: 200px;">Xizmat nomi(ru)</th>
                            <th style="min-width: 80px; width:120px;">Amallar</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr class="bg-white border-b-[20px] border-[#f7f7f7] overflow-hidden" v-for="item in table_list"
                            :key="item._id">
                            <td class="text-center p-2 text-sm">{{ item.number }}</td>
                            <td class="p-2 xl:text-base lg:text-base text-sm text-center">{{ item.name_uz }}</td>
                            <td class="p-2 xl:text-base lg:text-base text-sm text-center">{{ item.name_ru }}</td>
                            <td class="p-2">
                                <div class="flex justify-between">
                                    <JR-Icon-Button :icon="'edit'" @click="edit_modal(item)"></JR-Icon-Button>
                                    <JR-Icon-Button :icon="'trash-2'" @click="delete_bank(item._id)"></JR-Icon-Button>
                                </div>
                            </td>
                        </tr>
                    </tbody>
                </table>
                <JR-Pagination @chageEvent="change_pagination($event)" v-show="total_item > 10" :total_item="total_item"
                    :per_page="params.per_page" :page="params.page"></JR-Pagination>
            </div>
            <JR-Skeleton v-show="table_loading"></JR-Skeleton>
            <JR-No-Date v-show="table_list.length == 0 && !table_loading"></JR-No-Date>


        </div>



    </div>
    <JR-Modal v-model="add_dialog" :header="dialog_type? 'Yangi xizmat qo\'shish' : 'Xizmatni tahrirlash'">
        <template v-slot:body>
            <div class="grid grid-cols-1 p-4 gap-2">
                <JR-Input mask="###" type="text" v-model="item_details.name_uz" :invalid="submitted"
                    :errorMessage="'Username kiritilishi shart!'" label="Xizmat nomi (uz)" class="w-full block"
                    placeholder="Kiriting"></JR-Input>
                <JR-Input mask="###" type="text" v-model="item_details.name_ru" :invalid="submitted"
                    :errorMessage="'Username kiritilishi shart!'" label="Xizmat nomi (ru)" class="w-full block"
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
import generalService from "@/service/services/generalService"
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

const item_details = ref({
    name_uz: null,
    name_ru: null,
})

function change_pagination(data) {
    params.value.page = data.page;
    params.value.per_page = data.per_page;
    get_list(params.value)
}


function get_list(payload) {
    table_loading.value = true;
    generalService.get_categories(payload).then((res) => {
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
    for (const key in item_details.value) {
        item_details.value[key] = null;
    }
    submitted.value = false;
    add_dialog.value = true;
    dialog_type.value = true;

}

const edit_modal = (data) => {
    edited_item_id.value = data._id;
    item_details.value.name_uz = data.name_uz;
    item_details.value.name_ru = data.name_ru;
    submitted.value = false;
    add_dialog.value = true
    dialog_type.value = false;
}

const add_bank = () => {
    submitted.value = true;
    table_loading.value = true;
    add_dialog.value = false;
    if (dialog_type.value) {
        generalService.create_category({ data: item_details.value }).finally(() => {
            get_list()
        })
    } else {
        generalService.update_category({ category_id: edited_item_id.value, data: item_details.value }).finally(() => {
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
            generalService.delete_category({ category_id: id }).finally(() => {
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
