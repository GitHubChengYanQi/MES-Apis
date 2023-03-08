import { request } from '../../uitl/Service/request';
import {
  autoInStockUrlV2_0,
  shopCartAddUrl, showOrderDetailListUrlV2_0, showOrderListUrlV2_0,
} from './url';


const shopCartAdd = (data, params) => {

  return request(shopCartAddUrl, { data }, params);
};

const showOrderListV2_0 = (service, params) => {

  return request(showOrderListUrlV2_0, service, params);
};


const showOrderDetailListV2_0 = (service, params) => {

  return request(showOrderDetailListUrlV2_0, service, params);
};


const autoInStockV2_0 = (service, params) => {

  return request(autoInStockUrlV2_0, service, params);
};


export const InStock = {
  shopCartAdd,
  showOrderListV2_0,
  showOrderDetailListV2_0,
  autoInStockV2_0,
};
