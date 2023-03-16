import { useRequest } from '../Service/useRequest';
import { skuAddApi, skuListApi } from './url';
import { validation } from './util';


export const list = (
  {
    service = {},
    params = {},
  }) => {


  return useRequest(skuListApi, service, params);
};



export const add = (
  {
    service = {},
    params = {},
  }) => {

  const { run: addRun, ...props } = useRequest(skuAddApi, service, params);

  const run = (service) => {
    const result = validation(service, params.onError);
    result && addRun();
  };

  return {
    run,
    ...props,
  };
};

export const UseSku = {
  list,
  add
}
