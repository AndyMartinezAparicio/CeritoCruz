import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import { useSonidos } from "../stores/sonidos.js";



export const useClassicTicTacToe = defineStore('counter', () => {
  
    const player = ref('X')  //variable que indica que jugador le toca
    const board = ref([		// Tablero
        ['', '', ''],
        ['', '', ''],
        ['', '', '']
    ])
    const linea = ref([-1,-1,-1])
    
    
    const sonidos = useSonidos();

    //ganador
    const winner = computed(() => CalculateWinner(board.value.flat()))
    const empate = computed(() => CheckDraw(board.value.flat()))

    const CalculateWinner = (board) => {

        //Combinaciones posibles para ganar
        const lines = [[0, 1, 2],[3, 4, 5],[6, 7, 8],[0, 3, 6],[1, 4, 7],[2, 5, 8],[0, 4, 8],[2, 4, 6]]
    
        for (let i = 0; i < lines.length; i++) {
            const [a, b, c] = lines[i]
    
            if (board[a] && board[a] === board[b] && board[a] === board[c]) {
                sonidos.playEndGameSound()
                linea.value = [a,b,c]
                return board[a]  //retornar ganador
            }
        }
    
         return null
    }
  
  
    const CheckDraw = (board) => {
        const allCellsFilled = board.every(cell => cell !== '')
        if (allCellsFilled) {
            sonidos.playEndGameSound()
        }
        return allCellsFilled
    }
      

      
    const MakeMove = (x, y) => {
      
        // si hay ganador o si el lugar esta ocupado no se hace ningun movimiento
        if (winner.value) return
      
        if (board.value[x][y]) return
      
        // si esta disponible se establece el valor del jugador
        board.value[x][y] = player.value
        //cambio de jugador
        player.value = player.value === 'X' ? 'O' : 'X'
        
        sonidos.playMoveSound()
    }
      
    //Funcion para resetear juego
    const ResetGame = () => {
        board.value = [
            ['', '', ''],
            ['', '', ''],
            ['', '', '']
        ]
        player.value = 'X'
        linea.value = [-1,-1,-1]
    }


    return {player, board, MakeMove, ResetGame, empate, winner, linea}
})
