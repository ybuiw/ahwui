import React, { useState, useEffect, Fragment } from "react";
import { DrawerWrap, MaskWrap, DrawerContent } from './style';

export interface DrawerProps {
  /** 展示或隐藏 */
  visible?: boolean;
  /** 抽屉宽度, 默认500px */
  width?: number | string;
  className?: string;
  /** 抽屉样式 */
  contentStyle?: React.CSSProperties;
  children?: React.ReactNode;
  /** 关闭事件 */
  onClose?: () => void;
}

const Drawer = (props: DrawerProps) => {
  const {
    visible = false,
    className,
    width = 500,
    contentStyle,
    children,
    onClose
  } = props;

  const [show, setShow] = useState<boolean>(visible);
  const [delayShow, setDelayShow] = useState<boolean>(visible);


  useEffect(() => {
    visible ? animShowFn() : animHideFn();
  }, [visible])

  const cls = ['ui-drawer', className].filter(item => item).join(' ');

  const animShowFn = () => {
    setShow(true);
    setTimeout(() => {
      setDelayShow(true);
    }, 200)
  }

  const animHideFn = () => {
    setDelayShow(false);
    setTimeout(() => {
      onHide()
    }, 300)
  }

  const onHide = () => {
    setShow(false);
    onClose?.();
  }

  if (!show) {
    return <Fragment />
  }

  return (
    <DrawerWrap className={cls} open={!!delayShow}>
      <MaskWrap className="ui-drawer_mask" onClick={animHideFn} />
      <DrawerContent className='ui-drawer__content' style={{ width, ...contentStyle }}>
        {children}
      </DrawerContent>
    </DrawerWrap>
  )
}

export default Drawer;