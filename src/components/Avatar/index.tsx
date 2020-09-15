import React from 'react'
import { IconFont } from '../index'

import './index.css'

export interface AvatarProps {
  icon?: any
  size?: any
  children?: any
}

const Avatar = (props: AvatarProps) => {
  const { icon, size, children } = props
  return (
    <div
      className={[
        'avatar-wrap',
        size ? 'avatar-' + size : 'avatar-default'
      ].join(' ')}>
      {icon ? <IconFont type={icon} /> : null}
      {children ? <span>{children}</span> : null}
    </div>
  )
}

export default Avatar
