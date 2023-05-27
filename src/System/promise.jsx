import { request } from '../Service/request';
import { menuConfigAdd, messageCallBackUrl, miniAppCode } from './url';

const createMiniAppCode = (service, params) => {
  return request(miniAppCode, service, params);
};


const menuConfig = (service, params) => {
  return request(menuConfigAdd, service, params);
};

const messageCallBack = (service, params) => {
  return request(messageCallBackUrl, service, params);
};


export const System = {
  createMiniAppCode,
  menuConfig,
  messageCallBack
};
