import React, { Fragment, useState } from 'react'
import { Route, useHistory } from 'react-router-dom'
import Cookie from 'js-cookie'

// 导入组件
import { Poptip, Avatar, LabelPages } from './../../components'

import './index.css'

export interface HomeProps {}

const Header = () => {
  const hostory = useHistory()

  const exit = () => {
    Cookie.remove('REACT-ADMIN')
    hostory.replace('/login')
  }

  return (
    <header>
      <div className='logo'></div>
      <ul></ul>
      <Poptip
        content={
          <div className='exit' onClick={exit}>
            退出
          </div>
        }>
        <Avatar icon='UserOutlined' />
        <span className='name'>admin</span>
      </Poptip>
    </header>
  )
}

const Footer = () => {
  return <footer>this is page footer</footer>
}

const list: any = [
  {
    label: '11111',
    select: true,
    path: '/home/admin-index'
  },
  {
    label: '22222',
    path: '/home/school-index'
  },
  {
    label: '33333',
    path: '/home/teacher-index'
  }
]

const Home = () => {
  const [labelList, setLabelList] = useState(list)
  const [value, setValue] = useState(0)

  // 切换标签
  const selectLabel = (index: any) => {
    setValue(index)
  }
  // 删除标签
  const removeLabel = (data: any, index: number) => {
    setLabelList(data)
    setValue(index)
  }

  return (
    <Fragment>
      <Header></Header>
      <LabelPages
        value={value}
        list={labelList}
        onSelect={selectLabel}
        onRemove={removeLabel}></LabelPages>
      <main>
        <Route />
      </main>
      <Footer />
    </Fragment>
  )
}

export default Home
