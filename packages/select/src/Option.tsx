import React, { useEffect } from 'react';

export interface OptionProps {
  value?: string;
  children?: string;
  defaultValue?: string | undefined;
  active?: string;
  disabled?: boolean;
  onCallBack?: (value: string, name: string) => void;
}


const Option = (props: OptionProps) => {
  const {
    value = '',
    children = '',
    active = undefined,
    disabled = false,
    onCallBack
  } = props;

  const labClick = () => {
    onCallBack?.(value, children)
  }

  const cls = [
    'i--select-option',
    active === value ? `i--select-option-on` : false,
    disabled ? `i--select-option-disabled` : false
  ].filter(Boolean).join(' ');

  return (
    <React.Fragment>
      {children &&
        <div className={cls} onMouseDown={labClick}>
          {children}
        </div>
      }
    </React.Fragment>
  )
}

export default Option;