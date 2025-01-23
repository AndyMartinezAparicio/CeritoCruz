<script setup>

import { useClassicTicTacToe } from "../stores/classicTicTacToe.js";
const classicTicTacToe = useClassicTicTacToe();

import { ref } from 'vue';

const menu = ref(false);
const selectedMode = ref('Clásico');

const handleSave = () => {

  if (selectedMode.value == 'Clásico') {
    classicTicTacToe.setMode(true)
  }
  else {
    classicTicTacToe.setMode(false)
  }
  classicTicTacToe.ResetGame()
}


</script>



<template>
  <div class="text-center">
    <v-menu v-model="menu" :close-on-content-click="false" location="top center">
      <template v-slot:activator="{ props }">
        <v-btn v-bind="props" prepend-icon="mdi-cog">
          Opciones
        </v-btn>
      </template>

      <v-card min-height="400">
        <v-container>

          <v-list>
            <v-list-item prepend-icon="mdi-cog-outline" title="OPCIONES" subtitle="Un par de configuraciones sencillas">

            </v-list-item>
          </v-list>

          <v-divider></v-divider>

          <v-list>
            <v-list-item>
              <v-item-group mandatory>
                <v-container>
                  <h4>Contra quién va a jugar:</h4>
                  <v-row>
                    <v-col>
                      <v-item>
                        <v-btn color="primary-darken-1" class="d-flex align-center" height="60" width="120"
                          prepend-icon="mdi-account-supervisor">
                          Humano
                        </v-btn>
                      </v-item>
                    </v-col>
                    <v-col>
                      <v-item v-slot="{ isSelected, toggle }">
                        <v-btn class="d-flex align-center" height="60" width="120" prepend-icon="mdi-robot">
                          IA
                          <v-tooltip  activator="parent" location="bottom">Aún no está implementado</v-tooltip>
                        </v-btn>
                      </v-item>
                    </v-col>
                  </v-row>
                </v-container>
              </v-item-group>

            </v-list-item>

            <v-list-item>
              <v-item-group mandatory v-model="selectedMode">
                <v-container>
                  <h4>Modo de juego:</h4>
                  <v-row>
                    <v-col>
                      <v-item v-slot="{ isSelected, toggle }" value="Clásico">
                        <v-btn :color="isSelected ? 'primary-darken-1' : ''" class="d-flex align-center" height="60"
                          width="120" prepend-icon="mdi-gamepad-variant" dark @click="toggle">
                          Clásico
                          <v-tooltip activator="parent" location="bottom">El de toda la vida</v-tooltip>
                        </v-btn>
                      </v-item>
                    </v-col>
                    <v-col>
                      <v-item v-slot="{ isSelected, toggle }" value="Avanzado">
                        <v-btn :color="isSelected ? 'primary-darken-1' : ''" class="d-flex align-center" height="60"
                          width="120" prepend-icon="mdi-controller" dark @click="toggle">
                          Avanzado
                          <v-tooltip activator="parent" location="bottom">Una modalidad sin empates</v-tooltip>
                        </v-btn>
                      </v-item>
                    </v-col>
                  </v-row>
                </v-container>
              </v-item-group>

            </v-list-item>
          </v-list>

          <v-card-actions>
            <v-spacer></v-spacer>

            <v-btn variant="text" @click="menu = false">
              Cancelar
            </v-btn>
            <v-btn color="primary" variant="text" @click="menu = false, handleSave()">
              Guardar
            </v-btn>
          </v-card-actions>
        </v-container>
      </v-card>
    </v-menu>
  </div>
</template>
