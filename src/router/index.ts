import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('@/views/HomeView.vue'),
    },
    {
      path: '/kalkulator-dmc',
      name: 'kalkulator-dmc',
      component: () => import('@/views/tools/DmcCalculatorView.vue'),
    },
  ],
})

export default router
