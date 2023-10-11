<template>
    <div class="pt-4  select-none ">
        <div class="grid grid-cols-4">
            <div></div>
            <div></div>
            <div></div>
            <div class="flex justify-end">
                <JR-Button label="Qo'shish" class="w-auto" :iconLeft="'plus-circle'" @click="login()"></JR-Button>
            </div>
        </div>

        <div class="grid grid-cols-1 mt-8 pb-20">
            <div class="overflow-x-auto">
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
                            <td class="text-center p-2 font-semibold xl:text-base lg:text-base text-sm">810</td>
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
            </div>
            <JR-Pagination @chageEvent="logevent"  :total_item="1000" :per_page="20" :page="1"></JR-Pagination>
        </div>
        
    </div>
    <JR-Modal>
        <template v-slot:header>
    <!-- content for the header slot -->
    <h2 @click="logevent('data')">Header content</h2>
  </template>

    </JR-Modal>
</template>
<script setup>


function logevent(data){
    console.log(data);
}

</script>
