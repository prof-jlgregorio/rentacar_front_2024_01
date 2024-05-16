import { createRouter, createWebHistory } from 'vue-router'

// Importe os componentes que você deseja navegar
import Home from '@/view/Home.vue'
import Error404 from '@/view/Error404.vue'
import BrandsIndex from '@/view/brands/BrandsIndex.vue'
import BrandsCreate from '@/view/brands/BrandsCreate.vue'

import CarsIndex from '@/view/cars/CarsIndex.vue'
import BrandsUpdate from '@/view/brands/BrandsUpdate.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/brands',
    name: 'BrandsIndex',
    component: BrandsIndex,
  },
  {
    path: '/brands/create',
    name: 'BrandsCreate',
    component: BrandsCreate,
  },
  {
    path: '/brands/:id',
    name: 'BrandsUpdate',
    component: BrandsUpdate,
  },
  {
    path: '/cars',
    name: 'CarsIndex',
    component: CarsIndex,
  },
  // Rota para página 404
  {
    path: '/:catchAll(.*)',
    name: 'Error404',
    component: Error404,
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
