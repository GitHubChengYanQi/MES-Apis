import { useRequest } from '../../uitl/Service/useRequest';
import { orderListViewTotalUrl, orderListViewUrl } from './url';

const orderListView = (service, params) => {
  return useRequest(orderListViewUrl, service, params);
};

const orderListViewTotal = (service, params) => {
  return useRequest(orderListViewTotalUrl, service, params);
};

export const UseOrder = {
  orderListView,
  orderListViewTotal
};
