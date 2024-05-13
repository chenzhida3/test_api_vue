import axios from 'axios'

// *************进行后台的基本配置*****************

axios.defaults.baseURL = 'http://127.0.0.1:8088'
axios.defaults.validateStatus = function(status) {
    return true
}
axios.defaults.withCredentials = true

// 添加请求拦截器
axios.interceptors.request.use(function (config) {
    // 在发送请求之前做些什么
    return config;
  }, function (error) {
    // 对请求错误做些什么
    return Promise.reject(error);
  });

// 添加响应拦截器
axios.interceptors.response.use(function (response) {
    // 对响应数据做点什么
    return response;
  }, function (error) {
    // 对响应错误做点什么
    return Promise.reject(error);
  });

//导出后端的请求接口
  export default{

  }