import Vue from 'vue'
import Router from 'vue-router'
import DemoHeader from '@/views/demo_header'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/index',
      name: 'DemoHeader',
      component: DemoHeader
    }
  ]
})
