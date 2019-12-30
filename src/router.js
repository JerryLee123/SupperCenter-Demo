import Home from './components/Home'
import Faq from './components/faq'
import VueRouter from 'vue-router'
import Login from './components/Login.vue'

const routes = [{
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/faq',
    name: 'faq',
    component: Faq
  }, {
    path: '/login',
    name: 'login',
    component: Login
  }
]


const router = new VueRouter({
  routes,
  mode: 'history'
})

export default router
