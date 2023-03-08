// 物料列表
import { request } from '../../uitl/Service/request';
import { mediaGetMediaUrls, skuAddApi, skuListApi } from './url';
import { validation } from './util';


const list = (service = {}) => {

  return request(skuListApi, service);
};

const loadSkuImgs = async (
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

const getMediaUrls = (data, params) => {

  return request(mediaGetMediaUrls, { data }, params);
};

const add = (service) => {
  const result = validation(service);
  if (result) {
    return request(skuAddApi, service);
  } else {
    return new Promise((resolve, reject) => {
      reject();
    });
  }
};

export const Sku = {
  list,
  add,
  loadSkuImgs,
  getMediaUrls
};
