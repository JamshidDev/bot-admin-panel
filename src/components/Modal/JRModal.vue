<template>
    <div v-show="modelValue" class="fixed w-full min-h-screen top-0 bottom-0 left-0 right-0 z-[100] ">
        <div class="w-full min-h-full bg-color-modal-bg-bolor flex justify-center items-start " @click.self ="$emit('update:modelValue', false)">

            <div class="bg-white  mt-20 rounded-lg shadow-md jr-modal-animation w-full" :class="breakpoint">
                <header class="border-b-[1px] border-b-input-border p-4">
                    <slot name="header">
                        <div class="w-full flex justify-between relative items-center ">
                            <h4 class="text-xl font-medium ">{{ header }}</h4>
                            <!-- <JR-Icon-Button :icon="'x-circle'"></JR-Icon-Button> -->
                            <vue-feather @click="$emit('update:modelValue', false)" class="font-medium cursor-pointer hover:scale-125 transition-all text-gray  " type="x-circle" size="24"></vue-feather>
                        </div>
                    </slot>
                </header>

                <body class="p-2">
                    <slot name="body"></slot>
                </body>
                <footer  class="border-t-[1px] border-t-input-border p-2">
                    <slot name="footer">

                    </slot>
                </footer>
            </div>

        </div>
    </div>
</template>

<script setup>

const props = defineProps({
    modelValue: {
        type: Boolean,
        default: false
    },
    header:{
        type: String,
        default: 'Header title'
    },
    breakpoint:{
        type: String,
        default: 'xl:w-[600px] lg:w-[600px] md:w-[600px]'
    }
})

defineEmits(['update:modelValue']);



</script>


