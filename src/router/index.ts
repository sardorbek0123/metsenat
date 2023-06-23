import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue';
import Admin from '../views/Admin.vue';
import Students from "../views/Students.vue"
import Dashboard from "../views/Dashboard.vue"
import Sponsors from "@/views/Sponsors.vue";
import auth from "../components/middleware/auth"

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      beforeEnter: [auth],
      component: HomeView
    },
    {
      path: '/admin',
      name: 'admin',
      beforeEnter: [auth],
      component: Admin,
      children: [
        {
          path: 'dashboard',
          name: 'dashboard',
          component: Dashboard
        },
        {
          path: 'sponsors',
          name: 'sponsors',
          component: Sponsors
        },
        {
          path: 'students',
          name: 'students',
          component: Students
        },
      ]
    }
  ]
})

export default router
