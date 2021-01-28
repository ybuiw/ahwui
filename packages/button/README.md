react Button 按钮
===
按钮用于开始一个即时操作。

### 安装

```bash
npm install --save @ahwui/react-button
```

### 引入

```jsx
import Button from '@ahwui/react-button';
```

### 基本用法

<!--DemoStart,bgWhite,codePen,codeSandbox--> 
```js
import ReactDOM from 'react-dom';
import Button from '@ahwui/react-button';

ReactDOM.render(
  <div>
    <Button type="primary">主要按钮</Button>
    <Button type="success">成功按钮</Button>
    <Button type="warning">警告按钮</Button>
    <Button type="danger">错误按钮</Button>
    <Button type="light">亮按钮</Button>
    <Button type="dark">暗按钮</Button>
    
    <Button type="primary" loading>加载按钮</Button>
    <Button type="primary" disabled>禁用按钮</Button>
    <Button type="primary" link>文本按钮</Button>
  </div>,
  _mount_
);
```
<!--End-->

## Props Button

| 参数 | 说明 | 类型 | 默认值 |
| -------- | -------- | -------- | -------- |
| size | 按钮尺寸 | `large` / `default` / `small` | `default` |
| type | 按钮状态类型附带颜色 | `primary` / `success` / `warning` / `danger` / `light` / `dark` | -- |
| htmlType | 设置 button 原生的 type 值 | String | button |
| icon | 设置按钮的图标类型 | String/ReactNode | -- |
| block | 设置按钮为块级元素，宽度100% | Boolean | false |
| active | 激活状态(底色更深、边框夜色更深、向内投射阴影）。 | Boolean | false |
| disabled | 禁用状态 | Boolean | false |
| loading | 加载中状态 | Boolean | false |