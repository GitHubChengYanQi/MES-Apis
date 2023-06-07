import { request } from '../Service/request';
import {
  shopCartAddUrl,
  shopCartApplyListUrl, shopCartDeleteUrl,
  shopCartEditUrl,
  statisticalViewStockTotalView,
  stockForewarnView, supplierAddUrl, supplierListUrl
} from './url';

export const homeData = (service, params) => {
  return request(stockForewarnView, service, params);
};

export const miniappHomeData = (service, params) => {
  return request(statisticalViewStockTotalView, service, params);
};

export const shopCartApplyList = (service, params) => {
  return request(shopCartApplyListUrl, service, params);
};

export const shopCartEdit = (service, params) => {
  return request(shopCartEditUrl, service, params);
};


export const shopCartAdd = (service, params) => {
  return request(shopCartAddUrl, service, params);
};


export const shopCartDelete = (service, params) => {
  return request(shopCartDeleteUrl, service, params);
};



export const supplierList = (service, params) => {
  return request(supplierListUrl, service, params);
};

export const supplierAdd = (service, params) => {
  return request(supplierAddUrl, service, params);
};

export const Erp = {
  homeData,
  miniappHomeData,
  shopCartApplyList,
  shopCartEdit,
  shopCartAdd,
  shopCartDelete,
  supplierList,
  supplierAdd
};
