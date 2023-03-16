import { request } from '../Service/request';
import { pendingProductionByOrder, pendingProductionByPlan } from './url';

const preProductionByOrder = (service, params) => {
  return request(pendingProductionByOrder, service, params);
};

const preProductionByPlan = (service, params) => {
  return request(pendingProductionByPlan, service, params);
};


export const Production = {
  preProductionByOrder,
  preProductionByPlan,
};
