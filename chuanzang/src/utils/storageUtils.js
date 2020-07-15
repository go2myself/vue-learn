// 设置storage
function setStorage(key, value) {
  if (typeof key === 'string' && typeof value === 'string') {
    localStorage.setItem(key, value)
  } else if (typeof key === 'string' && typeof value === 'object') {
    localStorage.setItem(key, JSON.stringify(value))
  } else if (typeof key === 'object') {
    for (const i in key) {
      localStorage.setItem(i, key[i])
    }
  } else {
    console.log('非法传参设置storage')
  }
}
// 获取Storage
function getStorage(key) {
  return localStorage.getItem(key)
}

// 删除Storage
function removeStorage(key) {
  if (localStorage.getItem(key)) {
    localStorage.removeItem(key)
  }
}

export default{
  setStorage,
  getStorage,
  removeStorage
}
