import axios from 'axios'
import Vue from 'vue'



//设定基准URL
axios.defaults.baseURL = 'http://localhost:3000'

//axios请求拦截器
axios.interceptors.request.use(config => {
  console.log('请求已经被拦截',config)
  return config
})


//axios响应拦截器
axios.interceptors.response.use(res => {
  console.log('响应已经被拦截',res);
  const {status,statusText} = res.data

  console.log(res.data)
  
  return res
})

//绑定axios
Vue.prototype.$axios = axios
