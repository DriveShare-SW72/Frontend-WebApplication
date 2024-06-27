import { createRouter, createWebHistory } from 'vue-router'
import LandingPage from '@/landing-page/pages/index.page.vue'
import LogInPage from '@/public/pages/login/login-page.component.vue'
import SignUpPage from '@/public/pages/register/signup-page.component.vue'
import RecoveryPage from '@/auth/pages/recovery.page.vue'
import FindYourParkPage from '@/public/pages/find-your-park.page.vue'
import ParkingDetailPage from '@/parkings/pages/parking-detail.page.vue'
import RegisterPark from '@/public/pages/register-park.page.vue'
import NotFoundPage from '@/public/pages/not-found.page.vue'
import { useAuth } from '@/store/auth'
import YourReservationsPage from '@/public/pages/your-reservations.page.vue'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      component: LandingPage,
      meta: {
        auth: false
      }
    },
    {
      path: '/login',
      component: LogInPage,
      meta: {
        auth: false
      }
    },
    {
      path: '/signup',
      component: SignUpPage,
      meta: {
        auth: false
      }
    },
    {
      path: '/recovery',
      component: RecoveryPage,
      meta: {
        auth: false
      }
    },
    {
      path: '/find-your-park',
      component: FindYourParkPage,
      meta: {
        auth: true
      }
    },
    {
      path: '/find-your-park/parking/:id',
      component: ParkingDetailPage,
      meta: {
        auth: true
      }
    },
    {
      path: '/register-park',
      component: RegisterPark,
      meta: {
        auth: true
      }
    },
    {
      path: '/your-reservations',
      component: YourReservationsPage,
      meta: {
        auth: true
      }
    },
    {
      path: '/:pathMatch(.*)*',
      component: NotFoundPage,
      meta: {
        auth: false
      }
    }
  ]
})

router.beforeEach((to, _from, next) => {
  if (to.meta.auth && !useAuth().isLoggedIn()) {
    next('/login')
  }
  next()
})

export default router
