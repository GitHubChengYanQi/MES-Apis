import { historyAdd, historyDelete, historyList } from './url';
import { request } from '../Service/request';


const list = (service, params) => {
  return request(historyList, service, params);
};

const add = ({ value, formType }, params) => {
  return request(historyAdd, {
    data: { record: value, formType },
  }, params);
};

const deleteBatch = (formType, params) => {
  return request(historyDelete, { data: { formType } }, params);
};


export const SearchLog = {
  list,
  add,
  deleteBatch,
};
