import React from 'react'
import { IconFont } from '../index'

import './index.css'

export interface AvatarProps {
  icon?: any
  children?: any
}

const Avatar: React.SFC<AvatarProps> = (props) => {
  const { icon, children } = props
  return (
    <div className='avatar-wrap'>
      {icon ? <IconFont type={icon} /> : null}
      {children ? <span>{children}</span> : null}
    </div>
  )
}

export default Avatar
