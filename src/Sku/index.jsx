import { request, useRequest } from '../../uitl/Service/request';


// 物料列表
const skuListApi = { method: 'POST', url: '/sku/list' };
export const useList = (
  {
    service = {},
    params = {},
  }) => {


  return useRequest(skuListApi, service, params);
};

export const list = (service = {}) => {

  return request(skuListApi, service);
};

// 物料添加
const skuAddApi = { method: 'POST', url: '/sku/add' };

const validation = (
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

export const useAdd = (
  {
    service = {},
    params = {},
  }) => {

  const { run: addRun, ...props } = useRequest(skuAddApi, service, params);

  const run = (service) => {
    const result = validation(service, params.onError);
    result && addRun();
  };

  return {
    run,
    ...props,
  };
};

export const add = (service) => {
  const result = validation(service);
  if (result) {
    return request(skuAddApi, service);
  } else {
    return new Promise((resolve, reject) => {
      reject();
    });
  }
};


// 加载物料图片
export const mediaGetMediaUrls = { url: '/media/getMediaUrls', method: 'POST' };

export const getSkuImgs = async (
  {
    startIndex,
    count,
    skus = [],
    mediaIdKey = () => {
    },
    imgSize = 74,
  }) => {

  const skuMedia = skus.filter((item, index) => index >= startIndex && index < startIndex + count);
  const mediaIds = skuMedia.map(item => mediaIdKey(item));

  const res = await request(mediaGetMediaUrls, {
    data: {
      mediaIds,
      option: `image/resize,m_fill,h_${imgSize},w_${imgSize}`,
    },
  });
  const skuImgs = Array.isArray(res.data) ? res.data : [];
  return {
    skuImgs,
    newSkus: skus.map((item, index) => {
      if (index >= startIndex && index < (startIndex + count) && mediaIdKey(item)) {
        const media = skuImgs.find(urlItem => urlItem.mediaId === mediaIdKey(item));
        return {
          ...item,
          imgUrl: media && media.thumbUrl,
        };
      }
      return item;
    }),
  };

};

export const Sku = {
  useList,
  list,
  useAdd,
  add,
  getSkuImgs,
};

