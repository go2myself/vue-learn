import Vue from 'vue' // 引入vue
import Vuex from 'vuex' // 引入vuex
import state from './state' // 引入vuex
import mutations from './mutations' // 引入vuex

// 使用vuex
Vue.use(Vuex)
// 创建Vuex实例
const store = new Vuex.Store({
  state,
  mutations
})

export default store // 导出store
