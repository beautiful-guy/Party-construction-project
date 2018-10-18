// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router/index'
import 'lib-flexible'
import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'
import $axios from './utils/axios'
import { Loadmore } from 'mint-ui';
import store from './store';

Vue.component(Loadmore.name, Loadmore);
Vue.config.productionTip = false
Vue.use(MintUI)
Vue.prototype.$axios = $axios

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
