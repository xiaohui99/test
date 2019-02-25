import Vue from 'vue'
import Router from 'vue-router'
/*引入页面*/
import Login from '@/view/login/login.vue'
import Main from '@/view/main/main.vue'
import Home from '@/view/home/home.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Login',
      component: Login
    },
    {
      path: '/main',
      name: 'Main',
      component: Main
    },
    {
      path: '/home',
      name: 'Home',
      component: Home
    }
  ]
})
