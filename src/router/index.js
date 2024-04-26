import { createRouter, createWebHistory } from 'vue-router'
import SignUpPage from '@/public/pages/register/signup-page.component.vue'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/signup',
      component: SignUpPage
    }
  ]
})

export default router
