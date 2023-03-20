import { Sku } from './promise';
import { UseSku } from './hooks';

const SkuResultSkuJsons = ({ skuResult, describe, spu, sku, emptyText }) => {

  if (describe) {
    return `${
      skuResult.skuJsons
      &&
      skuResult.skuJsons.length > 0
      &&
      skuResult.skuJsons[0].values.attributeValues
      &&
      skuResult.skuJsons.map((items) => {
        return `${items.attribute.attribute}:${items.values.attributeValues}`;
      }).join(' , ') || (emptyText || '-')
    }`;
  }

  if (sku) {
    return `${skuResult.skuName || '-'}${skuResult.specifications ? ` / ${skuResult.specifications}` : ''}`;
  }

  if (spu) {
    return `${skuResult.spuName || skuResult.spuResult ? skuResult.spuResult.name : ''}`;
  }

  return `${skuResult.spuName || skuResult.spuResult ? skuResult.spuResult.name : ''} / ${skuResult.skuName || '-'}${skuResult.specifications ? ` / ${skuResult.specifications}` : ''}`;
};


const SkuFormat = (skuResult) => {

  return `${skuResult.spuName} ${skuResult.skuName ? ` / ${skuResult.skuName}` : ''}${skuResult.specifications ? ` / ${skuResult.specifications}` : ''}`;
};

export {
  SkuResultSkuJsons,
  SkuFormat,
  Sku,
  UseSku,
};

