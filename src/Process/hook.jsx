import { useRequest } from '../../uitl/Service/useRequest';
import { auditListUrl } from './url';


const auditList = (service, params) => {
  return useRequest(auditListUrl, service, params);
};

export const UseProcess = {
  auditList
}
