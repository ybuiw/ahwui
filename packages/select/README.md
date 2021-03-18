react Select 下拉框
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
    <Select defaultValue="3" placeholder="请选择">
      <Option value="1">111</Option>
      <Option value="2" disabled>222</Option>
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
| defaultValue | 默认值 | string | -- |
| isPos | 是否处于悬浮状态 | boolean | false |
| allowClear | 清除 | boolean | false |
| onChange | 选中时调用 | function(string) | -- |
