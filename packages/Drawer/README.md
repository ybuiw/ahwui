Drawer 抽屉
===

抽屉

## 安装

```jsx
import { Drawer } from '@ahwui/ui';
// or
import Drawer from '@ahwui/drawer';
```

## 基本用法

```jsx
import { useState } from 'react';
import { Drawer } from '@ahwui/ui';

export default function App() {
  const [start, setStart] = useState<boolean>(false);
  return (
    <div className="App">
      <Drawer visible={start} onClose={() => setStart(false)}>
        2222
      </Drawer>
    </div>
  )
}
```

## props

```jsx
export interface DrawerProps {
  /** 展示或隐藏 */
  visible?: boolean;
  /** 抽屉宽度, 默认500px */
  width?: number | string;
  /** class */
  className?: string;
  /** 抽屉样式 */
  contentStyle?: React.CSSProperties;
  /** 关闭事件 */
  onClose?: () => void;
}
```
