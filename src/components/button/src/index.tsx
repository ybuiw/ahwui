import React from 'react';
import './index.less';

export type Type = 'primary' | 'success' | 'warning' | 'danger' | 'light' | 'dark';
export type Size = 'large' | 'default' | 'small';
export interface IButtonProps {
  style?: React.CSSProperties;
  className?: string;
  icon?: JSX.Element | string | false | null;
  loading?: boolean;
  disabled?: boolean;
  block?: boolean;
  active?: boolean;
  link?: boolean;
  htmlType?: 'button' | 'submit' | 'reset';
  type?: Type;
  size?: Size;
  children: React.ReactNode | string;
  onClick?: () => void;
}

const Button = (props: IButtonProps) => {
  const prefixCls: string = 'i--btn';
  const {
    style = {},
    type,
    size,
    active,
    disabled = false,
    block,
    link,
    className,
    loading = false,
    children,
    htmlType = 'button',
    onClick = () => {},
    ...others
  } = props;
  const cls = [
    className,
    prefixCls,
    size ? `${prefixCls}-${size}` : false,
    type ? `${prefixCls}-${type}` : false,
    link ? `${prefixCls}-link` : false,
    loading ? `${prefixCls}-loading` : false,
    disabled || loading ? 'disabled' : false,
    active ? 'active' : false,
    block ? 'block' : false
  ].filter(Boolean).join(' ');
  return (
    <button style={style} {...others} type={htmlType} disabled={disabled || loading} className={cls} onClick={onClick}>
      <>
        {loading &&
          <span className="loadding"></span>
        }
      </>
      <>
        {children &&
          React.Children.map(children, (child) => {
            if (React.isValidElement(child)) return child;
            return (
              <span> {child} </span>
            );
          })
        }
      </>
      
    </button>
  )
}

export default Button;