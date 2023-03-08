---
title: 07.入库
---

###### InStock.orderSimpleListV2_0()

```jsx
/**
 * title: 获取出库任务信息
 */
import React from 'react';
import { InStock } from 'MES-Apis'
import { Button } from 'antd';


export default () => {


  return <Button onClick={async () => {
    const res = await InStock.orderSimpleListV2_0({ })
    console.log(res)
  }}>获取采购订单信息</Button>;
};
```
