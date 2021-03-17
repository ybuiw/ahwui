
import React, { useRef, useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import Option from './Option';
import './index.less';

export interface SelectProps {
  children: React.ReactNode;
  placeholder?: string;
  isPos?: boolean;
  defaultValue?: string | undefined;
  style?: React.CSSProperties;
  onChange?: (value: string) => void;
}

interface SelectChildProps extends SelectProps {
  portalStyle?: React.CSSProperties;
  active?: string;
  onCallBack?: (value: string, name: string) => void;
}

const SelectChild = (props: SelectChildProps) => {
  const {
    children,
    portalStyle,
    onCallBack
  } = props;

  return (
    <div className="i--select-child" style={portalStyle}>
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
}

const Select = (props: SelectProps) => {
  const {
    placeholder = '请选择',
    isPos = false,
    style,
    defaultValue,
    children,
    onChange
  } = props;

  const inputRef = useRef<any>(null);
  const [visible, setVisible] = useState<boolean>(false);
  const [portalElement, setPortalElement] = useState<Element>();
  const [portalStyle, setPortalStyle] = useState<React.CSSProperties>();
  const [name, setName] = useState<string>();
  const [dv, setDv] = useState<string>();

  useEffect(() => {
    document.addEventListener('click', handler);
    return () => {
      document.removeEventListener('click', handler)
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
      setPortalStyle({
        position: _pos,
        top: window.scrollY + node.top + node.height + 4,
        left: window.scrollX + node.left,
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

  const handler = (e: Event) => {
    if (e.target !== inputRef.current) {
      setVisible(false);
    }
  }

  const selectClick = () => {
    let _visible = !visible;
    setVisible(_visible);
  }

  const callback = (value: string, name: string) => {
    setName(name);
    setDv(value);
    onChange?.(value);
  }

  return (
    <React.Fragment>
      <div className={`i--select ${visible ? 'i--select-focus' : ''}`} 
        style={style}
        onClick={selectClick}>
        <div className="i--select-txt">
          <input type="text"
            defaultValue={name}
            ref={inputRef}
            placeholder={placeholder}
            disabled />
        </div>
      </div>
      {portalElement &&
        ReactDOM.createPortal(
          <SelectChild
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