import Home from './components/Home'
import Faq from './components/faq'
import VueRouter from 'vue-router'

const routes = [{
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/faq',
    name: 'faq',
    component: Faq
  }
]


const router = new VueRouter({
  routes,
  mode:'history'
})

export default router
