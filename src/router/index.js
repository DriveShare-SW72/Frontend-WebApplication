import { createRouter, createWebHistory } from 'vue-router'
import LogInPage from '@/public/pages/login/login-page.component.vue'
import SignUpPage from '@/public/pages/register/signup-page.component.vue'
import RecoveryPage from '@/auth/pages/recovery.page.vue'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/login',
      component: LogInPage
    },
    {
      path: '/signup',
      component: SignUpPage
    },
    {
      path: '/recovery',
      component: RecoveryPage
    }
  ]
})

export default router
