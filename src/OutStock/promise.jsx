import { request } from '../../uitl/Service/request';
import {
  autoAdd,
  cartAddUrl, checkCodeUrl, createPickCodeUrl, createPickCodeUrlV2_0, deleteBatch, getOutStockCartsUrl,
  getPositionsAndBrandsUrl, listByCodeUrl, logList,
  outDetail,
  outDetailList,
  outStockShopUrl, outStockUrl, outStockUrlV1_2, outStockUrlV2_0,
  productionPickListsSend,
} from './url';


const outStockDetail = ({ pickListsId }) => {
  if (!pickListsId) {
    throw new Error('请传入出库单id!');
  }

  return request(outDetail, { data: { pickListsId } });
};


const outStockDetailList = (data) => {

  if (!(data && data.pickListsId)) {
    throw new Error('请传入出库单id!');
  }

  return request(outDetailList, { data });
};


const autoPick = ({ pickListsId, taskId }) => {

  if (!pickListsId) {
    throw new Error('请传入出库单id!');
  } else if (!taskId) {
    throw new Error('请传入任务id!');
  }

  return request(autoAdd, { data: { pickListsId, taskId } });
};

const cartAdd = (data, params) => {

  return request(cartAddUrl, { data }, params);
};

const getPositionsAndBrands = (data, params) => {

  return request(getPositionsAndBrandsUrl, { data }, params);
};

const outStockShop = ({ pickListsId }, params) => {

  if (!pickListsId) {
    throw new Error('请传入出库单id!');
  }

  return request(outStockShopUrl, { data: { pickListsIds: [pickListsId] } }, params);
};

const send = ({ userId, taskId }, params) => {

  return request(productionPickListsSend, { data: { userIds: userId, taskId } }, params);
};

const shopBack = (data, params) => {

  return request(deleteBatch, { data }, params);
};

const getOutStockCarts = (data, params) => {

  return request(getOutStockCartsUrl, { data }, params);
};

const createPickCode = (data, params) => {

  return request(createPickCodeUrl, { data }, params);
};

const createPickCodeV2_0 = (data, params) => {

  return request(createPickCodeUrlV2_0, { data }, params);
};

const checkCode = (code, params) => {

  return request(checkCodeUrl, { params: { code } }, params);
};

const outStockLog = (data, params) => {

  return request(logList, { data }, params);
};

const listByCode = ({ code }, params) => {

  return request(listByCodeUrl, { params: { code } }, params);
};


const outStock = ({ code }, params) => {

  return request(outStockUrl, { data: { code } }, params);
};

const outStockV1_2 = ({ code }, params) => {

  return request(outStockUrlV1_2, { data: { code } }, params);
};

const outStockV2_0 = ({ code }, params) => {

  return request(outStockUrlV2_0, { data: { code } }, params);
};

export const OutStock = {
  outStockDetail,
  outStockDetailList,
  autoPick,
  cartAdd,
  getPositionsAndBrands,
  outStockShop,
  send,
  shopBack,
  getOutStockCarts,
  createPickCode,
  checkCode,
  outStockLog,
  createPickCodeV2_0,
  listByCode,
  outStock,
  outStockV1_2,
  outStockV2_0,
};
