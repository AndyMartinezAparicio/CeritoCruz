<script setup>
import { useClassicTicTacToe } from "../stores/classicTicTacToe.js";

const classicTicTacToe = useClassicTicTacToe();

</script>

<template>
    <v-container min-width="300" >
        <!-- Tablero -->

        <div v-for="(row, x) in classicTicTacToe.board" :key="x" class="d-flex align-center justify-center" >
            <div v-for="(cell, y) in row"  :key="y" @click="classicTicTacToe.MakeMove(x, y)" :class="[
                
                'casilla',
                { 'text-orange': cell === 'X' },
                { 'text-blue': cell === 'O' },
                { 'winning-cell': classicTicTacToe.linea.includes(x * 3 + y) },
                { 'pressed': cell !== '' }
            ]">
                <p>
                    {{ cell === 'X' ? 'X' : cell === 'O' ? 'O' : '' }}
                </p>

            </div>
        </div>
    </v-container>
    <v-container class="d-flex justify-space-around">

        <v-btn @click="classicTicTacToe.ResetGame">
            Reiniciar
        </v-btn>

    </v-container>
</template>



<style>
.casilla {
    width: 100px;
    height: 100px;
    border: 2px solid #d4bbe0da;
    /* Borde morado */
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 48px;
    /* Tamaño del texto comparable a una X/O */
    cursor: pointer;
}

.casilla:hover {
    transform: scale(1.05);
    /* Animación de hover */
    transition: transform 0.2s ease-in-out;
}


.casilla:active {
    transform: scale(0.95);
    /* Animación al presionar */
    transition: transform 0.1s ease-in-out;
}

.casilla.pressed {
    background-color: rgba(34, 0, 51, 0.37);
    /* Morado casi transparente */
    pointer-events: none;
    /* Deshabilita eventos del ratón */
}

.casilla.winning-cell {
    background-color: rgba(62, 2, 83, 0.736);
}

.casilla.pressed:hover,
.casilla.pressed:active {
    transform: none;
}
</style>