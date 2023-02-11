import React from 'react';
import axios from 'axios';
import { Init } from '../../src/Init';


const ajaxService = axios.create({
  // baseURL: window.initBaseURL,
  withCredentials: true,
  headers: {
    // 'Content-Type':'application/json;charset=UTF-8',
  },
});

ajaxService.interceptors.request.use((config) => {
  config.headers.Authorization = window.mesApisToken || '';
  config.url = window.dumiBaseURL + config.url;
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
      typeof window.loginTimeOut === 'function' && window.loginTimeOut(responseData.message);
      throw new Error(responseData.message);
    } else if (errCode === 1001) {
      return responseData;
    } else if (errCode !== 200) {
      typeof window.errorMessage === 'function' && window.errorMessage(responseData.message);
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
