import Login from '../views/Login'
import Home from '../views/Home'

import AdminHome from './../pages/admin/Home/index'
import TeacherHome from './../pages/teacher/Home/index'
import SchoolHome from './../pages/school/Home/index'

export interface RouteType {
  path?: string
  name?: string
  component?: (() => JSX.Element) | any
  requireAuth?: boolean | number[]
  routes?: void
}

const user = [1, 2, 3, 4, 5]
const admin = [1, 2, 3]
const school = [4]
const teacher = [5]

const router: RouteType[] = [
  {
    path: '/login',
    name: 'Login',
    component: Login
  },
  {
    path: '/home',
    name: 'Home',
    component: Home,
    requireAuth: user
  },
  {
    path: '/home/admin-index',
    name: 'AdminHome',
    component: AdminHome,
    requireAuth: admin
  },
  {
    path: '/home/school-index',
    name: 'SchoolHome',
    component: SchoolHome,
    requireAuth: school
  },
  {
    path: '/home/teacher-index',
    name: 'TeacherHome',
    component: TeacherHome,
    requireAuth: teacher
  }
]

export default router
