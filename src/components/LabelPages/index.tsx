import React from 'react'

import './index.css'
import { IconFont } from '../index'

export interface LabelPagesProps {}

const LabelPages = (props: LabelPagesProps) => {
  const {} = props

  return (
    <div className='label-pages'>
      <div className='direction'>
        <IconFont type='leftoutlined' />
      </div>

      <div className='label-list'></div>

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
