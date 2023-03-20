import { useRequest } from '../../uitl/Service/useRequest';
import { productionPickListsDetailListUrl } from './url';

const productionPickListsDetailList = (service, params) => {
  return useRequest(productionPickListsDetailListUrl, service, params);
};

export const UseOutStock = {
  productionPickListsDetailList,
};
