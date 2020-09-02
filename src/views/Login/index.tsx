import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useHistory } from 'react-router-dom'
import Cookie from 'js-cookie'

// 导入组件
import { Input, Checkbox, Button } from './../../components'

// 导入样式
import './index.css'

// 页面主体
const Login = () => {
  const hostory = useHistory()
  const dispatch = useDispatch()
  const { login } = useSelector((state: any) => state)

  const submit = () => {
    let key = {
      username: login.username,
      password: login.password
    }
    let type = Object.values(key).every((e) => e !== '')
    if (type) {
      Cookie.set('REACT-ADMIN', key)
      hostory.replace('/home')
    }
  }

  return (
    <div className='login-box'>
      <div className='card-wrap'>
        <div className='title'>{login.themeName}</div>
        <form className='form-box'>
          <div className='form-item'>
            <Input
              value={login.username}
              onChange={(e: any) => dispatch({ type: 'setUser', data: { username: e.target.value } })}
              prefix='UserOutlined'
              placeholder='请填写用户名'
            />
          </div>
          <div className='form-item'>
            <Input
              type='password'
              value={login.password}
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
              <Button size='large' long type='primary' onClick={submit}>
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
