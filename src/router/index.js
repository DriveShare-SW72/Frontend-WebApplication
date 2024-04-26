import { createRouter, createWebHistory } from 'vue-router'
import LoginPage from 'src/public/pages/login/login-page.component.vue'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/login',
      name: LoginPage
    }
  ]
})

export default router
