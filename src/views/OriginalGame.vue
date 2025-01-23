<script setup>
import TictactoeTablero2 from '../components/TictactoeTablero2.vue'
import MenuSettings from '../components/MenuSettings.vue'
import { useClassicTicTacToe } from "../stores/classicTicTacToe.js";
const classicTicTacToe = useClassicTicTacToe();


</script>

<template>
	<v-container fluid min-height="100vh">
		<v-row align="center" justify="center" class="fill-height">
			<v-col align="center" cols="12" sm="6" md="4">
				<h1>Comienzan las Xs</h1>

				<v-card-text v-if="classicTicTacToe.winner">
					<h1>{{ ` ${classicTicTacToe.winner} GANA! 🤑` }}</h1>
				</v-card-text>

				<v-card-text v-else-if="classicTicTacToe.empate">
					<h1>EMPATE 🥱</h1>
				</v-card-text>

				<v-card-text v-else>
					<h1>Turno de {{ classicTicTacToe.player }}</h1>
				</v-card-text>

				<TictactoeTablero2 />
				<MenuSettings/>


			</v-col>
		</v-row>
	</v-container>
</template>


<style scoped></style>