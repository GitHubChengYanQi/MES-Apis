// 物料列表
import { request } from '../Service/request';
import {
  brandAddUrl,
  brandDeleteUrl,
  brandEditUrl,
  brandListUrl,
  categorySortUrl,
  editEnclosureUrl,
  generalFormDataListUrl,
  materialAddUrl,
  materialListSelectUrl,
  mediaGetMediaUrls,
  skuAddApi,
  skuAddApiV2_0, skuBatchAddApi, skuDeleteBatchUrl,
  skuDeleteUrl,
  skuDetailUrl,
  skuEditUrl,
  skuFormLayoutUrl,
  skuHandleRecordUrl,
  skuListApi,
  skuListApiV1_1,
  spuClassificationAdd,
  spuClassificationDelete,
  spuClassificationDeleteBatch,
  spuClassificationEdit,
  spuClassificationTreeView,
  spuClassListSelectUrl,
  spuDetailUrl,
  spuListApi,
  supplyListUrl,
  unitAddUrl,
  unitDeleteUrl,
  unitEditUrl,
  unitListSelectUrl,
} from './url';
import { validation } from './util';


const list = (service = {}, params) => {

  return request(skuListApi, service, params);
};

const listV1_1 = (service = {}, params) => {

  return request(skuListApiV1_1, service, params);
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

const addV2_0 = (service) => {
  const result = validation(service);
  if (result) {
    return request(skuAddApiV2_0, service);
  } else {
    return new Promise((resolve, reject) => {
      reject();
    });
  }
};


const edit = (service) => {
  return request(skuEditUrl, service);
};

const del = (service) => {
  return request(skuDeleteUrl, service);
};


const batchDelete= (service) => {
  return request(skuDeleteBatchUrl, service);
};


const detail = (skuId, params) => {
  return request(skuDetailUrl, { data: { skuId } }, params);
};

const spuClassListSelect = (service, params) => {
  return request(spuClassListSelectUrl, service, params);
};

const skuLogs = (service, params) => {
  return request(skuHandleRecordUrl, service, params);
};

const supplyList = (service, params) => {
  return request(supplyListUrl, service, params);
};

const editEnclosure = (service, params) => {
  return request(editEnclosureUrl, service, params);
};

const skuFormLayout = (classId, params) => {
  return request(skuFormLayoutUrl, { data: { spuClassificationId: classId } }, params);
};

const generalFormDataList = (service, params) => {
  return request(generalFormDataListUrl, service, params);
};

const spuClassTreeView = (service, params) => {
  return request(spuClassificationTreeView, service, params);
};

const brandList = (service, params) => {
  return request(brandListUrl, service, params);
};

const brandAdd = (service, params) => {
  return request(brandAddUrl, service, params);
};

const brandEdit = (service, params) => {
  return request(brandEditUrl, service, params);
};

const brandDelete = (service, params) => {
  return request(brandDeleteUrl, service, params);
};

const materialListSelect = (service, params) => {
  return request(materialListSelectUrl, service, params);
};

const unitListSelect = (service, params) => {
  return request(unitListSelectUrl, service, params);
};

const spuList = (service, params) => {
  return request(spuListApi, service, params);
};

const spuDetail = (service, params) => {
  return request(spuDetailUrl, service, params);
};

const spuClassAdd = (service, params) => {
  return request(spuClassificationAdd, service, params);
};

const spuClassEdit = (service, params) => {
  return request(spuClassificationEdit, service, params);
};

const spuClassDelete = (service, params) => {
  return request(spuClassificationDelete, service, params);
};

const spuClassBatchDelete = (service, params) => {
  return request(spuClassificationDeleteBatch, service, params);
};

const unitAdd = (service, params) => {
  return request(unitAddUrl, service, params);
};

const unitEdit = (service, params) => {
  return request(unitEditUrl, service, params);
};

const unitDelete = (service, params) => {
  return request(unitDeleteUrl, service, params);
};

const materialAdd = (service, params) => {
  return request(materialAddUrl, service, params);
};


const categorySort = (service, params) => {
  return request(categorySortUrl, service, params);
};


const batchAdd = (service, params) => {
  return request(skuBatchAddApi, service, params);
};

export const Sku = {
  list,
  listV1_1,
  add,
  loadSkuImgs,
  getMediaUrls,
  detail,
  spuClassListSelect,
  skuLogs,
  supplyList,
  editEnclosure,
  skuFormLayout,
  generalFormDataList,
  spuClassTreeView,
  brandList,
  brandAdd,
  brandEdit,
  brandDelete,
  materialListSelect,
  unitListSelect,
  spuList,
  spuDetail,
  spuClassAdd,
  unitAdd,
  materialAdd,
  addV2_0,
  spuClassEdit,
  spuClassDelete,
  unitEdit,
  unitDelete,
  edit,
  del,
  categorySort,
  spuClassBatchDelete,
  batchDelete,
  batchAdd
};
