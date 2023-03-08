import { useRequest } from '../../uitl/Service/useRequest';
import { GlobalData } from '../Init';
import { loginUrl } from './url';


const login = (params) => {

  const {
    onSuccess = () => {
    },
  } = params;

  return useRequest(loginUrl, {}, {
    ...params,
    onSuccess: (res) => {
      if (res.errCode === 0) {
        GlobalData.mesApisToken = res.data;
        onSuccess(res.data);
      }
    },
  });
};

export const UseLogin = {
  login,
};
