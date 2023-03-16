import { stockDetailsViewUrl } from './url';
import { useRequest } from '../../uitl/Service/useRequest';

const stockDetailsView = (service,params) => {
  return useRequest(stockDetailsViewUrl,service,params)
}

export const UseErp = {
  stockDetailsView
}
