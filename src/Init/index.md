---
title: 01.初始化
---

###### Init.initBaseURL()

```jsx
/**
 * title: 设置请求地址
 */
import React, { useState } from 'react';
import { Init ,GlobalData} from 'MES-Apis'
import { Button, Input, Space } from 'antd';


export default () => {

  const [success, setSuccess] = useState(GlobalData.baseURL);
  const [value, onChange] = useState(GlobalData.baseURL || 'http://192.168.0.111');

  return <Space>
    <Input value={value} onChange={({ target: { value } }) => onChange(value)} />
    <Button type='link' onClick={async () => {
      Init.initBaseURL(value)
      setSuccess(value);
    }}>设置</Button>
    <div
      style={{ color: success ? '#1890ff' : 'red' }}
    >
      {success ? `当前请求地址为：${GlobalData.baseURL}` : '未设置请求地址'}
    </div>
  </Space>
};
```

###### Init.responseConfig()

```jsx
/**
 * title: 响应拦截
 */
import React, { useState } from 'react';
import { Init, GlobalData } from 'MES-Apis'
import { Button, message } from 'antd';


export default () => {

  const [success, setSuccess] = useState(typeof GlobalData.errorMessage === 'function');

  return <Button
    danger={!success}
    onClick={() => {
      Init.responseConfig({
        loginTimeOut: (res) => {
          message.warning(res)
        },
        errorMessage: (res) => {
          message.error(res)
        },
      })
      setSuccess(true);
    }}>
    {success ? '设置成功！' : '设置响应拦截'}
  </Button>;
};
```


###### Init.getPublicInfo()

```jsx
/**
 * title: 获取公开信息
 */
import React, { useState } from 'react';
import { Init, GlobalData } from 'MES-Apis'
import { Button, message } from 'antd';


export default () => {

  return <Button
    onClick={() => {
      Init.getPublicInfo({
        onSuccess: (res) => {
          console.log(res)
        },
      })
    }}>
    获取公开信息
  </Button>;
};
```
