import Vue from 'vue'
import Router from 'vue-router'
import page1 from '@/components/page1'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: page1
    }
  ]
})
