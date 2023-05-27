import {
  getMediaByIdsUrl,
  getUserResultByOpenIdsUrl,
  orderDetailListUrl,
  orderListUrl,
  orderListViewTotalUrl,
  orderListViewUrl, paymentRecordAddByApply, requestFundsDetailUrl, requestFundsListUrl,
  requestFundsPostUrl,
  requestFundsTemplate,
} from './url';
import { useRequest } from '../Service/useRequest';
import { request } from '../Service/request';

const orderListView = (service, params) => {
  return useRequest(orderListViewUrl, service, params);
};

const orderListViewTotal = (service, params) => {
  return useRequest(orderListViewTotalUrl, service, params);
};


const list = (service, params) => {
  return useRequest(orderListUrl, service, params);
};

const orderDetailList = (service, params) => {
  return useRequest(orderDetailListUrl, service, params);
};

const getRequestFundsTemplate = (service, params) => {
  return useRequest(requestFundsTemplate, service, params);
};


const requestFundsPost = (service, params) => {
  return useRequest(requestFundsPostUrl, service, params);
};

const requestFundsList = (service, params) => {
  return useRequest(requestFundsListUrl, service, params);
};

const addPaymentRecord = (service, params) => {
  return useRequest(paymentRecordAddByApply, service, params);
};

const requestFundsDetail = (service, params) => {
  return useRequest(requestFundsDetailUrl, service, params);
};

const getUserResultByOpenIds = (service, params) => {
  return useRequest(getUserResultByOpenIdsUrl, service, params);
};


const getMediaByIds = (service, params) => {
  return useRequest(getMediaByIdsUrl, service, params);
};

export const UseOrder = {
  orderListView,
  orderListViewTotal,
  list,
  orderDetailList,
  getRequestFundsTemplate,
  requestFundsPost,
  requestFundsList,
  addPaymentRecord,
  requestFundsDetail,
  getUserResultByOpenIds,
  getMediaByIds,
};
