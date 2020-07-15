'use strict'
const merge = require('webpack-merge')
const prodEnv = require('./prod.env')

module.exports = merge(prodEnv, {
  NODE_ENV: '"development"',
  // BASE_API: '"http://api.smartmedic.oc.paas.test.abc"'  //内网开发
  // BASE_API: '"https://smpapi.abchina.com"'   //生产
  BASE_API: '"https://smpapi.test.abchina.com"'  //DMZ区开发
})