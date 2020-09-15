import React from 'react'
import Cookie from 'js-cookie'
import { useHistory } from 'react-router-dom'

import { Poptip, Avatar, IconFont } from './../../components'

const Header = (props: any) => {
  const { menu, label, onSelect } = props
  const hostory = useHistory()

  const exit = () => {
    Cookie.remove('REACT-ADMIN')
    hostory.replace('/login')
  }

  return (
    <header>
      <div className='logo'></div>
      <ul>
        {menu
          ? menu.map((item: any, index: number) => (
              <li
                key={index}
                className={index === label.pid - 1 ? 'active' : ''}
                onClick={() => onSelect(item)}>
                <IconFont type={item.icon} />
                {item.label}
              </li>
            ))
          : null}
      </ul>
      <Poptip
        content={
          <div className='exit' onClick={exit}>
            退出
          </div>
        }>
        <Avatar icon='UserOutlined' size='small' />
        <span className='name'>admin</span>
      </Poptip>
    </header>
  )
}

export default Header
