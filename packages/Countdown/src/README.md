CountDown 数字倒计时
===

用于获取验证码的时候展示倒数计效果。

## 安装

```jsx
import { CountDown } from '@ahwui/ui';
// or
import CountDown from '@ahwui/count-down';
```

## 基本用法

```jsx
import { useState } from 'react';
import { CountDown } from '@ahwui/ui';

export default function App() {
  const [start, setStart] = useState<boolean>(false);
  return (
    <div className="App">
      <CountDown
        isRun={start}
        onStart={() => setStart(true)}
        onChange={(isEnd) => isEnd && setStart(false)}
      />
    </div>
  )
}
```

## props

```jsx
export interface CountdownProps {
  /** 倒计时秒数，默认60秒 */
  seconds?: number;
  /** 控制倒计时是否开始 */
  isRun?: boolean;
  /** 倒计时未执行文本。默认‘获取倒计时’  */
  text?: string;
  /** 倒计时开始执行末尾额外的文本  */
  extraText?: string;
  style?: React.CSSProperties;
  className?: string;
  /** 点击获取倒计时事件 */
  onStart?: () => void;
  /**
   * 监听倒计时开始及结束
   * @isEnd 是否结束
  */
  onChange?: (isEnd?: boolean) => void;
}
```
