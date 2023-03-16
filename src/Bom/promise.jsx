import { request } from '../../uitl/Service/request';
import { partsGetByBomIdUrl, partsList } from './url';

const list = (service, params) => {
  return request(partsList, service, params);
};

const getByBomId = (service, params) => {
  return request(partsGetByBomIdUrl, service, params);
};


export const Bom = {
  list,
  getByBomId,
};
