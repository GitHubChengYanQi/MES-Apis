export const positionAllList = {
  url: '/position/listSelect',
  method: 'POST',
};

export const positionAdd = {
  url: '/position/addItem',
  method: 'POST',
};

export const positionDel = {
  url: '/position/delete',
  method: 'POST',
  rowKey:'positionId'
};

export const positionSave = {
  url: '/position/editItem',
  method: 'POST',
};

export const positionView = {
  url: '/position/detail',
  method: 'POST',
};

export const positionDeptsUrl = {
  url: '/storehousePositionsDeptBind/add',
  method: 'POST'
};
