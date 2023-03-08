import requestService from './index';

const { ajaxService } = requestService();


export const request = (
  api,
  service = {},
  defaultParams = {},
) => {

  const {
    onSuccess = () => {
    },
    onError = () => {
    },
  } = defaultParams;


  return new Promise((resolve, reject) => {
    ajaxService({
      ...api,
      ...(service || {}),
    }).then((res) => {
      onSuccess(res);
      resolve(res);
    }).catch((res) => {
      onError(res);
      reject(res);
    });
  });
};
