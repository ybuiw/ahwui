import React, { useState, useRef, useEffect, useCallback } from 'react';
import './index.less';

const prefixCls: string = 'i--input';

export type Size = 'large' | 'default' | 'small';

export interface IInputProps {
  defaultValue?: string;
  size?: Size;
  disabled?: boolean;
  beforefix?: React.ReactNode | string;
  afterfix?: React.ReactNode | string;
  placeholder?: string;
  onChange?: (str: string) => void;
}

const Input = (props: IInputProps) => {
  const [click, setClick] = useState<boolean>(false);

  const {
    defaultValue = '',
    size = 'default',
    disabled,
    placeholder,
    beforefix,
    afterfix,
  } = props;
  
  const cls = [
    prefixCls,
    size ? `${prefixCls}-${size}` : false,
    beforefix ? `${prefixCls}-bofore` : false,
    afterfix ? `${prefixCls}-after` : false,
    disabled ? 'disabled' : false,
    click ? `${prefixCls}-focus` : false,
  ].filter(Boolean).join(' ');
   
  const inputChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    props.onChange?.(value);
  }, [])

  return (
    <div className={cls}>
      {beforefix &&
        <span className={`${prefixCls}-beforefix`}>{beforefix}</span>
      }
      <input className={`${prefixCls}-inner`} type="text"
        defaultValue={defaultValue}
        disabled={disabled}
        placeholder={placeholder}
        onFocus={() => setClick(true)}
        onBlur={() => setClick(false)}
        onChange={inputChange} />
      {afterfix &&
        <span className={`${prefixCls}-afterfix`}>{afterfix}</span>
      }
    </div>
  )
}

export default Input;