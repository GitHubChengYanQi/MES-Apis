import { request } from '../../uitl/Service/request';
import { auditDetailUrl, auditListUrl, auditPostUrl, dynamicListUrl, getTaskIdApi } from './url';

const auditDetail = async ({ taskId, formId, type }) => {
  let orderTaskId = '';
  if (taskId) {
    orderTaskId = taskId;
  } else if (formId && type) {
    orderTaskId = await request(getTaskIdApi, { params: { formId, type } });
  } else {
    throw new Error('请传入 任务Id 或者 来源id');
  }

  return request(auditDetailUrl, { params: { taskId: orderTaskId } });
};


const auditPost = async ({ taskId, logIds, status }) => {
  if (!taskId) {
    throw new Error('请传入任务Id');
  } else if (!logIds || logIds.length === 0) {
    throw new Error('请传入当前节点Id');
  } else if (status !== 0 && status !== 1) {
    throw new Error('请检查当前审批状态');
  }

  return request(auditPostUrl, { data: { taskId, logIds, status } });
};


const dynamicList = (service, params) => {
  return request(dynamicListUrl, service, params);
};

const auditList = (service, params) => {
  return request(auditListUrl, service, params);
};

export const Process = {
  auditDetail,
  auditPost,
  dynamicList,
  auditList,
};
