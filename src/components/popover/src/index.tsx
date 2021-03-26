import React, { useState, useEffect, useMemo } from 'react';
import ReactDOM from 'react-dom';
import { CSSTransition } from 'react-transition-group';
import './index.less';

interface PopoverProps {
  className?: string;
  style?: React.CSSProperties;
  trigger?: 'hover' | 'click' | 'focus';
  children: React.ReactNode;
  content?: React.ReactNode;
  onChange?: (checked: boolean) => void;
}

const Popover = (props: PopoverProps) => {
  const prefixCls: string = 'i--popover'
  const {
    className,
    style,
    content = '',
    children
  } = props;

  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [overlayElement, setOverlayElement] = useState<Element>();

  const cls = [
    prefixCls,
    className,
  ].filter(Boolean).join(' ');

  useMemo(() => {
    if (!overlayElement && isOpen) {
      let elm = document.createElement('div');
      elm.className = 'i--overlay'
      setOverlayElement(elm);
      document.body.appendChild(elm);
    } else {
      setOverlayElement(undefined);
      setTimeout(() => {
        overlayElement?.remove();
      });
    }
  }, [isOpen])

  const onShowPopover = (e: any) => {
    console.log(e)
    let _isOpen = !isOpen;
    setIsOpen(_isOpen);
  }

  return (
    <div>
      <div className={cls} style={style} onClick={onShowPopover}>
        {children && children}
      </div>
      {overlayElement &&
        ReactDOM.createPortal(
          <CSSTransition
            in={isOpen}
            unmountOnExit
            timeout={300}
            classNames="i--overlay">
              <div className={`i--overlay-content`}>{content}</div>
          </CSSTransition>, 
          overlayElement
        )
      }
    </div>
    
    
  )
}

export default Popover;