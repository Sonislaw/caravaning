import type { RouteRecordRaw } from 'vue-router'

export const routes: RouteRecordRaw[] = [
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
  {
    path: '/kalkulator-spalania',
    name: 'kalkulator-spalania',
    component: () => import('@/views/tools/FuelCalculatorView.vue'),
  },
  {
    path: '/polityka-prywatnosci',
    name: 'polityka-prywatnosci',
    component: () => import('@/views/PrivacyPolicyView.vue'),
  },
]
