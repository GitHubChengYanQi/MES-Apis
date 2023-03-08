export const validation = (
  service = {},
  onError = () => {
  }) => {

  if (!service.data || Object.keys(service.data).length === 0) {
    onError('请添加数据！');
    console.error('请添加数据！');
    return false;
  } else if (!service.data.spu || !(service.data.spu.name || service.data.spuId)) {
    onError('请输入物料名称！');
    console.error('请输入物料名称！');
    return false;
  }
  return true;
};
