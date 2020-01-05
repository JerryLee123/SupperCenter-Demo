import axios from 'axios'

export default {
  install(Vue, options) {
    //添加默认信息
    //object.assign对象合并
    const finalOptions = Object.assign({}, {
        headers: {
          'Content-Type': 'application/json',
        },
        credentials: 'include'
      },
      options
    )


    Vue.prototype.$axios = axios
    // axios.defaults.baseURL = 'http://localhost:3000'
    axios.defaults.baseURL = finalOptions.baseUrl
    // baseURL = options.baseURL
    console.log('installed', finalOptions.baseUrl);
  },
  requestInterceptors(){
    
  }
}