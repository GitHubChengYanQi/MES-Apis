import {
  storeHouseAddV2_0Url, storehouseDeleteBatch, storeHouseDetailV2_0Url, storeHouseEditV2_0Url,
  storehouseListSelect,
  storehousePositionsAddUrl,
  storehousePositionsBindAdd,
  storehousePositionsBindDelete,
  storehousePositionsBindList,
  storehousePositionsBindNoPagelist, storehousePositionsDeleteBatch,
  storehousePositionsDeleteUrl,
  storehousePositionsDeptBindGetDeptIds,
  storehousePositionsDetailUrl,
  storehousePositionsEditUrl, storehousePositionsSortV2_0Url,
  storehousePositionsTreeView, storeHouseSortV2_0Url, storeHouseTreeV2_0Url,
} from './url';
import { request } from '../Service/request';
import {
  storeHouseAddUrl,
  storeHouseDeleteUrl,
  storeHouseDetailUrl,
  storeHouseEditUrl,
  storeHouseListUrl,
} from './url';

const listSelect = (service, params) => {
  return request(storehouseListSelect, service, params);
};

const positionsTreeView = (service, params) => {
  return request(storehousePositionsTreeView, service, params);
};

const storeHouseList = (service, params) => {

  return request(storeHouseListUrl, service, params);
};

const storeHouseAdd = (service, params) => {

  return request(storeHouseAddUrl, service, params);
};

const storeHouseAddV2_0 = (service, params) => {

  return request(storeHouseAddV2_0Url, service, params);
};


const storeHouseEditV2_0 = (service, params) => {

  return request(storeHouseEditV2_0Url, service, params);
};

const storeHouseTreeV2_0 = (service, params) => {

  return request(storeHouseTreeV2_0Url, service, params);
};

const storeHouseDetail = (service, params) => {

  return request(storeHouseDetailUrl, service, params);
};

const storeHouseDetailV2_0 = (service, params) => {

  return request(storeHouseDetailV2_0Url, service, params);
};

const storeHouseEdit = (service, params) => {

  return request(storeHouseEditUrl, service, params);
};

const storeHouseDelete = (service, params) => {

  return request(storeHouseDeleteUrl, service, params);
};

const positionsAdd = (service, params) => {

  return request(storehousePositionsAddUrl, service, params);
};

const positionsEdit = (service, params) => {

  return request(storehousePositionsEditUrl, service, params);
};

const positionsDelete = (service, params) => {

  return request(storehousePositionsDeleteUrl, service, params);
};

const positionsDetail = (service, params) => {

  return request(storehousePositionsDetailUrl, service, params);
};


const positionsBindGetDeptIds = (service, params) => {

  return request(storehousePositionsDeptBindGetDeptIds, service, params);
};

const positionsBindDelete = (service, params) => {

  return request(storehousePositionsBindDelete, service, params);
};

const positionsBindAdd = (service, params) => {

  return request(storehousePositionsBindAdd, service, params);
};


const positionsBindList = (service, params) => {

  return request(storehousePositionsBindNoPagelist, service, params);
};

const storeHouseSortV2_0 = (service, params) => {

  return request(storeHouseSortV2_0Url, service, params);
};

const positionsSortV2_0 = (service, params) => {

  return request(storehousePositionsSortV2_0Url, service, params);
};

const  positionsDeleteBatch = (service, params) => {

  return request(storehousePositionsDeleteBatch, service, params);
};

const  storeHouseDeleteBatch = (service, params) => {

  return request(storehouseDeleteBatch, service, params);
};


export const Storehouse = {
  listSelect,
  positionsTreeView,
  storeHouseList,
  storeHouseAdd,
  storeHouseDetail,
  storeHouseEdit,
  storeHouseDelete,
  positionsAdd,
  positionsEdit,
  positionsDelete,
  positionsDetail,
  positionsBindGetDeptIds,
  positionsBindDelete,
  positionsBindAdd,
  positionsBindList,
  storeHouseAddV2_0,
  storeHouseEditV2_0,
  storeHouseTreeV2_0,
  storeHouseDetailV2_0,
  storeHouseSortV2_0,
  positionsSortV2_0,
  storeHouseDeleteBatch,
  positionsDeleteBatch
};
