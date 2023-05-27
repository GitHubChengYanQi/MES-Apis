import requestService from './index';
import { useState } from 'react';


export const useRequest = (
  api,
  service = {},
  defaultParams = {},
) => {

  const { ajaxService } = requestService();

  const [data, setData] = useState();

  const [error, setError] = useState();

  const [loading, setLoading] = useState(false);

  const params = defaultParams || {};

  const run = (service) => {
    setLoading(true);
    return new Promise((resolve, reject) => {
      ajaxService({
        ...api,
        ...(service || {}),
      }).then((res) => {
        resolve(res);
        setData(res);
        if (typeof params.onSuccess === 'function'){
          params.onSuccess(res);
        }
      }).catch((res) => {
        setError(res);
        reject(res);
        if (typeof params.onError === 'function'){
          params.onError(res);
        }
      }).finally(() => {
        setLoading(false);
      });
    });
  };

  if (defaultParams?.manual !== true) {
    run(service);
  }

  return {
    run,
    loading,
    data,
    error,
  };
};
