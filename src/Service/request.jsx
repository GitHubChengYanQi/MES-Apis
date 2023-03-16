import requestService from './index';



export const request = (
  api,
  service = {},
  defaultParams = {},
) => {


  const { ajaxService } = requestService();

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
