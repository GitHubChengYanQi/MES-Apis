import { request } from '../Service/request';
import {
  createOutStockTaskByBom,
  createTaskByBomUrl, getBomListByCardIdUrl,
  pendingProductionByOrder,
  pendingProductionByPlan, productionCardDetailUrl, productionCardListUrl, productionPlanAddByBomUrl,
  productionPlanAddUrl, productionPlanDetailUrl, productionPlanListUrl, productionTaskDoneTasks,
  productionTaskListUrl,
} from './url';

const preProductionByOrder = (service, params) => {
  return request(pendingProductionByOrder, service, params);
};

const preProductionByPlan = (service, params) => {
  return request(pendingProductionByPlan, service, params);
};

const createTaskByBom = (service, params) => {
  return request(createTaskByBomUrl, service, params);
};

const productionTaskList = (service, params) => {
  return request(productionTaskListUrl, service, params);
};

const productionPlanList = (service, params) => {
  return request(productionPlanListUrl, service, params);
};

const productionPlanAdd = (service, params) => {
  return request(productionPlanAddUrl, service, params);
};

const createOutStockTask = (service, params) => {
  return request(createOutStockTaskByBom, service, params);
};

const productionCardList = (service, params) => {
  return request(productionCardListUrl, service, params);
};

const getBomListByCardId = (service, params) => {
  return request(getBomListByCardIdUrl, service, params);
};


const productionPlanAddByBom = (service, params) => {
  return request(productionPlanAddByBomUrl, service, params);
};

const doneTask = (service, params) => {
  return request(productionTaskDoneTasks, service, params);
};

const productionPlanDetail = (service, params) => {
  return request(productionPlanDetailUrl, service, params);
};

const productionCardDetail = (service, params) => {
  return request(productionCardDetailUrl, service, params);
};


export const Production = {
  preProductionByOrder,
  preProductionByPlan,
  createTaskByBom,
  productionTaskList,
  productionPlanAdd,
  productionPlanList,
  createOutStockTask,
  productionCardList,
  getBomListByCardId,
  productionPlanAddByBom,
  doneTask,
  productionPlanDetail,
  productionCardDetail
};
