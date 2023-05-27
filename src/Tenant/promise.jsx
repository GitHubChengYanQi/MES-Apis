import { request } from '../Service/request';
import {
  switchTenantUrl,
  createTenantUrl,
  tenantGetMyTenants,
  joinTenantUrl,
  tenantDetailUrl,
  joinTenantStatusUrl,
  tenantBindList,
  tenantBatchUpdateStatus,
  tenantBindNoPageList,
  editTenantUrl,
  deleteTenantUrl,
  tenantBatchDeleteUrl,
  tenantBatchRefuseStatus,
  updateTenantAdminUrl,
  tenantBindStatusCountUrl,
  tenantBindLogAdd,
  tenantBindLogDetail,
  tenantBindLogList,
  tenantBindLogUpdateStatus,
  tenantBindLogGetStatus,
  waitJoinCountUrl,
  tenantInviteLogAdd, tenantInviteLogDetail,
} from './url';
import { setToken } from '../Init';

const switchTenant = (service, params) => {

  const {
    onSuccess = () => {
    },
  } = params;

  return request(switchTenantUrl, service, {
    ...params,
    onSuccess: (res) => {
      if (res.errCode === 0) {
        setToken(res.data);
        onSuccess(res.data);
      }
    },
  });
};

const createTenant = (service, params) => {

  const {
    onSuccess = () => {
    },
  } = params;

  return request(createTenantUrl, service, {
    ...params,
    onSuccess: (res) => {
      if (res.errCode === 0) {
        setToken(res.data);
        onSuccess(res.data);
      }
    },
  });
};

const editTenant = (service, params) => {

  const {
    onSuccess = () => {
    },
  } = params;

  return request(editTenantUrl, service, {
    ...params,
    onSuccess: (res) => {
      if (res.errCode === 0) {
        setToken(res.data);
        onSuccess(res.data);
      }
    },
  });
};


const deleteTenant = (tenantId, params) => {
  if (!tenantId) {
    throw new Error('请传入租户id!');
  }

  return request(deleteTenantUrl, { data: { tenantId } }, params);
};


const myTenantList = (service, params) => {
  return request(tenantGetMyTenants, service, params);
};

const tenantDetail = (tenantId, params) => {
  if (!tenantId) {
    throw new Error('请传入租户id!');
  }
  return request(tenantDetailUrl, { data: { tenantId } }, params);
};


// const joinTenantStatus = (tenantId, params) => {
//   if (!tenantId) {
//     throw new Error('请传入租户id!');
//   }
//   return request(joinTenantStatusUrl, { data: { tenantId } }, params);
// };

const joinTenantList = (service, params) => {
  return request(tenantBindList, service, params);
};

const joinTenantAllList = (service, params) => {
  return request(tenantBindNoPageList, service, params);
};

const agreeJoinTenant = (service, params) => {
  return request(tenantBatchUpdateStatus, service, params);
};

const rejectJoinTenant = (service, params) => {
  return request(tenantBatchRefuseStatus, service, params);
};

const removeTenantUser = (service, params) => {
  return request(tenantBatchDeleteUrl, service, params);
};


const updateTenantAdmin = (tenantId, userId, params) => {
  return request(updateTenantAdminUrl, { data: { tenantId, userId } }, params);
};

const tenantBindStatusCount = (service, params) => {
  return request(tenantBindStatusCountUrl, service, params);
};

const invite = (service, params) => {
  return request(tenantInviteLogAdd, service, params);
};

const inviteDetail = (service, params) => {
  return request(tenantInviteLogDetail, service, params);
};

const joinTenant = (service, params) => {
  return request(tenantBindLogAdd, service, params);
};

const joinList = (service, params) => {
  return request(tenantBindLogList, service, params);
};

const updateJoinStatus = (service, params) => {
  return request(tenantBindLogUpdateStatus, service, params);
};

const joinTenantStatus = (service, params) => {
  return request(tenantBindLogGetStatus, service, params);
};

const waitJoinCount = (service, params) => {
  return request(waitJoinCountUrl, service, params);
};


export const Tenant = {
  createTenant,
  editTenant,
  deleteTenant,
  switchTenant,
  myTenantList,
  joinTenant,
  tenantDetail,
  joinTenantStatus,
  joinTenantList,
  agreeJoinTenant,
  joinTenantAllList,
  removeTenantUser,
  rejectJoinTenant,
  updateTenantAdmin,
  tenantBindStatusCount,
  invite,
  inviteDetail,
  joinList,
  updateJoinStatus,
  waitJoinCount
};
