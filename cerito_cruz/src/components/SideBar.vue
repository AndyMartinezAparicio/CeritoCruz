<template>
    <v-layout>
        <v-app-bar density="compact">
            <template v-slot:prepend>
                <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
            </template>

            <v-app-bar-title>Tic Tac Toe Game</v-app-bar-title>

            <template v-slot:append>
                <v-btn icon="mdi-dots-vertical"></v-btn>
            </template>
        </v-app-bar>

        <v-main>
            <v-navigation-drawer v-model="drawer" temporary>
                
                <v-list-item title="Inicio"></v-list-item>
                <v-divider></v-divider>
                <v-list-item link title="Pagina principal" to="/" prepend-icon="mdi-view-dashboard"></v-list-item>
                <v-list-item link title="About" to="/about" prepend-icon="mdi-forum"></v-list-item>
                <v-divider></v-divider>
                <v-list-item title="Juegos"></v-list-item>
                <v-divider></v-divider>
                <v-list-item link title="List Item 1" to="/originalGame"></v-list-item>
                <v-list-item link title="List Item 2"></v-list-item>
                <v-list-item link title="List Item 3"></v-list-item>

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