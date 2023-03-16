import { useRequest } from '../../uitl/Service/useRequest';
import { setToken } from '../Init';
import { loginUrl, qywxLoginByPhoneUrl, wxCpLoginUrl } from './url';


const login = (params) => {

  const {
    onSuccess = () => {
    },
  } = params;

  return useRequest(loginUrl, {}, {
    ...params,
    onSuccess: (res) => {
      if (res.errCode === 0) {
        setToken(res.data);
        onSuccess(res.data);
      }
    },
  });
};


const wxCpLogin = (params) => {

  const {
    onSuccess = () => {
    },
  } = params;

  return useRequest(wxCpLoginUrl, {}, {
    ...params,
    onSuccess: (res) => {
      if (res.errCode === 0) {
        setToken(res.data)
        onSuccess(res.data);
      }
    },
  });
};

const QWLoginByPhone = (params) => {

  const {
    onSuccess = () => {
    },
  } = params;

  return useRequest(qywxLoginByPhoneUrl, {}, {
    ...params,
    onSuccess: (res) => {
      if (res.errCode === 0) {
        setToken(res.data)
        onSuccess(res.data);
      }
    },
  });
};

export const UseLogin = {
  login,
  QWLoginByPhone,
  wxCpLogin,
};
