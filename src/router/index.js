import { createRouter, createWebHistory } from 'vue-router'
import LogInPage from '@/public/pages/login/login-page.component.vue'
import SignUpPage from '@/public/pages/register/signup-page.component.vue'
import RecoveryPage from '@/auth/pages/recovery.page.vue'
import FindYourParkPage from '@/public/pages/find-your-park.page.vue'
import ParkingDetailPage from '@/parkings/pages/parking-detail.page.vue'
import RegisterPark from '@/public/pages/register-park.page.vue'

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
    },
    {
      path: '/find-your-park',
      component: FindYourParkPage
    },
    {
      path: '/find-your-park/parking/:id',
      component: ParkingDetailPage
    },
    {
      path: '/register-park',
      component: RegisterPark
    }
  ]
})

export default router
