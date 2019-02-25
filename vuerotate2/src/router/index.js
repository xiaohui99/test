import Vue from 'vue'
import Router from 'vue-router'
import awardRotate from '@/components/awardRotate'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'awardRotate',
      component: awardRotate
    }
  ]
})
