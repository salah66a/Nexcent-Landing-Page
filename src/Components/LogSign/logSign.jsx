import React from 'react'
import "./log-sign.css"
import LightBtn from '../Buttuns/Light Buttun/lightBtn'
import GreenBtn from "../Buttuns/Green Buttun/greenBtn.jsx"
function LogSign() {
  return (
    <div className='log-sign'>
      <LightBtn text ="Login"/>
      <GreenBtn text="Sign Up"/>
    </div>
  )
}

export default LogSign
