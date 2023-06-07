import { request } from '../Service/request';
import {customerAddUrl, customerListUrl, productionPickListsCartAutoAdd} from "./url";

export const customerList = (service, params) => {
  return request(customerListUrl, service, params);
};

export const customerAdd = (service, params) => {
  return request(customerAddUrl, service, params);
};


export const outStock = (service, params) => {
  return request(productionPickListsCartAutoAdd, service, params);
};

export const Crm = {
  customerList,
  customerAdd,
  outStock
};
