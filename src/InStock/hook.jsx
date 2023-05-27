
import { instockListUrl } from './url';
import { useRequest } from '../Service/useRequest';

const instockList = (service, params) => {
  return useRequest(instockListUrl, service, params);
};

export const UseInStock = {
  instockList,
};
