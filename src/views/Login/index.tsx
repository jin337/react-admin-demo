import React from 'react'
import { useSelector } from 'react-redux'

// 导入组件
import { Input, Checkbox, Button } from './../../components'

// 导入样式
import './index.css'

// 类型集合
export interface LoginProps {}

// 页面主体
const Login: React.SFC<LoginProps> = () => {
  const { login } = useSelector((state: any) => state)
  // const dispatch = useDispatch()

  return (
    <div className='login-box'>
      <div className='card-wrap'>
        <div className='title'>{login.themeName}</div>
        <form className='form-box'>
          <div className='form-item'>
            <Input prefix='UserOutlined' placeholder='请填写用户名' />
          </div>
          <div className='form-item'>
            <Input prefix='UnlockOutlined' placeholder='请填写密码' />
          </div>
          <div className='form-item online'>
            <Checkbox>记住密码</Checkbox>
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
