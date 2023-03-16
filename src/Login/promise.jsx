import { request } from '../../uitl/Service/request';
import { GlobalData, setToken } from '../Init';
import {
  codeToSessionUrl,
  getUserProfileUrl,
  loginByPhoneUrl,
  loginUrl,
  qywxLoginByCode,
  qywxLoginByCodeUrl, refreshTokenUrl,
  wxCpLoginUrl,
} from './url';

const login = ({ username, password }, params) => {

  const {
    onSuccess = () => {
    },
  } = params;

  return request(loginUrl, { data: { username, password } }, {
    ...params,
    onSuccess: (res) => {
      if (res.errCode === 0) {
        setToken(res.data)
        onSuccess(res.data);
      }
    },
  });
};


const wxCpLogin = ({ username, password }, params) => {

  const {
    onSuccess = () => {
    },
  } = params;

  return request(wxCpLoginUrl, { data: { username, password } }, {
    ...params,
    onSuccess: (res) => {
      if (res.errCode === 0) {
        setToken(res.data)
        onSuccess(res.data);
      }
    },
  });
};

const codeToSession = ({ code }, params) => {

  const {
    onSuccess = () => {
    },
  } = params;

  return request(codeToSessionUrl, { data: { code } }, {
    ...params,
    onSuccess: (res) => {
      if (res.errCode === 0) {
        setToken(res.data)
        onSuccess(res.data);
      }
    },
  });
};

const getUserProfile = ({ code }, params) => {

  return request(getUserProfileUrl, { data: { code } }, params);
};


const loginByPhone = ({ encryptedData, iv }, params) => {

  const {
    onSuccess = () => {
    },
  } = params;

  return request(loginByPhoneUrl, { data: { encryptedData, iv } }, {
    ...params,
    onSuccess: (res) => {
      if (res.errCode === 0) {
        setToken(res.data)
        onSuccess(res.data);
      }
    },
  });
};

const QWLoginByCode = ({ code }, params) => {

  const {
    onSuccess = () => {
    },
  } = params;

  return request(qywxLoginByCodeUrl, { params: { code } }, {
    ...params,
    onSuccess: (res) => {
      if (res.errCode === 0) {
        setToken(res.data)
        onSuccess(res.data);
      }
    },
  });
};

const refreshToken = (params) => {

  const {
    onSuccess = () => {
    },
  } = params;

  return request(refreshTokenUrl, {}, {
    ...params,
    onSuccess: (res) => {
      if (res.errCode === 0) {
        setToken(res.data)
        onSuccess(res.data);
      }
    },
  });
};

export const Login = {
  login,
  codeToSession,
  getUserProfile,
  loginByPhone,
  wxCpLogin,
  QWLoginByCode,
  refreshToken
};
