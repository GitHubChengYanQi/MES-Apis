import requestService from './index';
import { GlobalData } from '../index';
import axios from 'axios';


export const request = (
  api,
  service = {},
  defaultParams,
) => {


  const { ajaxService } = requestService();

  const params = defaultParams || {};

  return new Promise((resolve, reject) => {
    ajaxService({
      ...api,
      ...service,
      params: {
        ...service.params,
        ...GlobalData.requestParams,
      },
    }).then((res) => {
      if (typeof params.onSuccess === 'function') {
        params.onSuccess(res);
      }
      resolve(res);
    }).catch((res) => {
      if (typeof params.onError === 'function') {
        params.onError(res);
      }
      reject(res);
    });
  });
};
