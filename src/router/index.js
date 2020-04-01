import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/HealthInquiry',
    name: 'HealthInquiry',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/HealthInquiry.vue')
  },
  {
    path: '/HealthInspection',
    name: 'HealthInspection',
    component: () => import('../views/HealthInspection.vue')
  },
  {
    path: '/MyFamily',
    name: 'MyFamily',
    component: () => import('../views/MyFamily.vue')
  },
  {
    path: '/VideoClass',
    name: 'VideoClass',
    component: () => import('../views/VideoClass.vue')
  },
  {
    path: '/MyCollect',
    name: 'MyCollect',
    component: () => import('../views/MyCollect.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
