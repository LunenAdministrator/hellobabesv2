import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Information from '../views/Information.vue'
import DealsPromotion from '../views/DealsPromotion'
import WhatsNew from '../views/WhatsNew'
import FAQ from '../views/FAQ'

Vue.use(VueRouter)

const routes = [
    {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/information',
    name: 'Information',
    component: Information
  },
  {
    path: '/dealspromotion',
    name: 'DealsPromotion',
    component: DealsPromotion
  },
  {
    path: '/whatsnew',
    name: 'WhatsNew',
    component: WhatsNew
  },
  {
    path: '/faq',
    name: 'FAQ',
    component: FAQ
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue'),
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
