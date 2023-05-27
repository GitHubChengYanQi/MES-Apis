import { request } from '../Service/request';
import {
  homeMenusAddUrl,
  homeMenusUrl,
  updateUserInfoUrl, userAddUrl, userChangeDeptUrl, userDetailUrl, userEditUrl,
  userInfo,
  userListUrl,
  userSelect,
} from './url';
import { setToken } from '../Init';

export const getUserInfo = (params) => {

  return request(userInfo, {}, params);
};

export const userDetail = (service,params) => {

  return request(userDetailUrl, service, params);
};


export const userAdd = (service,params) => {

  return request(userAddUrl, service, params);
};


export const userEdit = (service,params) => {

  return request(userEditUrl, service, params);
};


export const userChangeDept = (service,params) => {

  return request(userChangeDeptUrl, service, params);
};

export const userSelecList = (service, params) => {

  return request(userSelect, service, params);
};

export const userList = (service, params) => {

  return request(userListUrl, service, params);
};

export const updateUserInfo = (service, params) => {

  const {
    onSuccess = () => {
    },
  } = params;

  return request(updateUserInfoUrl, service, {
    ...params,
    onSuccess: (res) => {
      if (res.errCode === 0 && res.data) {
        setToken(res.data);
      }
      onSuccess(res.data);
    },
  });
};

export const homeMenusAdd = (service, params) => {

  return request(homeMenusAddUrl, service, params);
};

export const homeMenus = (service, params) => {

  return request(homeMenusUrl, service, params);
};

export const User = {
  getUserInfo,
  userSelecList,
  userList,
  updateUserInfo,
  homeMenusAdd,
  homeMenus,
  userDetail,
  userAdd,
  userEdit,
  userChangeDept
};
