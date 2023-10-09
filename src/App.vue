<template>
  <router-view></router-view>
  <notifications position="top right" class="mt-2 " :closeOnClick="false" :pauseOnHover="true" :duration="2000" />
</template>