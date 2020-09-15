import React from 'react'

import './index.css'
import { IconFont } from '../index'

export interface LabelPagesProps {
  list?: any;
  value?: any;
  onRemove?: any;
  onSelect?: any;
}

const LabelPages = (props: LabelPagesProps) => {
  const { value, list, onRemove, onSelect } = props

  // 选中事件
  const selectLabel = (index: number) => {
    onSelect(index)
  }
  // 关闭事件
  const Remove = (index: number) => {
    let copyList: any = [...list]
    copyList.splice(index, 1)

    let select = value
    if (value === index) {
      if (copyList.length) {
        select = copyList.length - 1
      } else {
        select = 0
      }
    }
    onRemove(copyList, select)
  }
  // 关闭所有
  const removeAll = () => {
    onRemove([], 0)
  }
  // 关闭其他
  const removeOther = () => {
    let copyList: any = [...list]
    let other = copyList.filter((e: any, index: number) => index === value)
    onRemove(other, value)
  }

  return (
    <div className='label-pages'>
      <div className='direction'>
        <IconFont type='leftoutlined' />
      </div>

      <div className='label-list'>
        <div className='item-box'>
          {list
            ? list.map((item: any, index: any) => {
                return (
                  <div
                    className={['item', value === index ? 'active' : null].join(
                      ' '
                    )}
                    key={index}>
                    <div
                      className='label-name'
                      onClick={() => selectLabel(index)}>
                      <span></span>
                      <div className='name'>{item.label}</div>
                    </div>
                    <div className='label-show'>{item.label}</div>
                    <IconFont
                      type='closeoutlined'
                      onClick={() => Remove(index)}
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
