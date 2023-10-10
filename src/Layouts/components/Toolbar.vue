<template>
   <div class="w-full xl:h-[70px] lg:h-[70px] h-[56px] flex justify-between items-center border-b-[1px] border-[#dde1ef] px-4">
    <div>
      <JR-Icon-Button :icon="'menu'" @click="$emit('sidebarEvent')" ></JR-Icon-Button>
    </div>
    <div class="flex gap-2">
      <JR-Icon-Button :icon="'sun'"></JR-Icon-Button>

      <JR-Icon-Button :icon="'bell'"></JR-Icon-Button>
    </div>
   </div>
</template>

<script setup>

defineEmits(['sidebarEvent']);
</script>
