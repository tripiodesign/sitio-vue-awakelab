import { createRouter, createWebHashHistory } from 'vue-router'


const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import('../views/Home.vue')
  },
  {
    path: '/Juegos',
    name: 'Juegos',
    component: () => import('../views/Juegos.vue')
  },
  {
    path: '/detalles',
    name: 'Detalles',
    component: () => import('../views/DetailGame.vue')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
