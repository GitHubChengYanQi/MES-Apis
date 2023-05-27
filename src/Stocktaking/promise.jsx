import {
  completeUrl,
  positionInventory,
  stockDetailsInventoryCorrectionUrl,
} from './url';
import { request } from '../Service/request';

const getPositionStock = (service, params) => {
  return request(positionInventory, service, params);
};

const complete = (service, params) => {
  return request(completeUrl, service, params);
};

const stockDetailsInventoryCorrection = (service, params) => {
  return request(stockDetailsInventoryCorrectionUrl, service, params);
};


export const Stocktaking = {
  getPositionStock,
  complete,
  stockDetailsInventoryCorrection,
};
