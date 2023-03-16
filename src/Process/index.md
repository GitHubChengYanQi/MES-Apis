---
title: 05.流程
---

###### Process.auditDetail()

```jsx
/**
 * title: 获取流程任务详情
 */
import React from 'react';
import { Process } from 'MES-Apis'
import { Button } from 'antd';


export default () => {


  return <Button onClick={async () => {
    const res = await Process.auditDetail({ taskId: '' })
    console.log(res)
  }}>获取流程任务信息</Button>;
};
```

###### Process.auditPost()

```jsx
/**
 * title: 审批接口
 */
import React from 'react';
import { Process } from 'MES-Apis'
import { Button } from 'antd';


export default () => {


  return <Button onClick={async () => {
    const res = await Process.auditPost({ taskId: '', logIds: [], status: 0 })
    console.log(res)
  }}>获取流程任务信息</Button>;
};
```

###### Process.dynamicList()

```jsx
/**
 * title: 动态列表
 */
import React from 'react';
import { Process } from 'MES-Apis'
import { Button } from 'antd';


export default () => {


  return <Button onClick={async () => {
    const res = await Process.dynamicList({ })
    console.log(res)
  }}>获取动态列表</Button>;
};
```

###### Process.auditList()

```jsx
/**
 * title: 审批列表
 */
import React from 'react';
import { Process } from 'MES-Apis'
import { Button } from 'antd';


export default () => {


  return <Button onClick={async () => {
    const res = await Process.auditList({ })
    console.log(res)
  }}>获取审批列表</Button>;
};
```

###### UseProcess.auditList()

```jsx
/**
 * title: 审批列表
 */
import React from 'react';
import { Process } from 'MES-Apis'
import { Button } from 'antd';


export default () => {


  return <Button onClick={async () => {
    const res = await UseProcess.auditList({ })
    console.log(res)
  }}>获取审批列表</Button>;
};
```
