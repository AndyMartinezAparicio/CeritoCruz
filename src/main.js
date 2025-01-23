import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { createVuetify } from 'vuetify'

// Vuetify
import 'vuetify/styles'
import '@mdi/font/css/materialdesignicons.css'; // Importa los iconos
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'

import App from './App.vue'
import router from './router'


const myCustomDarkTheme = {
    dark: true,
    colors: {

      background: '#2E0049', // Morado oscuro
      surface: '#3B006B', // Morado más oscuro
      'surface-bright': '#45235A', // Tonalidad de morado claro
      'surface-light': '#512570', // Tonalidad de morado muy claro
      'surface-variant': '#443F64', // Tono oscuro con matices de morado
      'on-surface-variant': '#EDEDF4', // Blanco con tono naranja claro
      primary: '#FF69B4', // Naranja intenso
      'primary-darken-1': '#FF4DA6', // Naranja oscuro
      secondary: '#FF99CC', // Naranja pastel
      'secondary-darken-1': '#FF77AA', // Naranja pastel oscuro
      error: '#FF3333', // Rojo intenso
      info: '#33CC33', // Verde intenso
      success: '#33CC33', // Verde intenso
      warning: '#FFCC00', // Amarillo intenso
    },
    variables: {
      'border-color': '#443F64', // Tono oscuro con matices de morado
      'border-opacity': 0.12,
      'high-emphasis-opacity': 0.87,
      'medium-emphasis-opacity': 0.60,
      'disabled-opacity': 0.38,
      'idle-opacity': 0.04,
      'hover-opacity': 0.04,
      'focus-opacity': 0.12,
      'selected-opacity': 0.08,
      'activated-opacity': 0.12,
      'pressed-opacity': 0.12,
      'dragged-opacity': 0.08,
      'theme-kbd': '#443F64', // Tono oscuro con matices de morado
      'theme-on-kbd': '#EDEDF4', // Blanco con tono naranja claro
      'theme-code': '#443F64', // Tono oscuro con matices de morado
      'theme-on-code': '#FFFFFF', // Blanco
    }
  }
  
  
  


const vuetify = createVuetify({
    components,
    directives,
    theme: {
        defaultTheme: 'myCustomDarkTheme',
        themes: {
            myCustomDarkTheme,
        },
    }
})



const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(vuetify)

app.mount('#app')
