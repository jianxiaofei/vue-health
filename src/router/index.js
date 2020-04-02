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
    component: () => import('../views/HealthInquiry.vue')
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
