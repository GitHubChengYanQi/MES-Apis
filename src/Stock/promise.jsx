import { stockDetailsListUrl } from './url';
import { request } from '../Service/request';


const stockDetailsList = (service, params) => {
  return request(stockDetailsListUrl, service, params);
};



export const Stock = {
  stockDetailsList,
};
