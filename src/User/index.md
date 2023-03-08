---
title: 03.个人信息
---

###### User.getUserInfo()

```jsx
/**
 * title: 获取当前登录人信息
 */
import React, { useState } from 'react';
import { User } from 'MES-Apis'
import { Space, Button, Input, message } from 'antd';


export default () => {

  const [success, setSuccess] = useState();

  return <Space>
    <Button type='link' onClick={async () => {
      User.getUserInfo({
        onSuccess: (res) => {
          console.log(res)
        }
      })
    }}>获取当前登录人信息</Button>
  </Space>
};
```
