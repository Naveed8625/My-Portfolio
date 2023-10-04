import React from 'react'
import CV from '../../assets/SYED-Front-End-Dev Resume.pdf'


const CTA = () => {
    return (
        <div className='cta'>
        <a href={CV} download className='btn'>Download CV</a>
        <a href="#contact" className='btn btn-primary'>Contact detail </a>
        </div>
        
    )
}

export default CTA