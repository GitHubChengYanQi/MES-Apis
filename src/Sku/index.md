---
title: 物料
---

## 列表

###### Sku.useList()

```jsx
/**
 * title: 使用Hook请求
 */
import React from 'react';
import { Sku } from 'MES-Apis'
import { Button } from 'antd';


export default () => {

  const { loading, run } = Sku.useList({
    params: {
      manual: true,
      onSuccess: (res) => {

      }
    }
  })


  if (loading) {
    return <>loading...</>
  }

  return <Button onClick={async () => {
    const res = await run()
    console.log(res)
  }}>获取物料列表信息</Button>;
};
```

###### Sku.list()

```jsx
/**
 * title: 使用Promise请求
 */
import React from 'react';
import { Sku } from 'MES-Apis'
import { Button } from 'antd';

export default () => {

  return <Button onClick={async () => {
    const res = await Sku.list()
  }}>获取物料列表信息</Button>;
};
```

## 添加

###### Sku.useAdd()

```jsx
/**
 * title: 使用Hook请求
 */
import React from 'react';
import { Sku } from 'MES-Apis'
import { Button } from 'antd';

export default () => {

  const { loading, run } = Sku.useAdd({
    params: {
      manual: true,
      onSuccess: (res) => {
        // 请求成功
      },
      onError: () => {
        // 请求失败
      }
    }
  })


  if (loading) {
    return <>loading...</>
  }

  return <Button onClick={async () => {
    run({
      data: {
        // 物料数据
      }
    })
  }}>点击添加物料</Button>;
};
```

###### Sku.add()

```jsx
/**
 * title: 使用Promise请求
 */
import React from 'react';
import { Sku } from 'MES-Apis'
import { Button } from 'antd'

export default () => {

  return <Button onClick={async () => {
    Sku.add({
      data: {
        // 物料数据
      }
    })
  }}>点击添加物料</Button>;
};
```

## 其他

###### Sku.getSkuImgs()

```jsx
/**
 * title: 获取物料图片
 */

import React from 'react';
import { Sku } from 'MES-Apis'
import { Button } from 'antd'

export default () => {

  return <Button onClick={async () => {
    const { skuImgs, newSkus } = await Sku.getSkuImgs({
      startIndex: 0,
      count: 2,
      skus: [{ mediaId: 111 }, { mediaId: 222 },],
      mediaIdKey: (item) => item.mediaId
    })
    console.log(skuImgs, newSkus)
  }}>获取物料图片</Button>;
};
```

