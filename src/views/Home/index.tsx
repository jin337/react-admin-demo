import React, { Fragment, useState } from 'react'
import { Route } from 'react-router-dom'

// 导入组件
import { LabelPages } from './../../components'
import Header from './Header'
import Footer from './Footer'

import './index.css'

export interface HomeProps {}

const menu: any = [
  {
    label: '工作台',
    pid: 1,
    icon: 'reconciliationfilled',
    path: '/home/admin-index'
  },
  {
    label: '数据计算',
    pid: 2,
    icon: 'fundfilled',
    path: '/home/school-index'
  },
  {
    label: '管理台',
    pid: 3,
    icon: 'settingfilled',
    path: '/home/teacher-index'
  }
]

const list: any = [
  {
    label: '主页',
    path: '/home',
    pid: 2
  }
]

const Home = () => {
  const [labelList, setLabelList] = useState(list)
  const [value, setValue] = useState(labelList[0])

  // 切换标签&无当前标签，则添加
  const addLabel = (value: any) => {
    setValue(value)
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
        <Route />
      </main>
      <Footer />
    </Fragment>
  )
}

export default Home
