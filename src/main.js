import 'babel-polyfill'
import Vue from 'vue'
import appLayout from './components/appLayout'
import VueRouter from 'vue-router'
import router from './router'
import axios from 'axios'
import './global-components'

Vue.prototype.$axios = axios

axios.defaults.baseURL = 'http://127.0.0.1:3000'




//注册路由插件
Vue.use(VueRouter)

new Vue({
  el: '#app',
  render: h => h(appLayout),
  router
})
