import Mock from 'mockjs'
var result = {
  data: {},
  message: '',
  success: true,
  detail: null
}
export default {
  getHospitalDetail: (params) => {
    console.log('mock', params)
    const listData = Mock.mock({
      'hosImgUrl': '',
      'hosName': '北大医院',
      'address': 'address',
      'phone': 'phone',
      'hosDesc': 'zhe手动发射点发射点撒旦风纪扣哈市豆腐块撒旦肺结核撒旦会计法和大水s法'
    })
    return Object.assign(result, { data: listData })
  },
  getHL: (params) => {
    console.log('mock', params)
    const listData = Mock.mock({
      'hosList|10': [
        {
          'hosId|+1': 1,
          'hosName': '北大医院',
          'hosImgUrl': '/static/img/banner.png'
        }
      ] })
    return Object.assign(result, { data: listData })
  },
  getAreaLists: (params) => {
    const listData = Mock.mock({
      'areaList': {
        'B': [
          {
            areaCode: '0001',
            areaName: '北京',
            isHot: '1'
          },
          {
            areaCode: '0312',
            areaName: '保定',
            isHot: '0'
          },
          {
            areaCode: '0154',
            areaName: '北京2',
            isHot: '0'
          }
        ],
        'D': [
          {
            areaCode: '1111',
            areaName: '大兴',
            isHot: '0'
          },
          {
            areaCode: '2222',
            areaName: '热门1',
            isHot: '0'
          },
          {
            areaCode: '3333',
            areaName: '北京2',
            isHot: '0'
          },
          {
            areaCode: '4444',
            areaName: '北京2',
            isHot: '0'
          },
          {
            areaCode: '5555',
            areaName: '北京2',
            isHot: '0'
          },
          {
            areaCode: '6666',
            areaName: '北京2',
            isHot: '0'
          },
          {
            areaCode: '7777',
            areaName: '北京2',
            isHot: '0'
          }
        ],
        'Y': [
          {
            areaCode: '1234',
            areaName: '延边',
            isHot: '1'
          },
          {
            areaCode: '1235',
            areaName: '北京1',
            isHot: '0'
          },
          {
            areaCode: '1236',
            areaName: '北京2',
            isHot: '0'
          }
        ]
      }
    })
    return Object.assign(result, { data: listData })
  },
  getHospitalListData: (params) => {
    console.log('Mock.getHospitalListData')
    const HospitalListData = Mock.mock({
      'hosList|10': [
        {
          'hosId|+1': 1,
          'hosName': '北大医院'
        }
      ] })
    return Object.assign(result, { data: HospitalListData })
  },
  // 排班专家信息-
  getExpList: () => {
    const expList = Mock.mock({
      'expList|5': [
        {
          'doctId|+1': 0,
          imgUrl: '@dataImage(78*78)',
          name: '@cname',
          level: '主任医师',
          registerFee: '@interger(5,300)',
          desc: '副主任医师，博士，毕业于南京医科大学，从事口腔黏膜病和牙体牙髓病专业十余年，对口',
          registrFlag: '@natural(0,1)'
        }
      ]
    })
    return Object.assign(result, { data: expList })
  },
  // 专家详情页面
  getExpDetail: (hosId, depId, doctId, date) => {
    const expDetail = Mock.mock({
      'expDetail':
        {
          doctId: '1',
          imgUrl: '@dataImage(78x78)',
          name: '@cname',
          level: '主任医师',
          registerFee: '心内科',
          desc: '副主任医师，博士，毕业于南京医科大学，从事口腔黏膜病和牙体牙髓病专业十余年，对口',
          'ordinaryList|6': [
            {
              date: '2019-10-31',
              seeTime: '08:00-09:00',
              registrFlag: '@natural(0,1)',
              scheduFlow: '排班流水号15465456',
              sectionId: '分时段流水号8789989'
            }
          ]
        }
    })
    return Object.assign(result, { data: expDetail })
  },
  // 普通号列表
  getOrdinary: () => {
    const ordinaryList = Mock.mock({
      'ordinaryList|26': [
        {
          'deptId+1': 0,
          depName: '内分泌科',
          date: '2019-10-16',
          seeTime: '07:30-08:00',
          registrFlag: '@natural(0,1)',
          scheduFlow: '2019-10-16|邱憬|296|3',
          sectionId: '08:00-09:00'
        }
      ]
    })
    return Object.assign(result, { data: ordinaryList })
  },
  // 专家-旧
  // getExperts: () => {
  //   const expertsList2 = Mock.mock({
  //     'bizContent': {
  //       'timeBody': [
  //         { 'clinicDate': '2019-08-16' },
  //         { 'clinicDate': '2019-08-16' },
  //         { 'clinicDate': '2019-08-16' },
  //         { 'clinicDate': '2019-08-16' },
  //         { 'clinicDate': '2019-08-16' },
  //         { 'clinicDate': '2019-08-17' },
  //         { 'clinicDate': '2019-08-17' },
  //         { 'clinicDate': '2019-08-17' }
  //       ],
  //       'expertBody|5': [
  //         {
  //           'imgUrl': 'http://attachmanager.jiankang51.cn/attachmanager/myrecord/viewimg?imgKey=doctor_231c039dc1a94a67b2db2ff6e957bc75_thumb',
  //           'schedules|3': [
  //             {
  //               'diagnoseFee': '22',
  //               'scheduFlow': '2019-08-16|许隽永(牙体)|420|1',
  //               'subListFlag': '0',
  //               'waitNo': '0',
  //               'stopFlag': '2',
  //               'registerFlag': '2',
  //               'clinicDate': '2019-08-16',
  //               'remainCount': '0',
  //               'registerCount': '0',
  //               'sectionId': '08:00-09:00',
  //               'totalFee': '22',
  //               'seeTime': '08:00-09:00',
  //               'additionalFee': '',
  //               'registerTypeId': '许隽永(牙体)',
  //               'departmentId': '02'
  //             }
  //           ],
  //           'ordinaryFlag': '2',
  //           'expertId': '420',
  //           'expertTitle': '副主任医师',
  //           'expertName': '许隽永',
  //           'expertSpeciality': '粘膜病、牙体牙髓病',
  //           'departmentId': '02',
  //           'expertDesc': '副主任医师，博士，毕业于南京医科大学，从事口腔黏膜病和牙体牙髓病专业十余年，对口腔扁平苔藓、复发性口腔溃疡等疾病的诊疗有丰富的临床经验，熟练掌握根管治疗术及牙体粘接修复术。任江苏省中西医结合学会口腔疾病专业委员会工作秘书、江苏省整形美容协会美容牙科分会委员。主持或参与国家自然科学基金等课题5项，获江苏省新技术引进奖二等奖1项，获国家发明专利1项，发表SCI等专业论文8篇。',
  //           'departmentName': '口腔黏膜病科'
  //         }
  //       ]
  //     }
  //   })
  //   return Object.assign(result, { data: expertsList2 })
  // },

  // 就诊人列表
  // getPatientList: () => {
  //   const patientList = Mock.mock({
  //     'bizContent': {
  //       'items|3': [
  //         {
  //           'openId': 'oid02',
  //           'patIden': '110108xxxx',
  //           'custName': '李白',
  //           'patOpenId': 'oid01',
  //           'phoneNo': '139xxxxx',
  //           'areaCode': '0010',
  //           'cardNo': '00',
  //           'paseq': '1'
  //         }
  //       ],
  //       'size': 3,
  //       'openId': 'oid02'
  //     },
  //     'bizRpsMsg': 'default1',
  //     'bizRspCode': 'default',
  //     'rspCode': 'default',
  //     'rspMsg': 'default',
  //     'sign': 'default'
  //   })
  //   return Object.assign(result, { data: patientList })
  // },
  // 就诊人列表
  getPatientList: () => {
    const patientList = Mock.mock({
      'patientList|4': [
        {
          'patientId|+1': 0,
          patientName: '@cname',
          'phoneNo': /^1[3456789]\d{5}$/,
          'patIden': /^[1-9]\d{5}(18|19|20|(3\d))\d{2}((0[1-9])|(1[0-2]))(([0-2][1-9])|10|20|30|31)\d{3}[0-9Xx]$/
        }
      ]
    })
    return Object.assign(result, { data: patientList })
  },

  // 就诊卡列表
  getCardInfoList: () => {
    const cardInfoList = Mock.mock({
      'patientCardList|3': [
        {
          'hosId|+1': 0,
          'hosName': '@cword(3,4)',
          'cardNo|+1': 2000000,
          cardType: '@natural(0,1)',
          'patientId|+1': 0,
          patientName: '@cword(2,3)'
        }
      ]
    })
    return Object.assign(result, { data: cardInfoList })
  },
  // getCardInfoList: () => {
  //   const cardInfoList = Mock.mock({
  //     'bizContent': {
  //       'items|3': [
  //         {
  //           'cardNo': '210',
  //           'cardType': '1',
  //           'patId': 'oid04',
  //           'patName': '贺知章',
  //           'phoneNo': '159xxxxx',
  //           'hosCode': '01-23206',
  //           'idNo': '110105xxxx'
  //         }
  //       ],
  //       'size': 2,
  //       'hosId': '01-23206'
  //     },
  //     'bizRpsMsg': 'default',
  //     'bizRspCode': 'default',
  //     'rspCode': 'default',
  //     'rspMsg': 'default',
  //     'sign': 'default'
  //   })
  //   return Object.assign(result, { data: cardInfoList })
  // },
  // 预约挂号页面

  // 挂号预下单
  getTradeInfo: () => {
    const tradeInfo = Mock.mock({
      rcptStreamNo: '交易流水号898908',
      totalFee: '300',
      payMethodList: {
        itemMethod: '微信',
        itemAmt: '300'
      }
    })
    return Object.assign(result, { data: tradeInfo })
  },
  // getAppointment: () => {
  //   const appointment = Mock.mock({
  //     rcptStreamNo: 1,
  //     totalFee: 300,
  //     payMethodList: {
  //       itemMethod: '微信',
  //       itemAmt: '300'
  //     }
  //   })
  //   return Object.assign(result, { data: appointment })
  // },
  // 挂号预下单页面的医院配置
  getHosCfg: () => {
    const hosCfg = Mock.mock({
      hosCfg: '医院配置信息'
    })
    return Object.assign(result, { data: hosCfg })
  },
  registerList: () => {
    const registerList = Mock.mock({
      'bizContent': {
        'queryList|3': [
          {
            'registerFlag': '0',
            'expertId': '296',
            'patientId': '',
            'departmentId': '16',
            'cardNo': '140311199304101116',
            'sectionFlow': '',
            'periodStartTime': '15:00:00',
            'mydpjStatus': '',
            'scheduleFlow': '2019-09-24|邱憬|296|3',
            'registerFlow': '2019092488863',
            'departmentName': '口腔种植科',
            'patientName': '郗宏伟',
            'verifyCode': '2019-09-24|3|140311199304101116|2019092488863$',
            'expertName': '邱憬',
            'cardNoType': '0',
            'orderNo': '6',
            'periodEndTime': '16:00:00',
            'phonenum': '15811086264',
            'canCancelFlag': '1',
            'idno': '140311199304101116',
            'operUserIdNo': '',
            'imgUrl': '',
            'additionalFee': '',
            'totalFee': '35',
            'registerTypeId': '邱憬',
            'clinicDate': '2019-09-24',
            'canDoFlag': '1',
            'position': 'http://attachmanager.jiankang51.cn/attachmanager/myrecord/viewimg?imgKey=doctor_f4c4f8f6649f4c9b9e1c1a5a54bb1377',
            'sourceName': '初诊',
            'registerFee': '20',
            'seeTime': '15:00:00-16:00:00',
            'payStatus': '',
            'diagnoseFee': '35',
            'statusCode': '10'
          }
        ]
      },
      'bizRpsMsg': 'default',
      'bizRspCode': 'default',
      'rspCode': 'default',
      'rspMsg': 'default',
      'sign': 'default'
    })
    return Object.assign(result, { data: registerList })
  },
  // 报告列表
  reportList: () => {
    const reportList = Mock.mock({
      'bizContent': {
        'queryList|3': [
          {
            'registerFlag': '0',
            'expertId': '296',
            'patientId': '',
            'departmentId': '16',
            'cardNo': '140311199304101116',
            'sectionFlow': '',
            'periodStartTime': '15:00:00',
            'mydpjStatus': '',
            'scheduleFlow': '2019-09-24|邱憬|296|3',
            'registerFlow': '2019092488863',
            'departmentName': '口腔种植科',
            'patientName': '郗宏伟',
            'verifyCode': '2019-09-24|3|140311199304101116|2019092488863$',
            'expertName': '邱憬',
            'cardNoType': '0',
            'orderNo': '6',
            'periodEndTime': '16:00:00',
            'phonenum': '15811086264',
            'canCancelFlag': '1',
            'idno': '140311199304101116',
            'operUserIdNo': '',
            'imgUrl': '',
            'additionalFee': '',
            'totalFee': '35',
            'registerTypeId': '邱憬',
            'clinicDate': '2019-09-24',
            'canDoFlag': '1',
            'position': 'http://attachmanager.jiankang51.cn/attachmanager/myrecord/viewimg?imgKey=doctor_f4c4f8f6649f4c9b9e1c1a5a54bb1377',
            'sourceName': '初诊',
            'registerFee': '20',
            'seeTime': '15:00:00-16:00:00',
            'payStatus': '',
            'diagnoseFee': '35',
            'statusCode': '10'
          }
        ]
      },
      'bizRpsMsg': 'default',
      'bizRspCode': 'default',
      'rspCode': 'default',
      'rspMsg': 'default',
      'sign': 'default'
    })
    return Object.assign(result, { data: reportList })
  }
}
