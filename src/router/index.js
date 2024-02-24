import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/all-courses',
    name: 'all-courses',
    component: () => import('../views/all-courses.vue')
  },  
  {
    path: '/course-details',
    name: 'course-details',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/DetailsView.vue')
  },
  {
    path: '/category/undergraduate',
    name: 'undergraduate',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/undergraduate.vue')
  },
  {
    path: '/category/postgraduate',
    name: 'postgraduate',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/postgraduate.vue')
  },
  {
    path: '/category/skilldev',
    name: 'skilldev',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/skilldev.vue')
  },
  {
    path: '/registration',
    name: 'registration',
    component: () => import('../views/signup.vue')
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('../views/login.vue')
  },
  {
    path: '/about-us',
    name: 'about-us',
    component: () => import('../views/AboutUs.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
  scrollBehavior() {
    return new Promise((resolve) => {
      resolve({ left: 0, top: 0 })
    })
  }
})

export default router
