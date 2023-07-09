import React from 'react'
import "./light-btn.css"
function LightBtn(props) {
  return (
    <div className='light-btn'>
        <button>{props.text}</button>
    </div>
  )
}

export default LightBtn
