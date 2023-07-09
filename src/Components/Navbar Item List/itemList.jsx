import React from 'react'
import "./item-list.css"
function NavbarItemList() {
  return (
    <div>
        <ul className='nav-item-list'>
            <li><a href="#home">Home</a></li>
            <li><a href="#services">Service</a></li>
            <li><a href="#feature">Feature</a></li>
            <li><a href="#product">Product</a></li>
            <li><a href="#testimonial">Testimonial</a></li>
            <li><a href="#FAQ">FAQ</a></li>
        </ul>
    </div>
  )
}

export default NavbarItemList
