import Vue from 'vue'
import router from './router'
import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'
import App from './App'
import api from './api'
import './assets/flexble'
import cookieUtils from './utils/cookieUtils'
import storageUtils from './utils/storageUtils'
import '@/assets/vconsole.min.js'
import store from './store/index'
import * as filters from './filters'
Vue.use(MintUI)
Vue.prototype.$cookieUtils = cookieUtils // 将cookieUtils挂载到vue的原型上
Vue.prototype.$storageUtils = storageUtils // 将storageUtils挂载到vue的原型上
Vue.prototype.$api = api // 将api挂载到vue的原型上
Object.keys(filters).forEach((key) => {
  Vue.filter(key, filters[key])
})
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
router.beforeEach((to, from, next) => {
  next()
})
