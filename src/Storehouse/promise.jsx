import { request } from '../../uitl/Service/request';
import { storehouseListSelect, storehousePositionsTreeView } from './url';

const listSelect = (service, params) => {
  return request(storehouseListSelect, service, params);
};

const positionsTreeView = (service, params) => {
  return request(storehousePositionsTreeView, service, params);
};

export const Storehouse = {
  listSelect,
  positionsTreeView
};
