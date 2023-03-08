import { request } from '../../uitl/Service/request';
import { userInfo } from './url';

export const getUserInfo = (params) => {

  return request(userInfo, {}, params);
};

export const User = {
  getUserInfo,
};
