import { request } from '../../uitl/Service/request';

export const GlobalData = {
  baseURL: '',
  loginTimeOut: null,
  errorMessage: null,
  mesApisToken: '',
  newError: '',
};

export const initBaseURL = (url) => {
  GlobalData.baseURL = url;
};


export const setToken = (token) => {
  GlobalData.mesApisToken = token;
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
};

