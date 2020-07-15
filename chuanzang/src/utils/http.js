/**
  * axios封装
  * 请求拦截、响应拦截、错误统一处理
  */
import axios from 'axios'
import store from '../store/index'
// import { Toast } from 'vant'
import { Indicator, Toast } from 'mint-ui'
let count = 0

/**
    * 提示函数
    * 禁止点击蒙层、显示一秒后关闭
    */
const tip = msg => {
  Toast({
    message: msg,
    duration: 2000
  })
}

/**
    * 跳转登录页
    * 携带当前页面路由，以期在登录页面完成登录后返回当前页面
    */
const toLogin = () => {
  // router.replace({
  //   path: '/loading',
  //   query: {
  //     redirect: router.currentRoute.fullPath
  //   }
  // })
}

/**
    * 请求失败后的错误统一处理
    * @param {Number} status 请求失败的状态码
    */
const errorHandle = (status, other) => {
  // 状态码判断
  switch (status) {
    // 401: 未登录状态，跳转登录页
    case 401:
      toLogin()
      break
      // 403 token过期
      // 清除token并跳转登录页
    case 403:
      tip('登录过期，请重新登录')
      localStorage.removeItem('token')
      store.commit('loginSuccess', null)
      setTimeout(() => {
        toLogin()
      }, 1000)
      break
      // 404请求不存在
    case 404:
      tip('请求的资源不存在')
      break
    default:
      console.log(other)
  }
}

// 创建axios实例
var instance = axios.create({
  baseURL: process.env.BASE_API,
  timeout: 30000,
  withCredentials: false
})

/**
    * 请求拦截器
    * 每次请求前，如果存在token则在请求头中携带token
    */
instance.interceptors.request.use(
  config => {
    if (count == 0) {
      Indicator.open()
      count++
    }
    return config
  },
  error => Promise.error(error))

// 响应拦截器
instance.interceptors.response.use(
  // 请求成功
  res => {
    count--
    if (count === 0) {
      Indicator.close()
    }
    return res.status === 200 ? Promise.resolve(res) : Promise.reject(res)
  },
  // 请求失败
  error => {
    const { response } = error
    if (response) {
      // 请求已发出，但是不在2xx的范围
      // 关闭加载提示框 author: yf
      Indicator.close()
      // this.$indicator.close()
      if (response.status) {
        const status = response.status + ''
        const reg = new RegExp('^5')
        if (status.match(reg)) {
          Toast('服务器错误')
        }
        errorHandle(response.status, response.data.message)
        return Promise.reject(response)
      } else {
        Toast(response)
      }
    } else {
      // 关闭加载提示框 author: yf
      Indicator.close()
      // 提示错误 author: yf
      tip('请求失败，请检查网络连接')
      // 处理断网的情况
      // eg:请求超时或断网时，更新state的network状态
      // network状态在app.vue中控制着一个全局的断网提示组件的显示隐藏
      // 关于断网组件中的刷新重新获取数据，会在断网组件中说明
      // store.commit('changeNetwork', false);
    }
  })

export default instance

