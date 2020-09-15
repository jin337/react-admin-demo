import React from 'react'

import './index.css'
import { IconFont } from '../index'

export interface LabelPagesProps {
  list?: any
  label?: any
  onRemove?: any
  onSelect?: any
}

interface LabelProps {
  label: string
  path: string
  index?: number
}

const LabelPages = (props: LabelPagesProps) => {
  const { label, list, onRemove, onSelect } = props

  // 选中事件
  const selectLabel = (item: LabelProps) => {
    onSelect(item)
  }
  // 关闭事件
  const Remove = (item: LabelProps) => {
    let copyList: any = [...list]
    let index: number | null = null
    for (let i = 0; i < copyList.length; i++) {
      const element = copyList[i]
      if (element === item) {
        index = i
      }
    }
    copyList.splice(index, 1)
    let select = { ...label }
    if (!copyList.includes(select)) {
      if (copyList.length) {
        select = copyList[copyList.length - 1]
      } else {
        select = {}
      }
    }
    onRemove(copyList, select)
    onSelect(select)
  }
  // 关闭所有
  const removeAll = () => {
    onRemove([], {})
  }
  // 关闭其他
  const removeOther = () => {
    let copyList: LabelProps[] = [...list]
    let other = copyList.filter((item: LabelProps) => item === label)
    onRemove(other, label)
  }

  return (
    <div className='label-pages'>
      <div className='direction'>
        <IconFont type='leftoutlined' />
      </div>

      <div className='label-list'>
        <div className='item-box'>
          {list
            ? list.map((item: LabelProps, index: number) => {
                return (
                  <div
                    className={[
                      'item',
                      label.path === item.path ? 'active' : null
                    ].join(' ')}
                    key={index}>
                    <div
                      className='label-name'
                      onClick={() => selectLabel(item)}>
                      <span></span>
                      <div className='name'>{item.label}</div>
                    </div>
                    <div className='label-show'>{item.label}</div>
                    <IconFont
                      type='closeoutlined'
                      onClick={() => Remove(item)}
                    />
                  </div>
                )
              })
            : null}
        </div>
      </div>

      <div className='close-box'>
        <div className='direction'>
          <IconFont type='rightoutlined' />
        </div>
        <div className='direction icon'>
          <IconFont type='closeoutlined' />
          <ul className='operate'>
            <li onClick={removeAll}>关闭所有</li>
            <li onClick={removeOther}>关闭其他</li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default LabelPages
