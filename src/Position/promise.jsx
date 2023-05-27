import { request } from '../Service/request';
import { positionAdd, positionAllList, positionDel, positionDeptsUrl, positionSave, positionView } from './url';

const add = (service, params) => {
  return request(positionAdd, service, params);
};

const allList = (service, params) => {
  return request(positionAllList, service, params);
};

const del = (service, params) => {
  return request(positionDel, service, params);
};

const edit = (service, params) => {
  return request(positionSave, service, params);
};

const detail = (service, params) => {
  return request(positionView, service, params);
};

const positionDepts = (service, params) => {
  return request(positionDeptsUrl, service, params);
};

export const Position = {
  add,
  allList,
  del,
  edit,
  detail,
  positionDepts
};
