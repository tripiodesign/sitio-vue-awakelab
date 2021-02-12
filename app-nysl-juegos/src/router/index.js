import { createRouter, createWebHashHistory } from 'vue-router'


const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import('../views/Home.vue')
  },
  {
    path: '/juegos',
    name: 'Juegos',
    component: () => import('../views/Juegos.vue')
  },
  {
    path: '/nosotros',
    name: 'Nosotros',
    // component: () => import('../views/Nosotros.vue')
  },
  {
    path: '/detalles',
    name: 'Detalles',
    props: true,
    component: () => import('../views/Detalles.vue')
  },
  {
    path: '/contacto',
    name: 'Contacto',
    // component: () => import('../views/Contacto.vue')
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
