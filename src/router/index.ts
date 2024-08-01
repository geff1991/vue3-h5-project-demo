import { createRouter, createWebHistory } from 'vue-router'
// import HomeView from '@/views/HomeView.vue'
import testRoutes from './modules/test'

const combineRoutes = [...testRoutes]
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    ...combineRoutes,
    {
      path: '/',
      name: 'home',
      // component: HomeView,
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('@/views/HomeView.vue'),
      meta: { title: 'vue3-h5-project-demo' }
    }
  ]
})

export default router
