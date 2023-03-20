import { useRequest } from '../../uitl/Service/useRequest';
import { instockListUrl } from './url';

const instockList = (service, params) => {
  return useRequest(instockListUrl, service, params);
};

export const UseInStock = {
  instockList,
};
