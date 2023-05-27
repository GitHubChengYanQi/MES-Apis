export const storehouseListSelect = {
  url: '/storehouse/listSelect',
  method: 'POST'
};

export const storeHouseListUrl = {
  url: '/storehouse/list',
  method: 'POST'
};

export const storeHouseAddUrl = {
  url: '/storehouse/add',
  method: 'POST',
  rowKey:'storehouseId'
};

export const storeHouseAddV2_0Url = {
  url: '/storehouse/v2.0/add',
  method: 'POST',
};

export const storeHouseEditUrl = {
  url: '/storehouse/edit',
  method: 'POST',
  rowKey:'storehouseId'
};

export const storeHouseEditV2_0Url = {
  url: '/storehouse/v2.0/edit',
  method: 'POST',
};

export const storeHouseTreeV2_0Url = {
  url: '/storehouse/v2.0/tree',
  method: 'POST',
};


export const storeHouseDetailUrl = {
  url: '/storehouse/detail',
  method: 'POST',
  rowKey:'storehouseId'
};

export const storeHouseDetailV2_0Url = {
  url: '/storehouse/v2.0/detail',
  method: 'POST',
  rowKey:'storehouseId'
};

export const storeHouseSortV2_0Url = {
  url: '/storehouse/v2.0/sort',
  method: 'POST',
  rowKey:'storehouseId'
};

export const storehousePositionsSortV2_0Url = {
  url: '/storehousePositions/v2.0/sort',
  method: 'POST',
  rowKey:'storehouseId'
};

export const storeHouseDeleteUrl = {
  url: '/storehouse/delete',
  method: 'POST',
  rowKey:'storehouseId'
};

export const storehousePositionsTreeView = {
  url: '/storehousePositions/treeView',
  method: 'GET'
};

export const storehousePositionsAddUrl = {
  url: '/storehousePositions/add',
  method: 'POST',
  rowKey:'storehousePositionsId'
};

export const storehousePositionsEditUrl = {
  url: '/storehousePositions/edit',
  method: 'POST',
  rowKey:'storehousePositionsId'
};

export const storehousePositionsDeleteUrl = {
  url: '/storehousePositions/delete',
  method: 'POST',
  rowKey:'storehousePositionsId'
};

export const storehousePositionsDetailUrl = {
  url: '/storehousePositions/detail',
  method: 'POST',
  rowKey:'storehousePositionsId'
};

export const storehousePositionsDeptBindGetDeptIds = {
  url: '/storehousePositionsDeptBind/getDeptIds',
  method: 'GET'
}

export const storehousePositionsBindList = {
  url: '/storehousePositionsBind/list',
  method: 'POST',
  rowKey:'bindId'
};

export const storehousePositionsBindNoPagelist = {
  url: '/storehousePositionsBind/noPagelist',
  method: 'POST',
  rowKey:'bindId'
};

export const storehousePositionsBindDelete = {
  url: '/storehousePositionsBind/delete',
  method: 'POST',
  rowKey:'bindId'
};

export const storehousePositionsBindAdd = {
  url: '/storehousePositionsBind/add',
  method: 'POST',
  rowKey:'bindId'
};


export const storehousePositionsDeleteBatch = {
  url: '/storehousePositions/deleteBatch',
  method: 'POST',
};

export const storehouseDeleteBatch = {
  url: '/storehouse/deleteBatch',
  method: 'POST',
};
