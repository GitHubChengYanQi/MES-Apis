---
title: 系统登录
---

## 系统登录

###### Login.useLogin()

```jsx
/**
 * title: Hook登录
 */
import React, { useState } from 'react';
import { Login } from 'MES-Apis'
import { Space, Button, Input, message } from 'antd';


export default () => {

  const [success, setSuccess] = useState();
  const [userData, setUserData] = useState({ username: '', password: '' });

  const { loading, run, data, error } = Login.useLogin({
    manual: true,
    onSuccess: () => {
      message.success('登录成功！')
    },
  })

  return <Space>
    <Space>
      账号：
      <Input
        value={userData.username}
        onChange={({ target: { value } }) => setUserData({ ...userData, username: value })}
      />
    </Space>
    <Space>
      密码：
      <Input
        value={userData.password}
        onChange={({ target: { value } }) => setUserData({ ...userData, password: value })}
      />
    </Space>

    <Button type='link' onClick={async () => {
      run({ data: userData })
    }}>登录</Button>
  </Space>
};
```

###### Login.login()

```jsx
/**
 * title: Promise登录
 */
import React, { useState } from 'react';
import { Login } from 'MES-Apis'
import { Space, Button, Input, message } from 'antd';


export default () => {

  const [success, setSuccess] = useState();
  const [userData, setUserData] = useState({ username: '', password: '' });

  return <Space>
    <Space>
      账号：
      <Input
        value={userData.username}
        onChange={({ target: { value } }) => setUserData({ ...userData, username: value })}
      />
    </Space>
    <Space>
      密码：
      <Input
        value={userData.password}
        onChange={({ target: { value } }) => setUserData({ ...userData, password: value })}
      />
    </Space>

    <Button type='link' onClick={() => {
      Login.login(userData, {
        onSuccess: () => {
          message.success('登录成功！')
        },
      })
    }}>登录</Button>
  </Space>
};
```
