import { createRouter, createWebHistory } from 'vue-router'
import auth from '@/middleware/auth'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'PHomeView',
      beforeEnter: [auth],
      component: () => import('@/views/PHomeView.vue')
    },
    {
      path: '/:pathMatch(.*)*',
      component: () => import('@/layout/LError.vue')
    },
    {
      path: '/admin',
      name: 'PAdmin',
      beforeEnter: [auth],
      component: () => import('@/views/PAdmin.vue'),
      children: [
        {
          path: 'dashboard',
          name: 'PDashboard',
          component: () => import('@/views/PDashboard.vue')
        },
        {
          path: 'sponsors',
          name: 'PSponsors',
          component: () => import('@/views/PSponsors.vue')
        },
        {
          path: 'students',
          name: 'PStudents',
          component: () => import('@/views/PStudents.vue')
        }
      ]
    }
  ]
})

export default router
