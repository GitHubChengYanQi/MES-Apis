import { request } from '../../uitl/Service/request';
import { backObjectUrl } from './url';


const backObject = (service, params) => {
  return request(backObjectUrl, service, params);
};


export const QrCode = {
  backObject,
};
