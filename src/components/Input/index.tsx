import React from 'react'
import IconFont from './../IconFont/index'
import './index.css'

export interface InputProps {
  suffix?: string
  prefix?: string
  size?: any
  value?: any
  placeholder?: any
  onChange?: any
}

const Input: React.SFC<InputProps> = (props: InputProps) => {
  const { suffix, prefix, size, value, placeholder, onChange } = props

  return (
    <span className={`input-affix-wrap input-wrap-${size}`}>
      {prefix ? (
        <span className='input-prefix'>
          <IconFont type={prefix} />
        </span>
      ) : null}

      <input className={`input-affix-wrap input-${size}`} value={value} placeholder={placeholder} onChange={onChange} />

      {suffix ? (
        <span className='input-suffix'>
          <IconFont type={suffix} />
        </span>
      ) : null}
    </span>
  )
}

export default Input
