import React, { Fragment } from 'react'
import { Route } from 'react-router-dom'

// 导入组件
import { Poptip, Avatar } from './../../components'

import './index.css'

export interface HomeProps { }
interface HeaderProps { }
interface FooterProps { }

const Header: React.SFC<HeaderProps> = () => {
  return (
    <header>
      <div className='logo'></div>
      <div>111</div>
      <Poptip content={'退出'}>
        <Avatar icon='UserOutlined' />
        <span className='name'>111</span>
      </Poptip>
    </header>
  )
}

const Footer: React.SFC<FooterProps> = () => {
  return <footer>this is page footer</footer>
}

const Home: React.SFC<HomeProps> = () => {
  return (
    <Fragment>
      <Header></Header>
      <main>
        <Route />
      </main>
      <Footer></Footer>
    </Fragment>
  )
}

export default Home
