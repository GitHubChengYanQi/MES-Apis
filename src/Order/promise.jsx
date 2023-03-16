import { orderListUrl } from './url';
import { request } from '../Service/request';

const list = (service, params) => {

  return request(orderListUrl, service, params);
};

export const Order = {
  list,
};
