import React from 'react'

import './index.css'

export interface ButtonProps {
  size?: any
  type?: any
  long?: any
  onClick?: any
  children?: any
}

const Button: React.SFC<ButtonProps> = (props) => {
  const { type, long, onClick, children, size } = props
  return (
    <div className={`btn btn-${type} ${long ? 'btn-long' : ''} ${size ? 'btn-' + size : 'default'}`} onClick={onClick}>
      <span>{children}</span>
    </div>
  )
}

export default Button
