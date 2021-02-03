react card
===
基础的卡片容器。

### 安装

```bash
npm install --save @ahwui/react-card
```

### 引入

```jsx
import Card from '@ahwui/react-card';
```

### 基本用法

<!--DemoStart,bgWhite,codePen,codeSandbox--> 
```js
import ReactDOM from 'react-dom';
import Card from '@ahwui/react-card';

ReactDOM.render(
  <div>
    <Card
      title="我是标题"
      extra={<a>More<a/>}
      cover={<img src="http://img.netcoc.com/system/0/233/881_1593580363_9.jpg" />}
      isHover
      style={{width: '300px'}}
    >
      我是内容
    </Card>
  </div>,
  _mount_
);
```
<!--End-->

## Props

| 参数 | 说明 | 类型 | 默认值 |
| -------- | -------- | -------- | -------- |
| title | 标题 | `String` | -- |
| extra | 卡片右上角的区域 | `React.ReactNode` | -- |
| cover | 卡片模块 | `React.ReactNode` | -- |
| coverStyle | 卡片模块自定义样式 | `React.CSSProperties` | -- |
| isHover | 鼠标移过时可浮起 | `Boolean` | false |