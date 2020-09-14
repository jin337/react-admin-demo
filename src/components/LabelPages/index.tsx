import React, { useEffect, useState } from 'react'

import './index.css'
import { IconFont } from '../index'

export interface LabelPagesProps {
  list?: any;
}

const LabelPages = (props: LabelPagesProps) => {
  const { list } = props
  const [Label, setLabel] = useState(null)

  useEffect(() => {
    let active = list.filter((e: any) => e.select === true)
    setLabel(active[0])
  }, [list])

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
                      onClick={() => setLabel(list[index])}>
                      <span></span>
                      <div className='name'>{item.label}</div>
                    </div>
                    <div className='label-show'>{item.label}</div>
                    <IconFont type='closeoutlined' />
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
