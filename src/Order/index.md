---
title: 08.订单
---

###### Order.list()

```jsx
/**
 * title: 获取出库任务信息
 */
import React from 'react';
import { Order } from 'MES-Apis'
import { Button } from 'antd';


export default () => {


  return <Button onClick={async () => {
    const res = await Order.list({ })
    console.log(res)
  }}>订单列表信息</Button>;
};
```
