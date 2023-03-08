---
title: 02.系统登录
---

###### UseLogin.login()

```jsx
/**
 * title: Hook登录
 */
import React, { useState } from 'react';
import { UseLogin } from 'MES-Apis'
import { Space, Button, Input, message } from 'antd';


export default () => {

  const [success, setSuccess] = useState();
  const [userData, setUserData] = useState({ username: 'admin', password: '111111' });

  const { loading, run, data, error } = UseLogin.login({
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
  const [userData, setUserData] = useState({ username: 'admin', password: '111111' });

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
