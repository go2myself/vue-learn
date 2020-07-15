import Mock from 'mockjs'
import demo from './demo'
import smartGuideMock from './smartGuideMock'
import payMock from './payMock'
import weekCalendarMock from './weekCalendarMock'

// 修复在使用 MockJS 情况下，设置 withCredentials = true，且未被拦截的跨域请求丢失 Cookies 的问题
// https://github.com/nuysoft/Mock/issues/300
Mock.XHR.prototype.proxy_send = Mock.XHR.prototype.send
Mock.XHR.prototype.send = function() {
  if (this.custom.xhr) {
    this.custom.xhr.withCredentials = this.withCredentials || false
  }
  this.proxy_send(...arguments)
}

Mock.setup({
  timeout: '1000-1200'
})
// 后台相关
// Mock.mock(/\/getHospitallist\/data/, 'post', demo.getHospitalListData)
// Mock.mock(/\/docInfo\/querySchudele/, 'post', demo.getExperts)
// 就诊人列表
// Mock.mock(/\/userInfoService\/v1\/getPatientList/, 'get', demo.getPatientList)
// 就诊卡列表
// Mock.mock(/\/userInfoService\/v1\/getCardInfoList/, 'get', demo.getCardInfoList)
// 挂号记录
Mock.mock(/\/userInfoService\/v1\/registerList/, 'get', demo.registerList)
// 检查报告
Mock.mock(/\/userInfoService\/v1\/reportList/, 'get', demo.reportList)
// 普通号列表
// Mock.mock(/\/regi\/ordinaryList/, 'get', demo.getOrdinary)
// 专家号列表-
// Mock.mock(/\/regi\/expList/, 'get', demo.getExpList)
// Mock.mock(/\/getdoctor\/info/, 'get', weekCalendarMock.getDateDoctorInfo)
// 专家详情
// Mock.mock(/\/getdoctor\/expDetail/, 'get', demo.getExpDetail)
Mock.mock(/\/getdata\/list/, 'get', weekCalendarMock.getDataList)
// 导诊身体部位列表*
Mock.mock(/\/body\/getList/, 'post', smartGuideMock.getBodyList)
// 导诊结果医院列表*
Mock.mock(/\/dep\/getDepList/, 'get', smartGuideMock.getDepList)
// 挂号页面的日期
// Mock.mock(/\/getdate\/list/, 'get', weekCalendarMock.getDateList)
Mock.mock(/\/dep\/getDepList/, 'get', smartGuideMock.getDepList)
// Mock.mock(/\/pay\/hosList/, 'get', payMock.getHosList) // 缴费页面医院列表
// 未缴费就诊人信息列表*
Mock.mock(/\/bill\/prenosQuery/, 'post', payMock.getPatientIfo)
// 已缴费就诊人信息列表*
// Mock.mock(/\/bill\/payedPrenosQuery/, 'post', payMock.getPayInfo)
// 缴费页面缴费就诊人默认信息列表*
// 挂号预下单
Mock.mock(/\/regi\/tradeInfo/, 'get', demo.getTradeInfo)
// 挂号预下单页面的医院配置信息
Mock.mock(/\/regi\/hosCfg/, 'get', demo.getHosCfg)
// 地区
Mock.mock(/\/areaListsTest\/data/, 'post', demo.getAreaLists)
// 医院模块
Mock.mock(/\/totalHospitalList\/data/, 'post', demo.getHL)
// 医院详情
Mock.mock(/\/hospitalDetail/, 'get', demo.getHospitalDetail)

// Mock.mock(/\/userinfo\/getAuthParam/, 'get', demo.getAppInfo)
// Mock.mock(/\/userinfo\/getAccessToken/, 'get', demo.getAppInfo)
export default Mock
