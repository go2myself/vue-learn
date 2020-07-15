import Mock from 'mockjs'

var result = {
  data: {},
  message: '',
  success: true,
  detail: null
}
export default {
  getPatientIfo: () => { // 未缴费就诊人信息列表
    const PatientIfolist = Mock.mock({
      result: { 'personalType': '药费', 'expertName': '李医生', 'invoiceNum': 'MS8705267', 'idNo': '320115201806221925', 'patientId': '1645556', 'totalFee': '236.96', 'patientName': '郭奕然', 'preno': '6832856:0', 'tradeTime': '2019-09-18 12:08:59', 'paymentStatus': '1',
        'detailList': [{ 'itemUnit': '盒', 'excDeptName': '儿科', 'itemName': '特布他林雾化液', 'preno': '6832856:0', 'itemClass': '0', 'itemSpec': '4.845', 'itemAmount': '6.0', 'excDeptId': '105', 'itemCharges': '29.07', 'itemCode': '5997521' }, { 'itemUnit': '盒', 'excDeptName': '儿科', 'itemName': '吸入用异丙托溴铵溶液', 'preno': '6832856: 0', 'itemClass': '0', 'itemSpec': '3.739', 'itemAmount': '6.0', 'excDeptId': '105', 'itemCharges': '22.434', 'itemCode': '5997521' }, { 'itemUnit': '袋', 'excDeptName': '儿科', 'itemName': '吸入用布地奈德混悬液', 'preno': '6832856: 0', 'itemClass': '0', 'itemSpec': '14.32', 'itemAmount': '6.0', 'excDeptId': '105', 'itemCharges': '85.92', 'itemCode': '5997521' }, { 'itemUnit': '盒 ', 'excDeptName': '儿科', 'itemName': '孟鲁司特钠咀嚼片', 'preno': '6832856: 0', 'itemClass': '0', 'itemSpec': '30.48', 'itemAmount': '1.0', 'excDeptId': '105', 'itemCharges': '30.48', 'itemCode': '5997518' }, { 'itemUnit': '盒', 'excDeptName': '儿科', 'itemName': '依托红霉素混悬液', 'preno': '6832856: 0', 'itemClass': '0', 'itemSpec': '17.03', 'itemAmount': '2.0', 'excDeptId': '105', 'itemCharges': '34.06', 'itemCode': '5997518' }, { 'itemUnit': '套', 'excDeptName': '儿科', 'itemName': '氧气雾化面罩/儿童面罩型/维信', 'preno': '6832856: 0', 'itemClass': '1', 'itemSpec': '35.0', 'itemAmount': '1.0', 'excDeptId': '105', 'itemCharges': '35.0' }] }
    })
    return Object.assign(result, { data: PatientIfolist })
  },
  getPayInfo: () => { // 已缴费就诊人信息列表
    const PayInfo = Mock.mock({
      bizContent: {
        'preNoInfoList': [
          { 'invoiceNum': 'MS8705267', 'idNo': '320115201806221925', 'patientId': '1645556', 'totalFee': '236.96', 'patientName': '郭奕然', 'preno': '6832856:0',
            'tradeTime': '2019-09-18 12:08:59', 'paymentStatus': '1',
            'detailList': [{ 'itemUnit': '盒', 'excDeptName': '儿科', 'itemName': '特布他林雾化液', 'preno': '6832856:0', 'itemClass': '0', 'itemSpec': '4.845', 'itemAmount': '6.0', 'excDeptId': '105', 'itemCharges': '29.07', 'itemCode': '5997521' }, { 'itemUnit': '盒', 'excDeptName': '儿科', 'itemName': '吸入用异丙托溴铵溶液', 'preno': '6832856: 0', 'itemClass': '0', 'itemSpec': '3.739', 'itemAmount': '6.0', 'excDeptId': '105', 'itemCharges': '22.434', 'itemCode': '5997521' }, { 'itemUnit': '袋', 'excDeptName': '儿科', 'itemName': '吸入用布地奈德混悬液', 'preno': '6832856: 0', 'itemClass': '0', 'itemSpec': '14.32', 'itemAmount': '6.0', 'excDeptId': '105', 'itemCharges': '85.92', 'itemCode': '5997521' }, { 'itemUnit': '盒 ', 'excDeptName': '儿科', 'itemName': '孟鲁司特钠咀嚼片', 'preno': '6832856: 0', 'itemClass': '0', 'itemSpec': '30.48', 'itemAmount': '1.0', 'excDeptId': '105', 'itemCharges': '30.48', 'itemCode': '5997518' }, { 'itemUnit': '盒', 'excDeptName': '儿科', 'itemName': '依托红霉素混悬液', 'preno': '6832856: 0', 'itemClass': '0', 'itemSpec': '17.03', 'itemAmount': '2.0', 'excDeptId': '105', 'itemCharges': '34.06', 'itemCode': '5997518' }, { 'itemUnit': '套', 'excDeptName': '儿科', 'itemName': '氧气雾化面罩/儿童面罩型/维信', 'preno': '6832856: 0', 'itemClass': '1', 'itemSpec': '35.0', 'itemAmount': '1.0', 'excDeptId': '105', 'itemCharges': '35.0' }] },
          { 'invoiceNum': 'MS8688326', 'idNo': '320115201806221925', 'patientId': '1645556', 'totalFee': '27.21', 'patientName': '郭奕然', 'preno': '6821397: 0', 'tradeTime': '2019-09-14 09: 25: 48', 'paymentStatus': '1', 'detailList': [{ 'itemUnit': '瓶', 'excDeptName': '儿科', 'itemName': '氯雷他定糖浆', 'preno': '6821397: 0', 'itemClass': '0', 'itemSpec': '27.21', 'itemAmount': '1.0', 'excDeptId': '105', 'itemCharges': '27.21', 'itemCode': '5988480' }] }]
      }
    })
    return Object.assign(result, { data: PayInfo })
  }
}
