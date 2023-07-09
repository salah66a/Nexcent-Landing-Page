import React from 'react'
import "./clients.css"
import { H2 } from '../../Components/Typography/typography'
import ClientLogo from '../../Components/Client Logo/clientLogo'
import ClientLogo1 from "../../Assets/client logo 1.svg"
import ClientLogo2 from "../../Assets/client logo 2.svg"
import ClientLogo3 from "../../Assets/client logo 3.svg"
import ClientLogo6 from "../../Assets/client logo 6.svg"
import ClientLogo4 from "../../Assets/client logo 4.svg"
import ClientLogo5 from "../../Assets/client logo 5.svg"

function Clients() {
  return (
    <section className='clients'>
        <div className="container">
        <div className="client-header">
        <H2>Our Clients</H2>
        </div>
        <p>We have been working with some Fortune 500+ clients</p>
        <div className="clients-logos">
            <ClientLogo logo={ClientLogo1}/>
            <ClientLogo logo={ClientLogo2}/>
            <ClientLogo logo={ClientLogo3}/>
            <ClientLogo logo={ClientLogo6}/>
            <ClientLogo logo={ClientLogo4}/>
            <ClientLogo logo={ClientLogo5}/>
            <ClientLogo logo={ClientLogo6}/>
        </div>
        </div>
    </section>
  )
}

export default Clients
