/**
  * hospital模块接口列表
  */

import base from './base' // 导入接口域名列表
import axios from '@/utils/http' // 导入http中创建的axios实例
// import qs from 'qs' // 根据需求是否导入qs模块

const example = {
  // 医院模块
  test(params) {
    console.log('测试', params)
    return axios.post(`${base.test}`, params)
  }
}

export default example
