import React, { useRef, useState, useEffect } from 'react';

export interface CountdownProps {
  /** 倒计时秒数，默认60秒 */
  seconds?: number;
  /** 控制倒计时是否开始 */
  isRun?: boolean;
  /** 倒计时未执行文本。默认‘获取倒计时’  */
  text?: string;
  /** 倒计时开始执行末尾额外的文本。默认‘s’  */
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

const CountDown = (props: CountdownProps) => {
  const {
    seconds = 4,
    isRun = false,
    text = '获取倒计时',
    extraText = 's',
    onStart,
    onChange,
    ...other
  } = props;

  const counRef = useRef<number>(seconds);
  const [count, setCount] = useState<number>(0);
  let timer: NodeJS.Timer | undefined = undefined;

  useEffect(() => {
    isRun && run();
  }, [isRun]);

  const run = () => {
    counRef.current = seconds;
    setCount(seconds);
    if (timer) {
      clearInterval(timer);
    }
    onChange?.();
    timer = setInterval(() => {
      counRef.current--;
      setCount(counRef.current);
      if (counRef.current === 0) {
        clearInterval(timer);
        timer = undefined;
        onChange?.(true);
      }
    }, 1000)
  }

  if (!isRun) {
    return <span {...other} onClick={() => onStart?.()}>{text}</span>
  }

  return <span {...other}>{count}{extraText}</span>
}

export default CountDown;