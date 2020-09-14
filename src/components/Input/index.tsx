import React from 'react'
import IconFont from './../IconFont/index'
import './index.css'

export interface InputProps {
  suffix?: string
  prefix?: string
  size?: any
  type?: any
  value?: any
  placeholder?: any
  onChange?: any
}

const Input = (props: InputProps) => {
  const { suffix, prefix, size, value,type, placeholder, onChange } = props

  return (
    <span className={`input-affix-wrap input-wrap-${size}`}>
      {prefix ? (
        <span className='input-prefix'>
          <IconFont type={prefix} />
        </span>
      ) : null}

      <input type={type?type:'text'} className={`input-affix-wrap input-${size}`} value={value} placeholder={placeholder} onChange={onChange} />

      {suffix ? (
        <span className='input-suffix'>
          <IconFont type={suffix} />
        </span>
      ) : null}
    </span>
  )
}

export default Input
