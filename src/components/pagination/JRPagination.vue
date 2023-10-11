<template>
    <div class="w-full flex xl:justify-between lg:justify-between justify-center  items-center mt-2">
        <span class="text-sm font-normal xl:inline-block lg:inline-block hidden"><span class="mr-6">{{ total_item }} tadan</span> {{ (current_page - 1) * page_row
        }}
            - {{ current_page * page_row }} ko'rsatilmoqda</span>
        <div class="flex gap-2">
            <span class="text-sm mr-10 gap-2 items-center xl:flex lg:flex hidden" >
                Ko'rsatish <select class="w-[60px] h-[30px] border border-input-border rounded-lg px-2 focus:outline-none shadow-lg cursor-pointer" v-model="page_row" @change="change_page_row()">
                    <option v-for="item in per_page_list" :alue="item">{{ item }}</option>
                   
                </select>
            </span>
            <div :class="(current_page == 1) ? 'opacity-40 cursor-not-allowed' : ' cursor-pointer shadow-lg '"
                @click="prev_btn()"
                class="w-[30px] h-[30px] border border-input-border rounded-lg flex justify-center items-center">
                <vue-feather type="chevron-left" size="24"></vue-feather>
            </div>
            <div v-for="item in page_list" :key="item" :class="[(current_page == item) && 'bg-blue text-white']"
                @click="change_pagination(item, total_page_count)"
                class="cursor-pointer text-sm  px-3 h-[30px] shadow-lg select-none   border border-input-border rounded-lg flex justify-center items-center">
                {{ item }}
            </div>
            <div :class="(current_page == total_page_count) ? 'opacity-40 cursor-not-allowed' : ' cursor-pointer shadow-lg'"
                @click="next_btn()"
                class=" w-[30px] h-[30px] border border-input-border rounded-lg flex justify-center items-center">
                <vue-feather type="chevron-right" size="24"></vue-feather>
            </div>
        </div>

    </div>
</template>
<script setup>
import { ref, onMounted, watch, computed } from 'vue';

const props = defineProps({
    total_item: {
        type: Number,
        default: 10,
    },
    page: {
        type: Number,
        default: 1,
    },
    per_page: {
        type: Number,
        default: 10,
    }
})
const emit = defineEmits(['chageEvent'])


const current_page = ref(1);
const page_row = ref(10);
const per_page_list = [10, 20, 30, 40, 50];
const page_list = ref([]);

const total_page_count = computed(() => {
    return Math.ceil(props.total_item / page_row.value)
})
watch(current_page, (newValue, oldValue) => {

})

const change_pagination = (selected_page, total) => {
    console.log(total);
    let dots = '...'
    if (selected_page == dots) return;

    current_page.value = selected_page;
    page_list.value = [];

    if (total <= 5) {
        for (let i = 1; i <= total; i++) {
            page_list.value.push(i)
        }
    } else {

        if (selected_page < Math.ceil(total / 2)) {

            if (selected_page == 1) {
                page_list.value[0] = selected_page;
                page_list.value[1] = selected_page + 1;
                page_list.value[2] = selected_page + 2;
            } else {
                page_list.value[0] = selected_page - 1;
                page_list.value[1] = selected_page + 0;
                page_list.value[2] = selected_page + 1;
            }

            page_list.value[3] = dots;
            page_list.value[4] = total - 1;
            page_list.value[5] = total;


        } else {
            page_list.value[0] = 1
            page_list.value[1] = 2
            page_list.value[2] = dots;

            if (selected_page == total) {
                page_list.value[3] = selected_page - 2;
                page_list.value[4] = selected_page - 1;
                page_list.value[5] = selected_page;
            } else {
                page_list.value[3] = selected_page - 1;
                page_list.value[4] = selected_page;
                page_list.value[5] = selected_page + 1;
            }
        }


    }

    emit('chageEvent', {
        page: current_page.value,
        per_page: page_row.value,
    })

    console.log(page_list);
}

const prev_btn = () => {
    if (current_page.value == 1) return
    change_pagination(current_page.value - 1, total_page_count.value)
}

const next_btn = () => {
    if (current_page.value == total_page_count.value) return
    change_pagination(current_page.value + 1, total_page_count.value)
}

const change_page_row = ()=>{
    change_pagination(1, total_page_count.value)
}




onMounted(() => {
    current_page.value = props.page;
    page_row.value = props.per_page;
    change_pagination(props.page, total_page_count.value)
})

</script>
