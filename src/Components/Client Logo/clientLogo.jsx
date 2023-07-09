import React from 'react'
import "./client-logo.css"
function ClientLogo(props) {
  return (
    <div className='client-logo'>
        <img src={props.logo} alt="client logo" />
    </div>
  )
}

export default ClientLogo
