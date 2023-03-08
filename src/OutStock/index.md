---
title: 06.出库
---

###### OutStock.outStockDetail()

```jsx
/**
 * title: 获取出库任务信息
 */
import React from 'react';
import { OutStock } from 'MES-Apis'
import { Button } from 'antd';


export default () => {


  return <Button onClick={async () => {
    const res = await OutStock.outStockDetail({ pickListsId:'' })
    console.log(res)
  }}>获取出库任务信息</Button>;
};
```

###### OutStock.outStockDetailList()

```jsx
/**
 * title: 获取出库物料列表
 */
import React from 'react';
import { OutStock } from 'MES-Apis'
import { Button } from 'antd';


export default () => {


  return <Button onClick={async () => {
    const res = await OutStock.outStockDetailList({ })
    console.log(res)
  }}>获取出库物料列表</Button>;
};
```

###### OutStock.cartAdd()

```jsx
/**
 * title: 添加出库购物车
 */
import React from 'react';
import { OutStock } from 'MES-Apis'
import { Button } from 'antd';


export default () => {


  return <Button onClick={async () => {
    const res = await OutStock.cartAdd({ })
    console.log(res)
  }}>添加出库购物车</Button>;
};
```


###### OutStock.getPositionsAndBrands()

```jsx
/**
 * title: 获取物料所在库存
 */
import React from 'react';
import { OutStock } from 'MES-Apis'
import { Button } from 'antd';


export default () => {


  return <Button onClick={async () => {
    const res = await OutStock.getPositionsAndBrands({ })
    console.log(res)
  }}>获取物料所在库存</Button>;
};
```

###### OutStock.outStockShop()

```jsx
/**
 * title: 获取出库购物车列表
 */
import React from 'react';
import { OutStock } from 'MES-Apis'
import { Button } from 'antd';


export default () => {


  return <Button onClick={async () => {
    const res = await OutStock.outStockShop({ })
    console.log(res)
  }}>获取出库购物车列表</Button>;
};
```


###### OutStock.send()

```jsx
/**
 * title: 通知领料人
 */
import React from 'react';
import { OutStock } from 'MES-Apis'
import { Button } from 'antd';


export default () => {


  return <Button onClick={async () => {
    const res = await OutStock.send({ })
    console.log(res)
  }}>通知领料人</Button>;
};
```


###### OutStock.shopBack()

```jsx
/**
 * title: 购物车退回
 */
import React from 'react';
import { OutStock } from 'MES-Apis'
import { Button } from 'antd';


export default () => {


  return <Button onClick={async () => {
    const res = await OutStock.shopBack({ })
    console.log(res)
  }}>购物车退回</Button>;
};
```


###### OutStock.getOutStockCarts()

```jsx
/**
 * title: 可领料列表
 */
import React from 'react';
import { OutStock } from 'MES-Apis'
import { Button } from 'antd';


export default () => {


  return <Button onClick={async () => {
    const res = await OutStock.getOutStockCarts({ })
    console.log(res)
  }}>可领料列表</Button>;
};
```

###### OutStock.createPickCode()

```jsx
/**
 * title: 创建领料码
 */
import React from 'react';
import { OutStock } from 'MES-Apis'
import { Button } from 'antd';


export default () => {


  return <Button onClick={async () => {
    const res = await OutStock.createPickCode({ })
    // v2.0
    const resV2_0 = await OutStock.createPickCodeV2_0({ })
  }}>创建</Button>;
};
```

###### OutStock.checkCode()

```jsx
/**
 * title: 查看领料码
 */
import React from 'react';
import { OutStock } from 'MES-Apis'
import { Button } from 'antd';


export default () => {


  return <Button onClick={async () => {
    const res = await OutStock.checkCode({ })
    console.log(res)
  }}>查看领料码</Button>;
};
```

###### OutStock.outStockLog()

```jsx
/**
 * title: 出库记录
 */
import React from 'react';
import { OutStock } from 'MES-Apis'
import { Button } from 'antd';


export default () => {


  return <Button onClick={async () => {
    const res = await OutStock.outStockLog({ })
    console.log(res)
  }}>出库记录</Button>;
};
```

###### OutStock.listByCode()

```jsx
/**
 * title: 出库确认获取二维码数据
 */
import React from 'react';
import { OutStock } from 'MES-Apis'
import { Button } from 'antd';


export default () => {


  return <Button onClick={async () => {
    const res = await OutStock.listByCode({ })
    console.log(res)
  }}>出库确认获取二维码数据</Button>;
};
```

###### OutStock.outStock()

```jsx
/**
 * title: 领料出库
 */
import React from 'react';
import { OutStock } from 'MES-Apis'
import { Button } from 'antd';


export default () => {


  return <Button onClick={async () => {
    const res = await OutStock.outStock({ })
    // v2_0
    const resV2_0 = await OutStock.outStockV2_0({ })
    console.log(res)
  }}>领料出库</Button>;
};
```
