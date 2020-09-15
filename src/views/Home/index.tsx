import React, { Fragment, useEffect, useState } from 'react'
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
    label: '管理台啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦',
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

  // 筛选当前选中项
  const backRoute = (router: any, value: any) => {
    const now = router.filter((e: any) => e.name === value.name)
    return now[0] || {}
  }

  // 默认选择
  useEffect(() => {
    let isBool = !labelList.length
    if (isBool) {
      let first = menu[0]
      setLabelList([first])
      setValue(first)

      let label = backRoute(router, first)
      if (!!label.component) {
        first.component = label.component
        hostory.push(first.path)
        setActiveRoute(first)
      }
    }
  }, [hostory, labelList, value])

  // 切换标签&无当前标签，则添加
  const addLabel = (value: any) => {
    let label = backRoute(router, value)
    if (!!label.component) {
      value.component = label.component
      hostory.push(value.path)
    }

    setValue(value)
    setActiveRoute(label)

    if (!labelList.includes(value) && !!value.path) {
      let copyList = [...labelList]
      copyList.push(value)
      setLabelList(copyList)
    }
  }

  // 删除标签
  const removeLabel = (data: any, value: any) => {
    setLabelList(data)
    setValue(value)
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
