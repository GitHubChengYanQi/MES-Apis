import { orderDetail, orderListUrl, paymentRecordAddByApply, requestFundsListUrl } from './url';
import { request } from '../Service/request';

const list = (service, params) => {

  return request(orderListUrl, service, params);
};

const detail = (orderId, params) => {

  if (!orderId) {
    throw new Error('请传入订单id!');
  }
  return request(orderDetail, { data: { orderId } }, params);
};

const requestFundsList = (service, params) => {
  return request(requestFundsListUrl, service, params);
};

const addPaymentRecord = (service, params) => {
  return request(paymentRecordAddByApply, service, params);
};

export const Order = {
  list,
  requestFundsList,
  addPaymentRecord,
  detail,
};
