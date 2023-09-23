import React from 'react'
import './footer.css'


const Footer = () => {
    return (
        <footer id='ftr'>
            <a href='#' className='footer__logo'></a>

        <ul className='permalinks'>
            <li><a href='#'>Home</a></li>
            <li><a href='#about'>About</a></li>
            <li><a href='#experience'>Experience</a></li>
            <li><a href='#services'>Certificates</a></li>
            <li><a href='#portfolio'>Projects</a></li>
            <li><a href='#contact'>Contact</a></li>
            
        </ul>
        </footer>
    )
}

export default Footer 