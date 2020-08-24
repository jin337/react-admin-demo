import React from 'react'
import { BrowserRouter, Switch, Route, Redirect, useLocation } from 'react-router-dom'
import Cookie from 'js-cookie'
import router, { RouteType } from './router/index'

import './assets/css/react.css'

export interface AppProps {}

const App: React.SFC<AppProps> = () => {
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

const ToLogin = () => {
  let location = useLocation()
  return location.pathname === '/' ? <Redirect exact from='/' to='/login' /> : null
}

const SubRoutes = (route: RouteType) => {
  let isBool = !route.requireAuth || !!Cookie.get('CGB-BP-USER')

  return isBool ? <Route path={route.path} render={(props) => <route.component {...props} routes={route.routes} />} /> : <Redirect to='/login' />
}

export default App
