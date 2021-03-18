
import React, { useRef, useState, useEffect, useImperativeHandle } from 'react';
import ReactDOM from 'react-dom';
import { DownOutlined, CloseCircleOutlined } from '@ant-design/icons';
import Option from './Option';
import './index.less';

export interface SelectProps {
  children: React.ReactNode;
  placeholder?: string;
  isPos?: boolean;
  defaultValue?: string | undefined;
  allowClear?: boolean;
  style?: React.CSSProperties;
  onChange?: (value: string) => void;
}

interface SelectChildProps extends SelectProps {
  portalStyle?: React.CSSProperties;
  active?: string;
  onCallBack?: (value: string, name: string) => void;
}

const SelectChild = React.forwardRef((props: SelectChildProps, ref: any) => {
  const {
    children,
    portalStyle,
    onCallBack
  } = props;

  return (
    <div className="i--select-child" ref={ref} style={portalStyle}>
      {
        React.Children.map(children, (child: React.ReactNode) => {
          if (!React.isValidElement(child)) return child;
          return React.cloneElement(
            child,
            Object.assign({ ...props }, child.props, { onCallBack: onCallBack}),
          );
        })
      }
    </div>
  )
})

const Select = (props: SelectProps) => {
  const {
    placeholder = '请选择',
    isPos = false,
    style,
    defaultValue,
    allowClear,
    children,
    onChange
  } = props;

  const inputRef = useRef<any>(null);
  const childRef = useRef<any>(null);
  const [visible, setVisible] = useState<boolean>(false);
  const [portalElement, setPortalElement] = useState<Element>();
  const [portalStyle, setPortalStyle] = useState<React.CSSProperties>();
  const [name, setName] = useState<string>();
  const [dv, setDv] = useState<string>();

  const cls = [
    'i--select',
    visible ? `i--select-focus` : false,
    allowClear && dv ? `i--select-clear` : false
  ].filter(Boolean).join(' ');

  useEffect(() => {
    document.addEventListener('mousedown', handler);
    return () => {
      document.removeEventListener('mousedown', handler)
    }
  }, [])

  useEffect(() => {
    let _pos: any = isPos ? 'fixed' : 'absolute';
    if (!portalElement && visible) {
      let elm = document.createElement('div');
      elm.style.position = _pos;
      elm.style.top = '0px';
      elm.style.left = '0px';
      elm.style.width = '100%';
      setPortalElement(elm);
      document.body.appendChild(elm);
    }
    if (visible) {
      let node = inputRef.current.getBoundingClientRect();
      let top = isPos ? node.top + node.height + 4 : window.scrollY + node.top + node.height + 4;
      let left = isPos ? node.left : window.scrollX + node.left;
      setPortalStyle({
        position: _pos,
        top: top,
        left: left,
        width: node.width
      })
    } else {
      setPortalStyle({
        position: _pos,
        top: '-999999px',
        left: '-999999px',
      })
    }
  }, [visible])

  useEffect(() => {
    defaultValue && React.Children.map(children, (child: React.ReactNode) => {
      if (!React.isValidElement(child)) return child;
      if (child.props.value === defaultValue) {
        setName(child.props.children)
      }
    })
    setDv(defaultValue)
  }, [defaultValue])

  const handler = (e: MouseEvent | React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    if (e.target !== inputRef.current && e.target !== childRef.current) {
      setVisible(false);
    }
  }

  const selectClick = () => {
    let _visible = !visible;
    setVisible(_visible);
  }

  const callback = (value: string, name: string) => {
    if (dv === value) return false;
    setName(name);
    setDv(value);
    onChange?.(value);
  }

  const clearClick = () => {
    setName('');
    setDv(undefined);
    onChange?.('');
  }

  return (
    <React.Fragment>
      <div className={cls} style={style}>
        <div className="i--select-flex">
          <div className="i--select-txt" onClick={selectClick}>
            <input type="text"
              defaultValue={name}
              ref={inputRef}
              placeholder={placeholder}
              disabled />
          </div>
          <div className="i--select-arrow">
            <DownOutlined />
          </div>
          {allowClear && dv &&
            <div className="i--select-icon" onClick={clearClick}>
              <CloseCircleOutlined />
            </div>
          }
        </div>
      </div>
      {portalElement &&
        ReactDOM.createPortal(
          <SelectChild
            ref={childRef}
            portalStyle={portalStyle}
            active={dv}
            {...props}
            onCallBack={callback}
          />, 
          portalElement
        )
      }
    </React.Fragment>
  )
}

Select.Option = Option;

export default Select;