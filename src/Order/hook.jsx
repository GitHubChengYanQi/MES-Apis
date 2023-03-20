import {
  orderDetailListUrl,
  orderListUrl,
  orderListViewTotalUrl,
  orderListViewUrl,
  requestFundsPostUrl,
  requestFundsTemplate,
} from './url';
import { useRequest } from '../Service/useRequest';

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

export const UseOrder = {
  orderListView,
  orderListViewTotal,
  list,
  orderDetailList,
  getRequestFundsTemplate,
  requestFundsPost,
};
