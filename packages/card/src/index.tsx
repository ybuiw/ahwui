import React from 'react';
import './index.less';

const prefixCls: string = 'i--card';

export interface ICardProps {
  className?: string;
  style?: React.CSSProperties;
  coverStyle?: React.CSSProperties;
  title?: React.ReactNode | string;
  isHover?: boolean;
  cover?: React.ReactNode,
  extra?: React.ReactNode | string;
  children?: React.ReactNode | string;
}

const Card = (props: ICardProps) => {

  const {
    className,
    style = {},
    coverStyle = {},
    title,
    isHover,
    cover,
    extra,
    children
  } = props;
  
  const cls = [
    className,
    prefixCls,
    isHover ? `${prefixCls}-hover` : false,
  ].filter(Boolean).join(' ');

  return (
    <div className={cls} style={style}>
      {title &&
        <div className={`${prefixCls}-head`}>
          <div className={`${prefixCls}-head-title`}>{title}</div>
          {extra &&
            <div className={`${prefixCls}-head-extra`}>
              {extra}
            </div>
          }
        </div>
      }
      {cover &&
        <div className={`${prefixCls}-cover`} style={coverStyle}>
          {cover}
        </div>
      }
      <div className={`${prefixCls}-body`}>
        {children}
      </div>
    </div>
  )
}

export default Card;