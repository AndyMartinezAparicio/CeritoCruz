<template>
    <v-layout>
        <v-app-bar density="compact">
            <template v-slot:prepend>
                <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
            </template>

            <v-app-bar-title class="text-h5 ">👾Cerito Cruz Web👾</v-app-bar-title>

            <template v-slot:append>
                <v-btn icon="mdi-github" href="https://github.com/AndyMAG-dev"  target="_blank"></v-btn>
            </template>
        </v-app-bar>

        <v-main>
            <v-navigation-drawer v-model="drawer" temporary>
                
                <v-list density="compact">

                    <v-list-subheader>Inicio</v-list-subheader>
                    <v-divider></v-divider>
                    <v-list-item link title="Página principal" to="/" prepend-icon="mdi-home"></v-list-item>
                    <v-list-item link title="Informacion Extra" to="/about" prepend-icon="mdi-information"></v-list-item>
                </v-list>

                <v-list density="compact">
                    <v-list-subheader>Juegos</v-list-subheader>
                    <v-divider></v-divider>
                    <v-list-item link title="3x3 Original" to="/originalGame" prepend-icon="mdi-numeric-3-box-multiple-outline"></v-list-item>
                    <v-list-item link title="5x5" subtitle="No Disponible" disabled prepend-icon="mdi-numeric-5-box-multiple-outline"></v-list-item>
                    <v-list-item link title="7x7" subtitle="No Disponible" disabled prepend-icon="mdi-numeric-7-box-multiple-outline"></v-list-item>
                </v-list>

            </v-navigation-drawer>
        </v-main>
    </v-layout>
</template>

<!-- <template>
  <v-card>
      <v-layout>
          <v-app-bar>
              <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
      
              <v-toolbar-title>Tic Tac Toe  |  Tres en raya  |  Cerito Cruz</v-toolbar-title>
      
              <v-spacer></v-spacer>
      
              <v-btn icon>
                  <v-icon>mdi-export</v-icon>
              </v-btn>
          </v-app-bar>
          <v-navigation-drawer v-model="drawer" temporary>

              <v-divider></v-divider>

              <v-list density="compact" nav>
                  <RouterLink to="/">
                      <v-list-item prepend-icon="mdi-view-dashboard" title="Home" value="home"></v-list-item>
                  </RouterLink>
                  <RouterLink to="/about">
                      <v-list-item prepend-icon="mdi-forum" title="About" value="about"></v-list-item>
                  </RouterLink>
              </v-list>
            </v-navigation-drawer>
      
      </v-layout>
  </v-card>
</template> -->


<script setup>
import { ref } from 'vue';
import { RouterLink, RouterView } from 'vue-router'
// Define the state for the drawer
const drawer = ref(false);

</script>

<style scoped></style>