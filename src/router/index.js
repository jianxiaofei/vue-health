import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Splash',
    component: () => import('../views/Splash.vue')
  },
  {
    path: '/Home',
    name: 'Home',
    component: () => import('../views/Home.vue')
  },
  {
    path: '/HealthInquiry',
    name: 'HealthInquiry',
    component: () => import('../views/HealthInquiry.vue')
  },
  {
    path: '/HealthTest',
    name: 'HealthTest',
    component: () => import('../views/HealthTest.vue')
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
  },
  {
    path: '/Inquiring',
    name: 'Inquiring',
    component: () => import('../views/Inquiring.vue')
  },
  {
    path: '/UserRecord',
    name: 'UserRecord',
    component: () => import('../views/UserRecord.vue')
  },
  {
    path: '/InputData',
    name: 'InputData',
    component: () => import('../views/InputData.vue')
  },
  {
    path: '/MemberManage',
    name: 'MemberManage',
    component: () => import('../views/MemberManage.vue')
  },
  {
    path: '/EditMember',
    name: 'EditMember',
    component: () => import('../views/EditMember.vue')
  },
  {
    path: '/About',
    name: 'About',
    component: () => import('../views/About.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
