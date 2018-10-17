import Vue from 'vue'
import Router from 'vue-router'
import DemoHeader from '@/views/demo_header'
const components = {
  LoginPage: () => import('@/components/login_page'),
  NewsDetail: () => import('@/views/news_detail'),
  Inform: () => import('@/views/inform'),
  UserInfo:()=>import('@/views/userinfo'),
  NewsEye:()=>import('@/views/xg_newseye'),
  ZsLive:()=>import('@/views/zs_live'),
  PolitialStudy:()=>import('@/views/political_study'),
  OneClick:()=>import('@/views/one_click'),
  ShowIdentity:()=>import('@/views/showidentity'),
  PartyToday:()=>import('@/views/party_today')
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
        path:'/news_detail',
        name:'news_detail',
        component:components.NewsDetail
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
      },
      {
        path:'/newseye',
        name:'newseye',
        component:components.NewsEye
      },
      {
        path:'/zs_live',
        name:'zs_live',
        component:components.ZsLive
      },
      {
        path:'/political_study',
        name:'political_study',
        component:components.PolitialStudy
      },
      {
        path:'/one_click',
        name:'one_click',
        component:components.OneClick
      },
      {
        path:'/showidentity',
        name:'showidentity',
        component:components.ShowIdentity
      },
      {
        path:'/partyToday',
        name:'partyToday',
        component:components.PartyToday
      }
  ]
})