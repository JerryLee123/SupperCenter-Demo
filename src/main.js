import 'babel-polyfill'
import Vue from 'vue'
import appLayout from './components/appLayout'
import VueRouter from 'vue-router'
import router from './router'
import './global-components'
import VueAxios from './plugins/axios'
// import axios from 'axios'

//注册axios插件

Vue.use(VueAxios,{
  baseUrl:'http://localhost:3000/'
})


//注册路由插件
Vue.use(VueRouter)

new Vue({
  el: '#app',
  render: h => h(appLayout),
  router
})
