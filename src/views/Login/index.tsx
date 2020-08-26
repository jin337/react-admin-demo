import React, { useState } from 'react'
import { connect } from 'react-redux'
import DemoList from './../../store/demo-list'

import './index.css'

export interface LoginProps {
  count?: any
  dispatch?: void
}

const Login = ({ DemoList }: any) => {
  const [data, setData] = useState(DemoList.newType)

  return <div className='Login'>{data}</div>
}

export default connect(() => DemoList)(Login)
