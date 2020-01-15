import Vue from 'vue'
import VueRouter from 'vue-router'

import index from '../views/index.vue'
import login from '../views/login.vue'
import image from '../views/image.vue'
import upload from '../views/upload.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'index',
    component: index
  },
  {
    path: '/login',
    name: '/login',
    component: login
  },
  {
    path: '/image',
    name: 'image',
    component: image
  },
  {
    path: '/upload',
    name: 'upload',
    component: upload
  }
]

const router = new VueRouter({
  routes
})

export default router
