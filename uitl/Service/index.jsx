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
  if (!window.dumiToken) {
    alert('请设置token!');
    return;
  } else if (!window.dumiBaseURL) {
    alert('请设置请求地址!');
    return;
  }
  config.headers.Authorization = window.dumiToken || '';
  config.url = window.dumiBaseURL + config.url;
  return config;
}, (error) => {
  return error;
});

ajaxService.interceptors.response.use((response) => {
  typeof window.responseConfig === 'function' && window.responseConfig(response);
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
