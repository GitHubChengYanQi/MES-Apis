import { request } from '../Service/request';
import { statisticalViewStockTotalView, stockForewarnView } from './url';

export const homeData = (service, params) => {
  return request(stockForewarnView, service, params);
};

export const miniappHomeData = (service, params) => {
  return request(statisticalViewStockTotalView, service, params);
};

export const Erp = {
  homeData,
  miniappHomeData
};
