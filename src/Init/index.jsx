import { request } from '../Service/request';
import { GlobalData } from '../index';

export const initBaseURL = (url) => {
  GlobalData.baseURL = url;
};


export const setToken = (token) => {
  GlobalData.mesApisToken = token;
};

export const requestParams = (params) => {
  GlobalData.requestParams = params;
};

export const responseConfig = (
  {
    loginTimeOut = () => {
    },
    errorMessage = () => {
    },
  }) => {
  GlobalData.loginTimeOut = loginTimeOut;
  GlobalData.errorMessage = errorMessage;
};

export const getNewErrorMessage = () => {
  return GlobalData.newError;
};

const getPublicInfo = (params) => {
  return request({ url: '/getPublicInfo', method: 'GET' }, {}, params);
};


export const Init = {
  initBaseURL,
  responseConfig,
  getPublicInfo,
  getNewErrorMessage,
  setToken,
  requestParams
};

