export const switchTenantUrl = {
  url: '/tenant/changeTenant',
  method: 'POST',
};

export const createTenantUrl = {
  url: '/tenant/add',
  method: 'POST',
};

export const editTenantUrl = {
  url: '/tenant/edit',
  method: 'POST',
};

export const deleteTenantUrl = {
  url: '/tenant/delete',
  method: 'POST',
};

export const tenantGetMyTenants = {
  url: '/tenant/getMyTenants',
  method: 'POST',
};

export const joinTenantUrl = {
  url: '/tenantBind/shareAdd',
  method: 'POST',
};

export const tenantDetailUrl = {
  url: '/tenant/detail',
  method: 'POST',
};

export const joinTenantStatusUrl = {
  url: '/tenantBind/getStatus',
  method: 'POST',
};

export const tenantBindList = {
  url: '/tenantBind/list',
  method: 'POST',
};

export const tenantBindNoPageList = {
  url: '/tenantBind/noPageList',
  method: 'POST',
};

export const tenantBindStatusCountUrl = {
  url: '/tenantBind/statusCount',
  method: 'POST',
};

export const tenantBatchUpdateStatus = {
  url: '/tenantBind/batchUpdateStatus',
  method: 'POST',
};

export const tenantBatchRefuseStatus = {
  url: '/tenantBind/batchRefuseStatus',
  method: 'POST',
};


export const tenantBatchDeleteUrl = {
  url: '/tenantBind/delete',
  method: 'POST',
};

export const updateTenantAdminUrl = {
  url: '/tenant/changeUser',
  method: 'POST',
};


export const tenantBindLogAdd = {
  url: '/tenantBindLog/add',
  method: 'POST',
};

export const tenantInviteLogAdd = {
  url: '/tenantInviteLog/add',
  method: 'POST',
};

export const tenantBindLogDetail = {
  url: '/tenantBindLog/detail',
  method: 'POST',
};

export const tenantInviteLogDetail = {
  url: '/tenantInviteLog/detail',
  method: 'POST',
};

export const tenantBindLogList = {
  url: '/tenantBindLog/list',
  method: 'POST',
};

export const tenantBindLogUpdateStatus = {
  url: '/tenantBindLog/updateStatus',
  method: 'POST',
};

export const tenantBindLogGetStatus = {
  url: '/tenantBindLog/getStatus',
  method: 'POST',
};

export const waitJoinCountUrl = {
  url: '/tenantBindLog/statusCount',
  method: 'POST',
};
