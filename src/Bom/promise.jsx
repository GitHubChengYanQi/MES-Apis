import { request } from '../../uitl/Service/request';
import { partsList } from './url';

const list = (service, params) => {
  return request(partsList, service, params);
};


export const Bom = {
  list,
};
