import Vue from 'vue'
import Router from 'vue-router'
import DemoHeader from '@/views/demo_header'
const components = {
  LoginPage: () => import('@/components/login_page'),
  SwiperDetail: () => import('@/views/swiper_detail'),
  Inform: () => import('@/views/inform'),
  UserInfo:()=>import('@/views/userinfo'),
  InformDetail:()=>import('@/views/inform_detail')
}
Vue.use(Router)

export default new Router({
  routes: [
      {
        path: '/index',
        name: 'DemoHeader',
        component: DemoHeader
      },
      {
        path:'/login',
        name:'LoginPage',
        component:components.LoginPage
      },
      {
        path:'/swiper_detail',
        name:'/swiper_detail',
        component:components.SwiperDetail
      },
      {
        path:'/inform_detail',
        name:'/inform_detail',
        component:components.InformDetail
      },
      {
        path:'/Inform',
        name:'inform',
        component:components.Inform
      },
      {
        path:'/userinfo',
        name:'userinfo',
        component:components.UserInfo
      }
  ]
})