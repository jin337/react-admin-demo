import React from 'react'

import './index.css'

export interface PoptipProps {
  content?: any
  children?: any
}

const Poptip = (props: PoptipProps) => {
  const { content, children } = props

  return (
    <div className="poptip-wrap">
      <div className="regular-wrap">{children}</div>
      <div className="poptip-box">
        <div className="poptip-content">{content}</div>
      </div>
    </div>
  )
}

export default Poptip
