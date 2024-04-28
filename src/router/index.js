import { createRouter, createWebHistory } from 'vue-router'
import LogInPage from '@/public/pages/login/login-page.component.vue'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/login',
      component: LogInPage
    }
  ]
})

export default router
