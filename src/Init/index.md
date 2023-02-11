---
title: 初始化
---

## 设置请求信息

###### Init.initBaseURL()

```jsx
/**
 * title: 设置请求地址
 */
import React, { useState } from 'react';
import { Init } from 'MES-Apis'
import { Button, Input, Space } from 'antd';


export default () => {

  const [success, setSuccess] = useState(window.dumiBaseURL);
  const [value, onChange] = useState(window.dumiBaseURL || 'http://192.168.0.111');

  return <Space>
    <Input value={value} onChange={({ target: { value } }) => onChange(value)} />
    <Button type='link' onClick={async () => {
      Init.initBaseURL(value)
      setSuccess(value);
    }}>设置</Button>
    <div
      style={{ color: success ? '#1890ff' : 'red' }}
    >
      {success ? `当前请求地址为：${window.dumiBaseURL}` : '未设置请求地址'}
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
import { Init } from 'MES-Apis'
import { Button, message } from 'antd';


export default () => {

  const [success, setSuccess] = useState(typeof window.loginTimeOut === 'function');

  return <Button
    danger={!success}
    onClick={async () => {
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
