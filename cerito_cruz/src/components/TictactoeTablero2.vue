<script setup>
import { useClassicTicTacToe } from "../stores/classicTicTacToe.js";
import { useSonidos } from "../stores/sonidos.js";

const classicTicTacToe = useClassicTicTacToe();
const sonidos = useSonidos();

</script>

<template>
    <v-container text-center fluid fill-height class="d-flex flex-column">
        <h1 class="text-h4 font-weight-bold mb-4">Tic Tac Toe</h1>
          
        <v-card-text>
            <h3 class="text-subtitle-1">Player {{ classicTicTacToe.player }}'s turn</h3>
        </v-card-text>
  
        <!-- Tablero -->
        <v-container class="d-flex flex-column">
            <div v-for="(row, x) in classicTicTacToe.board" :key="x" class="d-flex" >
                <div 
                v-for="(cell, y) in row" 
                :key="y"
                @click="classicTicTacToe.MakeMove(x, y)"
                :class="[
                    'casilla',
                    { 'text-orange': cell === 'X' },
                    { 'text-blue': cell === 'O' },
                    { 'winning-cell': classicTicTacToe.linea.includes(x * 3 + y) },
                    { 'pressed': cell !== '' }
                    ]"
                >

                <!-- :class="[`
                    casilla  
                    ${cell === 'X' ? 'text-orange' : 'text-blue'}
                    ${cell !== '' ? 'pressed' : ''}
                    `]" -->


                
                     <p>
                        {{ cell === 'X' ? 'X' : cell === 'O' ? 'O' : '' }}
                    </p>
                </div>
            </div>
        </v-container>
        <!-- Mensajes de estado -->
        <v-card-text v-if="classicTicTacToe.winner">
            <p class="text-h6 font-weight-bold mb-2">{{ `Player '${classicTicTacToe.winner}' wins!` }}</p>
        </v-card-text>
        <v-card-text v-if="classicTicTacToe.empate">
            <p class="text-h6 font-weight-bold mb-2">Se trancó esta talla</p>
        </v-card-text>
  
        <!-- Botón de reset -->
        <v-btn 
            variant="text" 
            color="error" 
            @click="classicTicTacToe.ResetGame"
            class="mt-4"
        >
            Reset
        </v-btn>
        </v-container>
  </template>
  


<style>

    .casilla {
      width: 100px;
      height: 100px;
      border: 2px solid #800080; /* Borde morado */
      display: flex;
      justify-content: center;
      align-items: center;
      font-size: 48px; /* Tamaño del texto comparable a una X/O */
      cursor: pointer;
    }

    .casilla:hover {
      transform: scale(1.05); /* Animación de hover */
      transition: transform 0.2s ease-in-out;
    }


    .casilla:active {
      transform: scale(0.95); /* Animación al presionar */
      transition: transform 0.1s ease-in-out;
    }

    .casilla.pressed {
        background-color: rgba(68, 0, 68, 0.27); /* Morado casi transparente */
        pointer-events: none; /* Deshabilita eventos del ratón */
    }
    
    .casilla.winning-cell {
    position: relative;
    overflow: hidden;
    }

    .casilla.winning-cell::before {
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background-color: rgba(88, 1, 88, 0.575);
        transition: background-color 0.5s ease-in-out;
    }

    .casilla.pressed:hover,
    .casilla.pressed:active {
        transform: none;
    }

</style>