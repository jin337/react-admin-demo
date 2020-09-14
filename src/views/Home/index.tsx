import React, { Fragment } from 'react'
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

const Home = () => {
  return (
    <Fragment>
      <Header></Header>
      <LabelPages></LabelPages>
      <main>
        <Route />
      </main>
      <Footer></Footer>
    </Fragment>
  )
}

export default Home
