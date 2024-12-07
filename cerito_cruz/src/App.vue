<script setup>
import { RouterLink, RouterView } from 'vue-router'
import SideBar from './components/SideBar.vue'

</script>

<template >
  <SideBar/>
  <v-app>
    <RouterView />
  </v-app>
</template>

<style>

</style>
