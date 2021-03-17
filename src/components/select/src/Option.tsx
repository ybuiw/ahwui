import React, { useEffect } from 'react';

export interface OptionProps {
  value?: string;
  children?: string;
  defaultValue?: string;
  active?: string;
  onCallBack?: (value: string, name: string) => void;
}


const Option = (props: OptionProps) => {
  const {
    value = '',
    children = '',
    active = undefined,
    onCallBack
  } = props;

  const labClick = () => {
    onCallBack?.(value, children)
  }

  return (
    <React.Fragment>
      {children &&
        <div className={`i--select-option ${active === value ? 'i--select-option-on' : ''}`} onClick={labClick}>
          {children}
        </div>
      }
    </React.Fragment>
  )
}

export default Option;