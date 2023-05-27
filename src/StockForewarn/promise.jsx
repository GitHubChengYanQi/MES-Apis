import { request } from '../Service/request';
import { warningSkuUrl } from './url';

const warningSku = (service,params) => {
  return request(warningSkuUrl,service,params)
}

export const StockForewarn = {
  warningSku
};
