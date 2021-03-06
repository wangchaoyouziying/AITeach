//public是对axios的工具类封装，定义了http请求方法
import http from './../../../base/api/public'
import querystring from 'querystring'
let sysConfig = require('@/../config/sysConfig')
//解决跨域问题
let apiUrl = sysConfig.xcApiUrlPre;
export const page_list = (page, size, params) =>{
  //将json对象转化为key/value对
  let query = querystring.stringify(params)
  return http.requestQuickGet(apiUrl+'/cms/page/list/' + page + "/" + size + "/?" + query)
}

//页面添加
export const page_add = params => {
  return http.requestPost(apiUrl + '/cms/page/add', params)
}

//页面查询
export const page_get = id =>{
  return http.requestGet(apiUrl + "/cms/page/get/" + id)
}

//頁面修改，採用put方式提交
export const page_edit = (id, params) => {
  return http.requestPut(apiUrl + '/cms/page/edit/' + id, params)
}

//删除数据
export const page_del = id => {
  return http.requestDelete(apiUrl + '/cms/page/del/' + id)
}
