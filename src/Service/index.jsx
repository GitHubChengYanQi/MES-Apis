import axios from 'axios';
import { GlobalData } from '../index';


const ajaxService = axios.create({
  // baseURL: window.initBaseURL,
  withCredentials: true,
  headers: {
    // 'Content-Type':'application/json;charset=UTF-8',
  },
});

axios.defaults.adapter = function (config) {
  return new Promise((resolve, reject) => {
    const settle = require('axios/lib/core/settle');
    const buildURL = require('axios/lib/helpers/buildURL');
    uni.request({
      method: config.method.toUpperCase(),
      url: buildURL(config.url, config.params, config.paramsSerializer),
      header: config.headers,
      data: config.data,
      dataType: config.dataType,
      responseType: config.responseType,
      sslVerify: config.sslVerify,
      complete: function complete(response) {
        console.log(response)
        response = {
          data: response.data,
          status: response.statusCode,
          errMsg: response.errMsg,
          header: response.header,
          config: config
        };

        settle(resolve, reject, response);
      }
    })
  })
}

ajaxService.interceptors.request.use((config) => {
  config.headers.Authorization = GlobalData.mesApisToken || '';
  config.url = GlobalData.baseURL + config.url;
  console.log(config);
  return config;
}, (error) => {
  return error;
});

ajaxService.interceptors.response.use((response) => {
  if (response.status !== 200) {
    throw new Error('网络错误');
  }
  const responseData = response.data;
  const errCode = typeof responseData.errCode !== 'undefined' ? parseInt(responseData.errCode, 0) : 0;
  if (errCode !== 0) {
    if (errCode === 1502) {
      typeof GlobalData.loginTimeOut === 'function' && GlobalData.loginTimeOut(responseData.message);
      throw new Error(responseData.message);
    } else if (errCode === 1001) {
      return responseData;
    } else if (errCode !== 200) {
      GlobalData.newError = responseData.message
      typeof GlobalData.errorMessage === 'function' && GlobalData.errorMessage(responseData.message);
    }
    throw new Error(responseData.message);
  }

  return response.data;
}, (error) => {
  throw new Error(error.message);
});

const requestService = () => {
  return {
    ajaxService,
  };
};

export default requestService;
