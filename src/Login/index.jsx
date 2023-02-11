import { request, useRequest } from '../../uitl/Service/request';

const loginUrl = { method: 'POST', url: '/rest/login' };
export const useLogin = (params) => {

  const {
    onSuccess = () => {
    },
  } = params;

  return useRequest(loginUrl, {}, {
    ...params,
    onSuccess: (res) => {
      if (res.errCode === 0) {
        window.mesApisToken = res.data;
        onSuccess(res.data);
      }
    },
  });
};

export const login = ({ username, password },params) => {

  const {
    onSuccess = () => {
    },
  } = params;

  return request(loginUrl, { data: { username, password } },{
    ...params,
    onSuccess: (res) => {
      if (res.errCode === 0) {
        window.mesApisToken = res.data;
        onSuccess(res.data);
      }
    },
  });
};


export const Login = {
  useLogin,
  login,
};

