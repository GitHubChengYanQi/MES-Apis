---
title: 09.物料Bom
---

###### Bom.list()

```jsx
/**
 * title: Bom列表
 */
import React from 'react';
import { Bom } from 'MES-Apis'
import { Button } from 'antd';


export default () => {


  return <Button onClick={async () => {
    const res = await Bom.list({})
    console.log(res)
  }}>Bom列表</Button>;
};
```
