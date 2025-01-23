import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import { useClassicTicTacToe } from "../stores/classicTicTacToe.js";


export const useConfiguracion = defineStore('configuracion', () => {

  const classicTicTacToe = useClassicTicTacToe();
  const selectedMode = 'Clásico'

  const handleSelection = (value) => {
    if (value === 'Clásico') {
        classicTicTacToe.clasicGame = true
    }
    else{
        classicTicTacToe.clasicGame = false
    }
  }   

  const handleSave = () => {
    if(selectedMode === 'Clásico'){
      classicTicTacToe.clasicGame = true
    }
  }


  return { handleSelection, handleSave}

})
