react wave 按钮
===
球星波浪。

### 安装

```bash
npm install --save @ahwui/react-wave
```

### 引入

```jsx
import Button from '@ahwui/react-wave';
```

### 基本用法

<!--DemoStart,bgWhite,codePen,codeSandbox--> 
```js
import ReactDOM from 'react-dom';
import Wave from '@ahwui/react-wave';

ReactDOM.render(
  <div>
    <Wave radius={100} progress={70}>
      <>
        <div>补贴资金剩余</div>
        <div>70%</div>
      </>
    </Wave>

    // 设置最小高度 50 %, 颜色渐变
    <Wave radius={100} progress={20} min={50} color={['#4C94FF', '#ff0000']}></Wave>
  </div>,
  _mount_
);
```
<!--End-->

## Props Button

| 参数 | 说明 | 类型 | 默认值 |
| -------- | -------- | -------- | -------- |
| radius | 球形半径 | Number | 50 |
| progress | 球形进度 | Number | -- |
| color | 球形颜色，支持颜色渐变 | String[] / String | `#B0E2FF` |
| borderColor | 边框颜色 | String | `#87CEFA` |
| textColor | 文字颜色 | String | `#63B8FF` |
| space | 边框距离球形间距 | Number | `3px` |
| min | 设置球星最小高 | Number | -- |