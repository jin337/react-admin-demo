import React from 'react'
import {
  BrowserRouter,
  Switch,
  Route,
  Redirect,
  useLocation
} from 'react-router-dom'
import Cookie from 'js-cookie'

// 重置全局样式
import './assets/css/react.css'

// 全局路由
import router, { RouteType } from './router/index'

// 强制重定向到 /login 页面
const ToLogin = () => {
  let location = useLocation()
  let isBool = !Cookie.get('REACT-ADMIN')
  return location.pathname === '/' || isBool ? (
    <Redirect exact to='/login' />
  ) : null
}

// 子页面
const SubRoutes = (route: RouteType) => {
  let isBool = !route.requireAuth || !!Cookie.get('REACT-ADMIN')
  return isBool ? (
    <Route
      path={route.path}
      render={(props) => <route.component {...props} routes={route.routes} />}
    />
  ) : (
    <ToLogin />
  )
}

// 页面主体
const App = () => {
  return (
    <BrowserRouter>
      <ToLogin />
      <Switch>
        {router.map((route, i) => (
          <SubRoutes key={i} {...route} />
        ))}
      </Switch>
    </BrowserRouter>
  )
}

export default App
