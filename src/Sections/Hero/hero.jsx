import React from 'react'
import "./hero.css"
import heroImage from "../../Assets/hero.svg"
import { H1, Span } from '../../Components/Typography/typography'
import GreenBtn from "../../Components/Buttuns/Green Buttun/greenBtn"
function Hero() {
  return (
    <section className='hero-section '>
        
        <div className="container d-flex">
            
            <div className="hero-content">
                <H1>
                    Lessons and insights <br /><Span>from 8 years</Span>
                </H1>
                <p>Where to grow your business as a photographer: site or social media?</p>
                <GreenBtn text =" Register "/>
            </div>
            <div className="hero-image">
                <img src={heroImage} alt="heroImage" />
            </div>
            
        </div>
        <div className="circles ">
            <div className="circle active"></div>
            <div className="circle"></div>
            <div className="circle"></div>
        </div>
      
    </section>
  )
}

export default Hero
