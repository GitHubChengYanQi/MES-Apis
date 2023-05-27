import { request } from '../Service/request';
import { deptAddUrl, deptDeleteUrl, deptSave, deptSortUrl, deptTreeUrl } from './url';

const deptTree = (service, params) => {
  return request(deptTreeUrl, service, params);
};

const deptEdit = (service, params) => {
  return request(deptSave, service, params);
};


const deptAdd = (service, params) => {
  return request(deptAddUrl, service, params);
};

const deptDelete = (service, params) => {
  return request(deptDeleteUrl, service, params);
};

const deptSort = (service, params) => {
  return request(deptSortUrl, service, params);
};

export const Dept = {
  deptTree,
  deptEdit,
  deptAdd,
  deptDelete,
  deptSort
};
