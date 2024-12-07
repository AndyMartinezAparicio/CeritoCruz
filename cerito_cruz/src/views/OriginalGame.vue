<script setup>
import TictactoeTablero2 from '../components/TictactoeTablero2.vue'
import MenuSettings from '../components/MenuSettings.vue'
import { useClassicTicTacToe } from "../stores/classicTicTacToe.js";
const classicTicTacToe = useClassicTicTacToe();


</script>

<template>
	<v-container fluid min-height="100vh">
		<v-row align="center" justify="center" class="fill-height">
			<v-col align="center" cols="8" sm="6" md="4">
				<h1>Tic Tac Toe </h1>

				<v-card-text v-if="classicTicTacToe.winner">
					<h2>{{ `Player '${classicTicTacToe.winner}' wins!` }}</h2>
				</v-card-text>

				<v-card-text v-else-if="classicTicTacToe.empate">
					<h2>Se trancó esta talla</h2>
				</v-card-text>

				<v-card-text v-else>
					<h2>Turno de {{ classicTicTacToe.player }}</h2>
				</v-card-text>

				<TictactoeTablero2 />
				<MenuSettings/>


			</v-col>
		</v-row>
	</v-container>
</template>


<style scoped></style>