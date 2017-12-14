import Vue from 'vue'
import Router from 'vue-router'
import Homepage from '@/pages/homepage'
import NotFound from '@/pages/not-found'
import List1 from '@/pages/list1'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: '首页',
      component: Homepage
    },
    {
      path: '/list1',
      name: 'List1',
      component: List1
    },
    {
      path: '*',
      name: '404',
      show: false,
      component: NotFound
    }
  ]
})
