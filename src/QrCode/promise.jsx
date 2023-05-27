import { backObjectUrl } from './url';
import { request } from '../Service/request';


const backObject = (service, params) => {
  return request(backObjectUrl, service, params);
};


export const QrCode = {
  backObject,
};
