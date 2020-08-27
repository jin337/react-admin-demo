import React, { useState } from 'react'
import './index.css'

export interface CheckboxProps {
  checked?: boolean
  onChange?: any
  children?: string
}

const Checkbox: React.SFC<CheckboxProps> = (props) => {
  const { checked, onChange, children } = props

  const [checke, setChecked] = useState(checked)

  const cutChecked = () => {
    setChecked(!checked)
    onChange()
  }
  return (
    <label htmlFor='' className='checkbox-wrap' onClick={cutChecked}>
      <span className={`checkbox ${checke ? 'checkbox-checked' : ''}`}>
        <span className='checkbox-inner' />
        <input type='checkbox' />
      </span>
      <span className='text'>{children}</span>
    </label>
  )
}

export default Checkbox
