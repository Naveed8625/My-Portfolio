import React from 'react'
import './header.css'
import CTA from './CTA'
import ME from '../../assets/me-about2.jpg'

const Header = () => {
    return (
        <header>
            <div className="container header__container">
            {/* <h5>Hello I'm</h5> */}
            <h1>Syed Naveed Ali</h1>
            <h3 className="text-light">Front-end Developer</h3>
            <CTA />



            <div className='me'>
                <img src={ME} alt="me" height="460px"/>
            </div>

            <a href="#contact" className="scroll__down">Scroll Down</a>



            </div>
        </header>
    )
}

export default Header 