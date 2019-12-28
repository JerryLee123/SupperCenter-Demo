import axios from 'axios'

export default {
  install (Vue,options){
    Vue.prototype.$axios = axios
    // axios.defaults.baseURL = 'http://localhost:3000'
    axios.defaults.baseURL = options.baseUrl
    // baseURL = options.baseURL
    console.log('installed',options.baseUrl);
  }
}
