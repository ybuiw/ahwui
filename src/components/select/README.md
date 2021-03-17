react Select 按钮
===
自定义下拉框。

### 安装

```bash
npm install --save @ahwui/react-select
```

### 引入

```jsx
import Select from '@ahwui/react-select';
```

### 基本用法

<!--DemoStart,bgWhite,codePen,codeSandbox--> 
```js
import ReactDOM from 'react-dom';
import Select from '@ahwui/react-select';

const { Option } = Select;

ReactDOM.render(
  <div>
    <Select defaultValue="3">
      <Option value="1">111</Option>
      <Option value="2">222</Option>
      <Option value="3">333</Option>
      <Option value="4">444</Option>
    </Select>
  </div>,
  _mount_
);
```
<!--End-->

## Props Select

| 参数 | 说明 | 类型 | 默认值 |
| -------- | -------- | -------- | -------- |