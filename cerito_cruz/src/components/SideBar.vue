<template>
    <v-layout>
        <v-app-bar density="compact">

            <v-app-bar-title class="text-h5 ">👾Cerito Cruz Web👾</v-app-bar-title>

            <template v-slot:append>
                <v-btn icon="mdi-github" href="https://github.com/andymartinezaparicio"  target="_blank"></v-btn>
            </template>
        </v-app-bar>

    </v-layout>
</template>

<script setup>
import { ref } from 'vue';
// Define the state for the drawer
const drawer = ref(false);

</script>

<style scoped></style>