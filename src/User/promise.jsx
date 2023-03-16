import { request } from '../../uitl/Service/request';
import { deptTreeUrl, userInfo, userListUrl, userSelect } from './url';

export const getUserInfo = (params) => {

  return request(userInfo, {}, params);
};


export const deptTree = (params) => {

  return request(deptTreeUrl, {}, params);
};

export const userSelecList = (server, params) => {

  return request(userSelect, server, params);
};

export const userList = (server, params) => {

  return request(userListUrl, server, params);
};

export const User = {
  getUserInfo,
  deptTree,
  userSelecList,
  userList,
};
