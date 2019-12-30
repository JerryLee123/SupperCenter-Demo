import 'babel-polyfill'
import Vue from 'vue'
import appLayout from './components/appLayout'
import VueRouter from 'vue-router'
import router from './router'
import './global-components'
import VueAxios from './plugins/axios'
// import axios from 'axios'

import VueState from './plugins/state'

import state from './state'

//注册axios插件

Vue.use(VueAxios,{
  baseUrl:'http://localhost:3000/'
})

//注册state插件
Vue.use(VueState,state)


//注册路由插件
Vue.use(VueRouter)

new Vue({
  el: '#app',
  render: h => h(appLayout),
  router,
  data:state
})
