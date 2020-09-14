import React, { useEffect, useState } from 'react'

import './index.css'
import { IconFont } from '../index'

export interface LabelPagesProps {
  list?: any;
  onRemove?: any;
  onSelect?: any;
}

const LabelPages = (props: LabelPagesProps) => {
  const { list, onRemove, onSelect } = props
  const [Label, setLabel] = useState(null)

  useEffect(() => {
    let select = list.filter((e: any) => !!e.select === true)
    setLabel(select[0])
  }, [list])

  const selectLabel = (index: any) => {
    onSelect(index)
  }

  const Remove = (index: any) => {
    let copyList: any = [...list]
    copyList.splice(index, 1)
    onRemove(copyList)
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
                    className={['item', Label === item ? 'active' : null].join(
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
            <li>关闭所有</li>
            <li>关闭其他</li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default LabelPages
