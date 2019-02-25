// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import 'lib-flexible/flexible.js'  //移动端适配
import axios from 'axios'   //数据请求方法
import VueAxios from 'vue-axios'

Vue.config.productionTip = false
Vue.use(VueAxios,axios)         //全局注册

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
