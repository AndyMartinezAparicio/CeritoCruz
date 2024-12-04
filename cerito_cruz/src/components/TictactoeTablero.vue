<script setup>
import { useClassicTicTacToe } from "../stores/classicTicTacToe.js";

const classicTicTacToe = useClassicTicTacToe();

</script>

<template>
	<main class="text-center" >
		<h1 class=" text-uppercase ">Tic Tac Toe</h1>

		<h3 class="">Player {{ classicTicTacToe.player }}'s turn</h3>

		<div class=" d-flex flex-column ">
			<div 
				v-for="(row, x) in classicTicTacToe.board" 
				:key="x"
				class="d-flex">
				<div 
					v-for="(cell, y) in row" 
					:key="y" 
					@click="classicTicTacToe.MakeMove(x, y)" 
					:class=" `casilla d-flex border border-secondary ${cell === 'X' ? 'Red' : 'text-primary'}`">
					<p class="">
						{{ cell === 'X' ? 'X' : cell === 'O' ? 'O' : '' }}
					</p>	
				</div>
			</div>
		</div>

		<div class="text-center">
			<h2 v-if="classicTicTacToe.winner">Player '{{ classicTicTacToe.winner }}' wins!</h2>
			<h2 v-if="classicTicTacToe.empate">Se trancó esta talla</h2>
			<v-btn @click="classicTicTacToe.ResetGame" class="p-2 bg-danger rounded">Reset</v-btn>
		</div>
	</main>
</template>


<style>

.casilla {
  height: 100px;
  width: 100px;
}


</style>
