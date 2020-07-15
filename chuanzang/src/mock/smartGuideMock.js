import Mock from 'mockjs'

var result = {
  data: {},
  message: '',
  success: true,
  detail: null
}
export default {
  getBodyList: () => {
    const listData = Mock.mock({
      'result|5': [{ 'id|+1': 1, diseaseName: '@cname' }] })
    return Object.assign(result, listData)
  },
  getDepList: () => {
    const deplist = Mock.mock({
      result: [{ hosName: '北京协和医院', hosDeptCode: '1', hosDeptName: '心血管内科' },
        { hosName: '301医院', hosDeptCode: '2', hosDeptName: '心血管内科' },
        { hosName: '人民医院', hosDeptCode: '3', hosDeptName: '心血管内科' },
        { hosName: '北医3院', hosDeptCode: '4', hosDeptName: '心血管内科' },
        { hosName: '八一医院', hosDeptCode: '5', hosDeptName: '心血管内科' },
        { hosName: '南京市中医院', hosDeptCode: '6', hosDeptName: '心血管内科' }] })
    return Object.assign(result, deplist)
  }

}
