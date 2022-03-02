import Vue from 'vue'
import VueRouter from 'vue-router'
// import Home from '../views/Home.vue'
import AllCards from '@/components/AllCards.vue'
import NewCard from '@/components/NewCard.vue'


Vue.use(VueRouter)

const routes = [
  // {
  //   path: '/',
  //   name: 'Home',
  //   component: Home
  // },
  {
    path: '/',
    name: 'AllCards',
    component: AllCards
  },
  {
    path: '/unmemorized',
    name: 'unmemorized',
    component: AllCards
  },
  {
    path: '/memorized',
    name: 'memorized',
    component: AllCards
  },
  {
    path: '/favorites',
    name: 'favorites',
    component: AllCards
  },
  {
    path: '/new_card',
    name: 'NewCard',
    component: NewCard
  },
  // {
  //   path: '/about',
  //   name: 'About',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  // }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
