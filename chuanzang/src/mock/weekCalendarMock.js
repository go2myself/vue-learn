import Mock from 'mockjs'

var result = {
  data: {},
  message: '',
  success: true,
  detail: null
}
export default {
  // 排班专家信息
  getDateDoctorInfo: () => {
    const expList = Mock.mock({
      'expList|5': [
        {
          'doctId|+1': 1,
          imgUrl: '@dataImage(78x78)',
          name: '@cname',
          level: '主任医师',
          registerFee: '@natural(5,300)',
          desc: '对口腔扁平苔藓、复发性口腔溃疡等疾病的诊疗有丰富的临床经验，熟练掌握根管治疗术及牙体粘接修复术。任江苏省中西医结合学会口腔疾病专业委员会工作秘书、江苏省整形美容协会美容牙科分会委员。主持或参与国家自然科学基金等课题5项，获江苏省新技术引进奖二等奖1项，获国家发明专利1项，发表SCI等专业论文8篇。',
          registrFlag: '@natural(0,1)'
        }
      ]
    })
    return Object.assign(result, { data: expList })
  },
  // 排班页面的日期列表
  getDateList: () => {
    const dateList = Mock.mock({
      'dateList|5': [
        {
          date: '2019-10-17'
        },
        {
          date: '2019-10-22'
        },
        {
          date: '2019-10-31'
        }
      ]
    })
    return Object.assign(result, { data: dateList })
  }
}
