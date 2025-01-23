import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    // {
    //   path: '/',
    //   name: 'home',
    //   component: HomeView,
    // },
    // {
    //   path: '/about',
    //   name: 'about',
    //   component: () => import('../views/AboutView.vue'),
    // },
    // {
    //   path: '/originalGame',
    //   name: 'originalGame',
    //   component: () => import('../views/OriginalGame.vue'),
    // },


    //Para recuperar la pagina borrar esto y descomentar lo de arriba
    {
      path: '/',
      name: 'originalGame',
      component: () => import('../views/OriginalGame.vue'),
    },


  ],
})

export default router
