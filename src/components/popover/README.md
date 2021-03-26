react Switch 开关
===
开关选择器。

### 安装

```bash
npm install --save @ahwui/react-switch
```

### 引入

```jsx
import Switch from '@ahwui/react-switch';
```

### 基本用法

<!--DemoStart,bgWhite,codePen,codeSandbox--> 
```js
import ReactDOM from 'react-dom';
import Switch from '@ahwui/react-switch';

ReactDOM.render(
  <div>
    <Switch
      checked
      checkedNode="开启"
      unCheckedNode="关闭"
    />
  </div>,
  _mount_
);
```
<!--End-->

## Props Switch

| 参数 | 说明 | 类型 | 默认值 |
| -------- | -------- | -------- | -------- |
| checked | 默认值 | boolean | false |
| disabled | 禁用 | boolean | false |
| checkedNode | 选中时的内容 | ReactNode / string | -- |
| unCheckedNode | 非选中时的内容 | ReactNode / string | -- |
| onChange | 选中时调用 | function(checked: boolean) | -- |
