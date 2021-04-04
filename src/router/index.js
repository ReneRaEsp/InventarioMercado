import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Frutas',
    component: () => import(/* webpackChunkName: "Central Frutas" */ '../views/frutas.vue'),
  },
  {
    path: '/Frutas',
    name: 'Frutas',
    component: () => import(/* webpackChunkName: "Frutas" */ '../views/frutas.vue'),
  },
  {
    path: '/Carnes',
    name: 'Carnes',
    component: () => import(/*webpackChunkName: "Carnes"*/ '../views/carnes.vue'),
  },
  {
    path: '/Verduras',
    name: 'Verduras',
    component: () => import(/* webpackChunkName: "Verduras"*/ '../views/verduras.vue'),
  },
  {
    path: '/Cereales',
    name: 'Cereales',
    component: () => import(/* webpackChunkName: "Cereales"*/ '../views/cereales.vue'),
  },
  {
    path: '/Hogar',
    name: 'Hogar',
    component: () => import(/* webpackChunkName: "Hogar"*/ '../views/hogar.vue'),
  },
  {
    path: '/Jardin',
    name: 'Jardin',
    component: () => import(/* webpackChunkName: "Jardin"*/ '../views/jardin.vue'),
  },
  {
    path: '/Limpieza',
    name: 'Limpieza',
    component: () => import(/* webpackChunkName: "Limpieza"*/ '../views/limpieza.vue'),
  },
]

const router = new VueRouter({
  routes
})

export default router
