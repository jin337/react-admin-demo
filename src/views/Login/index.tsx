import React from 'react'
import { useSelector, useDispatch } from 'react-redux'

// 导入组件
import Input, { InputProps } from './../../components/Input'

// 导入样式
import './index.css'

// 类型集合
export interface LoginProps {
  Input: InputProps
}

// 页面主体
const Login: React.SFC<LoginProps> = () => {
  const { login } = useSelector((state: any) => state)
  const dispatch = useDispatch()

  return (
    <div className='login-box'>
      <div className='card-wrap'>
        <div className='title'>{login.themeName}</div>
        <div>
          <Input prefix='UserOutlined' />
        </div>
      </div>
    </div>
  )
}

export default Login
