import { useState } from 'react';
import requestService from './index';

const { ajaxService } = requestService();

export const useRequest = (
  api,
  service = {},
  defaultParams = {},
) => {

  const {
    manual,
    onSuccess = () => {
    },
    onError = () => {
    },
  } = defaultParams;

  const [data, setData] = useState();

  const [loading, setLoading] = useState(false);

  const run = (service) => {
    setLoading(true);
    return new Promise((resolve, reject) => {
      ajaxService({
        ...api,
        ...(service || {}),
      }).then((res) => {
        resolve(res);
        setData(res);
        onSuccess(res);
      }).catch(() => {
        reject();
        onError();
      }).finally(() => {
        setLoading(false);
      });
    });
  };

  if (manual !== true) {
    run(service);
  }

  return {
    run,
    loading,
    data,
  };
};


export const request = (
  api,
  service = {},
) => {


  return new Promise((resolve, reject) => {
    ajaxService({
      ...api,
      ...(service || {}),
    }).then((res) => {
      resolve(res);
    }).catch(() => {
      reject();
    });
  });
};
