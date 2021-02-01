react input
===
基础input输入框封装。

### 安装

```bash
npm install --save @ahwui/react-input
```

### 引入

```jsx
import Wave from '@ahwui/react-input';
```

### 基本用法

<!--DemoStart,bgWhite,codePen,codeSandbox--> 
```js
import ReactDOM from 'react-dom';
import Input from '@ahwui/react-input';

ReactDOM.render(
  <div>
    <Input placeholder="请输入" defaultValue="张23" beforefix={
      <>图标</>
    } afterfix="个" />
  </div>,
  _mount_
);
```
<!--End-->

## Props

| 参数 | 说明 | 类型 | 默认值 |
| -------- | -------- | -------- | -------- |
| defaultValue | 输入框默认内容 | string | -- |
| size | 控件大小 | `large` / `default` / `small` | `default` |
| disabled | 是否禁用状态 | boolean | `false` |
| beforefix | 设置前置内容 | `React.ReactNode` / `string` | -- |
| afterfix | 设置后置内容 | `React.ReactNode` / `string` | -- |
| onChange | 输入框内容变化时的回调 | function(str: string) | -- |