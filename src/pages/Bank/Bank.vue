<template>
    <div class="pt-4  select-none ">
        <div class="grid xl:grid-cols-4 lg:grid-cols-4 grid-cols-1 gap-2">
            <JR-Input mask="###" type="text" v-model="search" class="w-full block" placeholder="Qidiruv..."></JR-Input>
            <div></div>
            <div></div>
            <div class="flex justify-end">
                <JR-Button label="Qo'shish" class="w-auto" :iconLeft="'plus-circle'" @click="open_modal()"></JR-Button>
            </div>
        </div>

        <div class="grid grid-cols-1 mt-8 pb-20">
            <div class="overflow-x-auto" v-show="true">
                <table class="table-auto border-collaps bg-transparent w-full">
                    <thead class="border-input-border">
                        <tr
                            class="text-[#B1B1B8] uppercase text-sm font-normal text-center border-b-[10px] border-[#f7f7f7]">
                            <th style="min-width: 30px; width:50px;">No</th>
                            <th style="min-width: 100px; width: 120px;">Debit</th>
                            <th style="min-width: 100px; width: 120px;">Kredit</th>
                            <th style="min-width: 200px;">Natija(uz) </th>
                            <th style="min-width: 200px;">Natija(ru)</th>
                            <th style="min-width: 100px;">Amallar</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr class="bg-white border-b-[20px] border-[#f7f7f7] overflow-hidden" v-for="item in 10"
                            :key="item">
                            <td class="text-center p-2 text-sm">{{ item }}</td>
                            <td class="text-center p-2 font-semibold xl:text-base lg:text-base text-sm">100</td>
                            <td class="text-center p-2 font-semibold xl:text-base lg:text-base text-sm">0810</td>
                            <td class="p-2 xl:text-base lg:text-base text-sm">Xo`jalik usulida qurilgan asosiy vosita
                                hisobga olindi va foydalanishga topshirildi</td>
                            <td class="p-2 xl:text-base lg:text-base text-sm">Принят к учету и введен в эксплуатацию
                                основное средство, построенный хозспособом</td>
                            <td class="p-2">
                                <div class="flex gap-4">
                                    <JR-Icon-Button :icon="'edit'"></JR-Icon-Button>
                                    <JR-Icon-Button :icon="'trash-2'"></JR-Icon-Button>
                                </div>
                            </td>
                        </tr>
                    </tbody>
                </table>
                <JR-Pagination @chageEvent="logevent" :total_item="1000" :per_page="20" :page="1"></JR-Pagination>
            </div>
            <JR-No-Date v-show="false"></JR-No-Date>

        </div>
       


    </div>
    <JR-Modal v-model="add_dialog" header="Yangi bank qo'shish">
        <template v-slot:body>
            <div class="grid grid-cols-1 p-4 gap-2">
                <JR-Input mask="###" type="number" v-model="bank_details.debit" :invalid="submitted"
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
import { ref } from 'vue';

const add_dialog = ref(false);
const submitted = ref(false);
const search = ref('');

const bank_details = ref({
    debit: null,
    kredit: null,
    result_uz: null,
    result_ru: null,
})

function logevent(data) {
}



const open_modal = () => {
    submitted.value = false;
    add_dialog.value = true

}

const add_bank = () => {
    submitted.value = true;



}

</script>
