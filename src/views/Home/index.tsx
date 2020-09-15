import React, { Fragment, useState } from 'react'
import { Route, useHistory } from 'react-router-dom'

// 导入组件
import { LabelPages } from './../../components'
import Header from './Header'
import Footer from './Footer'

// 全局路由
import router from '../../router/index'

// 样式
import './index.css'

export interface HomeProps {}

const menu: any = [
  {
    label: '工作台',
    pid: 1,
    icon: 'reconciliationfilled',
    path: '/home/admin-index',
    name: 'AdminHome'
  },
  {
    label: '数据计算',
    pid: 2,
    icon: 'fundfilled',
    path: '/home/school-index/1',
    name: 'SchoolHome'
  },
  {
    label: '管理台',
    pid: 3,
    icon: 'settingfilled',
    path: '/home/teacher-index/2',
    name: 'TeacherHome'
  }
]

const list: any = []

const Home = () => {
  const [activeRoute, setActiveRoute] = useState({})
  const [labelList, setLabelList] = useState(list)
  const [value, setValue] = useState([])

  const hostory = useHistory()

  // 切换标签&无当前标签，则添加
  const addLabel = (value: any) => {
    setValue(value)
    hostory.push(value.path)

    const now = router.filter((e) => e.name === value.name)
    value.component = now[0].component
    if (value.component) {
      setActiveRoute(value)
    }

    if (!labelList.includes(value)) {
      let copyList = [...labelList]
      copyList.push(value)
      setLabelList(copyList)
    }
  }

  // 删除标签
  const removeLabel = (data: any, value: any) => {
    setLabelList(data)
    setValue(value)

    if (!value.path) {
      hostory.push('/home')
    }
  }

  return (
    <Fragment>
      <Header label={value} menu={menu} onSelect={addLabel}></Header>
      <LabelPages
        label={value}
        list={labelList}
        onSelect={addLabel}
        onRemove={removeLabel}></LabelPages>
      <main>
        <Route {...activeRoute} />
      </main>
      <Footer />
    </Fragment>
  )
}

export default Home
