import { productionPickListsDetailListUrl } from './url';
import { useRequest } from '../Service/useRequest';

const productionPickListsDetailList = (service, params) => {
  return useRequest(productionPickListsDetailListUrl, service, params);
};

export const UseOutStock = {
  productionPickListsDetailList,
};
