import Vue from 'vue'
import Router from 'vue-router'
import DemoHeader from '@/views/demo_header'
import store from '../store'

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
  PartyToday:()=>import('@/views/party_today'),
  Organization:()=>import('@/views/organization'),
  EveryStudy:()=>import('@/views/every_study'),
  System:()=>import('@/views/system'),
  Activity:()=>import('@/views/activity'),
  AnytimePhoto:()=>import('@/views/anytimephoto'),
  PersonalDetail:()=>import('@/views/personal_details')
}
Vue.use(Router)

const router = new Router({
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
        meta:{
          title:''
        },
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
      },
      {
        path:'/organization',
        name:'organization',
        component:components.Organization
      },
      {
        path:'/every_study',
        name:'every_study',
        component:components.EveryStudy
      },
      {
        path:'/system',
        name:'system',
        component:components.System
      },
      {
        path:'/activity',
        name:'activity',
        component:components.Activity
      },
      {
        path:'/anytimephoto',
        name:'anytimephoto',
        component:components.AnytimePhoto
      },
      {
        path:'/personal_detail',
        name:'personal_detail',
        meta:{
          requireAuth:true
        },
        component:components.PersonalDetail
      }
  ]
})

router.beforeEach((to, from, next) => {
  if (to.matched.some(r => r.meta.requireAuth)) {           //这里的requireAuth为路由中定义的 meta:{requireAuth:true}，意思为：该路由添加该字段，表示进入该路由需要登陆的
    if (store.state.token) {
      next();
    }
    else {
      next({
        path: '/login',
        query: {redirect: to.fullPath}
      })
    }
  }
  else {
    next();
  }
})
export default router