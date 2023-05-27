export const deptTreeUrl = {
  url: '/rest/dept/tree',
  method: 'POST',
};

export const deptSave = {
  url: '/rest/dept/update',
  method: 'POST',
};

export const deptAddUrl = {
  url: '/rest/dept/add',
  method: 'POST',
};

export const deptDeleteUrl = {
  url: '/rest/dept/delete',
  method: 'POST',
  rowKey: 'deptId'
};


export const deptSortUrl = {
  url: '/rest/dept/sort',
  method: 'POST',
  rowKey: 'deptId'
};
