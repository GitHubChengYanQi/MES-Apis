import { useRequest } from '../../uitl/Service/useRequest';
import { orderListViewUrl } from './url';

const orderListView = (service, params) => {
  return useRequest(orderListViewUrl, service, params);
};

export const UseOrder = {
  orderListView,
};
