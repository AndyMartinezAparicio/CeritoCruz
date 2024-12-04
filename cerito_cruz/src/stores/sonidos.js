import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import moveSound from '../assets/move.mp3'
import endGameSound from '../assets/endGame.mp3'

export const useSonidos = defineStore('sonidos', () => {
    const playMoveSound = () => {
        const audio = new Audio(moveSound)
        audio.play()
      }
      
      const playEndGameSound = () => {
        const audio = new Audio(endGameSound)
        audio.play()
      }

  return { playMoveSound, playEndGameSound}
})
