import React from 'react'
import IconFont, { IconFontProps } from './../IconFont/index'
import './index.css'

export interface InputProps {
  IconFont: IconFontProps
  suffix?: string
  prefix?: string
  size?: any
  value?: any
  placeholder?: any
  onChange?: any
}

const Input: React.SFC<InputProps> = ({ suffix, prefix, size, value, placeholder, onChange }: InputProps) => {
  const CommonInput = <input className={`input-affix-wrap input-${size}`} value={value} placeholder={placeholder} onChange={onChange} />

  if (prefix) {
    return (
      <span className={`input-affix-wrap input-wrap-${size}`}>
        <span className='input-prefix'>
          <IconFont type={prefix} />
        </span>
        {CommonInput}
      </span>
    )
  }

  if (suffix) {
    return (
      <span className={`input-affix-wrap input-wrap-${size}`}>
        {CommonInput}
        <span className='input-suffix'>
          <IconFont type={suffix} />
        </span>
      </span>
    )
  }
  return CommonInput
}

export default Input
