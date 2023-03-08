---
title: 08.生产
---

###### Production.auditDetail()

```jsx
/**
 * title: 订单式生产列表
 */
import React from 'react';
import { Production } from 'MES-Apis'
import { Button } from 'antd';


export default () => {


  return <Button onClick={async () => {
    const res = await Production.preProductionByOrder({})
    console.log(res)
  }}>订单式生产列表</Button>;
};
```

```jsx
/**
 * title: 计划式生产列表
 */
import React from 'react';
import { Production } from 'MES-Apis'
import { Button } from 'antd';


export default () => {


  return <Button onClick={async () => {
    const res = await Production.preProductionByPlan({})
    console.log(res)
  }}>计划式生产列表</Button>;
};
```
