import React from 'react'
import "./green-btn.css"
function GreenBtn(props) {
  return (
    <div className='green-btn'>
      <button>{props.text}</button>
    </div>
  )
}

export default GreenBtn
