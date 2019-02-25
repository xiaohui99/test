// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import axios from 'axios'
import Qs from 'qs'
import 'lib-flexible'

axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded'
Vue.config.productionTip = false
Vue.prototype.$http = axios
Vue.prototype.$qs = Qs

axios.interceptors.request.use((config) => {
  config.data = Qs.stringify(config.data)
  return config
}, function (error) {
  return Promise.reject(error)
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
