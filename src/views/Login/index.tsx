import React from 'react'
import { useSelector, useDispatch } from 'react-redux'

// 导入组件
import { Input, Checkbox, Button } from './../../components'

// 导入样式
import './index.css'

// 类型集合
export interface LoginProps {}

// 页面主体
const Login: React.SFC<LoginProps> = () => {
  const { login } = useSelector((state: any) => state)
  const { user } = useSelector((state: any) => state.login)
  const dispatch = useDispatch()

  return (
    <div className='login-box'>
      <div className='card-wrap'>
        <div className='title'>{login.themeName}</div>
        <form className='form-box'>
          <div className='form-item'>
            <Input
              value={user.username}
              onChange={(e: any) => dispatch({ type: 'setUser', data: { username: e.target.value } })}
              prefix='UserOutlined'
              placeholder='请填写用户名'
            />
          </div>
          <div className='form-item'>
            <Input
              value={user.password}
              onChange={(e: any) => dispatch({ type: 'setUser', data: { password: e.target.value } })}
              prefix='UnlockOutlined'
              placeholder='请填写密码'
            />
          </div>
          <div className='form-item online'>
            <Checkbox checked={login.remove} onChange={() => dispatch({ type: 'removeUser' })}>
              记住密码
            </Checkbox>
            <div className='right'>
              <Button size='large' long type='primary'>
                登录
              </Button>
            </div>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Login
