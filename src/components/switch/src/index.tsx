import React, { useState, useEffect } from 'react';
import './index.less';

interface SwitchProps {
  className?: string;
  style?: React.CSSProperties;
  checked?: boolean;
  disabled?: boolean;
  checkedNode?: React.ReactNode | string;
  unCheckedNode?: React.ReactNode | string;
  onChange?: (checked: boolean) => void;
}

const Switch = (props: SwitchProps) => {
  const prefixCls: string = 'i--switch'
  const {
    className,
    style,
    checked,
    disabled,
    checkedNode,
    unCheckedNode,
    onChange
  } = props;

  const [swtichChecked, setSwitchChecked] = useState<boolean>(false);

  useEffect(() => {
    setSwitchChecked(checked ? checked : false)
  }, [checked])

  const cls = [
    prefixCls,
    className,
    swtichChecked ? `${prefixCls}-checked` : false,
    disabled ? `${prefixCls}-disabled` : false
  ].filter(Boolean).join(' ');

  const switchClick = () => {
    if (disabled) return false;
    let _swtichChecked = !swtichChecked;
    setSwitchChecked(_swtichChecked);
    onChange?.(_swtichChecked)
  }

  return (
    <div className={cls} style={style}>
      <div className={`${prefixCls}-flex`}>
        <div className={`${prefixCls}-boxs`} onClick={switchClick}>
          {checkedNode && unCheckedNode &&
            <div className={`${prefixCls}-inner`}>
              {swtichChecked ? checkedNode : unCheckedNode}
            </div>
          }
        </div>
      </div>
    </div>
  )
}

export default Switch;