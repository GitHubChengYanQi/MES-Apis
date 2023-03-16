---
title: 10.库存预警
---

###### UseStockForewarn.Reserve()

```jsx
/**
 * title: 备采
 */
import React from 'react';
import { useStockForewarn } from 'MES-Apis'
import { Button } from 'antd';


export default () => {


  return <Button onClick={async () => {
    const res = await UseStockForewarn.Reserve({})
    console.log(res)
  }}>备采</Button>;
};
```
