import Vue from 'vue'
import VueRouter from 'vue-router'


Vue.use(VueRouter)

const Home= () =>import('../views/Home/Home.vue')
const classification= () =>import('../views/classification/classification.vue')
const shopping= () =>import('../views/Shopping/shopping.vue')
const my= () =>import('../views/my/my.vue')
const routes = [
  {
    path:'',
    redirect:'/home'
  },
  {
    path:'/home',
    component:Home
  },
  {
    path:'/classfi',
    component:classification
  },
  {
    path:'/shopping',
    component:shopping
  },
  {
    path:'/my',
    component:my
  }
]
const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
