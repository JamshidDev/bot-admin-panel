<template>
    <div class="overflow-x-auto w-full">
        <table class="table-auto border-collaps bg-white w-full">
            <tbody class="p-10">
                <tr class="gap-4" v-for="item in 10" :key="item">
                    <td class="p-4" style="width: 50px; max-width: 60px;">
                        <div class="jr-sketelon-card w-full max-w-[20px] h-[16px] overflow-hidden rounded-lg mx-auto">
                        </div>
                    </td>
                    <td class="p-4" style="width: 100px; max-width: 200px;">
                        <div class="jr-sketelon-card w-full max-w-[100px] h-[16px] overflow-hidden rounded-lg mx-auto">
                        </div>
                    </td>
                    <td class="p-4" style="width: 100px; max-width: 200px;">
                        <div class="jr-sketelon-card w-full max-w-[100px] h-[16px] overflow-hidden rounded-lg mx-auto">
                        </div>
                    </td>
                    <td class="p-4" style="width: 300px; max-width: 400px;">
                        <div class="jr-sketelon-card w-full max-w-[300px] h-[16px] overflow-hidden rounded-lg mx-auto">
                        </div>
                    </td>
                    <td class="p-4" style="width: 300px; max-width: 400px;">
                        <div class="jr-sketelon-card w-full max-w-[300px] h-[16px] overflow-hidden rounded-lg mx-auto">
                        </div>
                    </td>
                    <td class="p-4" style="width: 300px;">
                        <div class="jr-sketelon-card w-full max-w-[300px] h-[16px] overflow-hidden rounded-lg mx-auto">
                        </div>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script setup>

const props = defineProps({
})
</script>


