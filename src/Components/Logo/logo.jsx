import React from 'react'
import "./logo.css"
import logoText from "../../Assets/Nexcent-logo.svg"
import logo from "../../Assets/Icon.svg"
function Logo() {
  return (
    <div>
        <div className="container">
            <div className="logo">
                <img src={logo} alt="logo-avatr" className="logo-avatar" />
                <img src={logoText} alt="logo-text" className="logo-text" />
            </div>  
        </div>   
    </div>
  )
}
export default Logo
