import { request } from '../Service/request';
import { bomGetByBomIdV2_0Url, bomListV2_0Url, partsGetByBomIdUrl, partsList } from './url';

const list = (service, params) => {
  return request(partsList, service, params);
};

const getByBomId = (service, params) => {
  return request(partsGetByBomIdUrl, service, params);
};

const bomListV2_0 = (service, params) => {
  return request(bomListV2_0Url, service, params);
};

const bomGetByBomIdV2_0 = (service, params) => {
  return request(bomGetByBomIdV2_0Url, service, params);
};


export const Bom = {
  list,
  getByBomId,
  bomListV2_0,
  bomGetByBomIdV2_0
};
