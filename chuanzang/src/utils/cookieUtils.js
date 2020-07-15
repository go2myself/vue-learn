// 设置cookie
function setCookie(c_name, value, day) {
  day = day || 7
  const valueType = typeof value
  value = (valueType == 'string') ? JSON.stringify(value) : value
  var date = new Date()
  date.setTime(date.getTime() + 24 * 60 * 60 * 1000 * day)
  document.cookie = c_name + '=' + value + ';path=/;expires=' + date.toGMTString()
}

// 获取Cookie
function getCookie(name) {
  var reg = new RegExp('(^|;)?' + name + '=([^;]*)(;|$)')
  const v = document.cookie.match(reg)
  return v ? v[2] : null
}

// 删除cookie
function delCookie(name) {
  var exp = new Date()
  exp.setTime(exp.getTime() - 1)
  var cval = getCookie(name)
  if (cval != null) { document.cookie = name + '=' + cval + ';expires=' + exp.toGMTString() }
}

export default{
  setCookie,
  getCookie,
  delCookie
}
