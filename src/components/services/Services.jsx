import React from 'react'
import './services.css'
import {BiCheck} from 'react-icons/bi'

const Services = () => {
    return (
        <section id='services'>
            <h5></h5>
            <h2>Certicates</h2>

            <div className='container services__container'>
                <article className='service'>
                    <div className='service__head'>
                        <h3>Machine Learning</h3>
                    </div>

                    <ul className='service__list'>
                        <li>
                            <BiCheck className='service__list-icon' />
                            <p>Machine Learning in Python-Udemy</p>
                        </li>
                        <li>
                            <BiCheck className='service__list-icon' />
                            <p>Python-Udemy</p>
                        </li>
                    </ul>
                </article>
                <article className='service'>
                    <div className='service__head'>
                        <h3>Data Analytics</h3>
                    </div>

                    <ul className='service__list'>
                        <li>
                            <BiCheck className='service__list-icon' />
                            <p>Data Visualization with effective insights</p>
                        </li>
                        <li>
                            <BiCheck className='service__list-icon' />
                            <p>Agile Methodology</p>
                        </li>
                        <li>
                            <BiCheck className='service__list-icon' />
                            <p></p>
                        </li>
                    </ul>
                </article>
                <article className='service'>
                    <div className='service__head'>
                        <h3>Others</h3>
                    </div>

                    <ul className='service__list'>
                        <li>
                            <BiCheck className='service__list-icon' />
                            <p>Linux-Spoken Tutorial IIT Bombay</p>
                        </li>
                        <li>
                            <BiCheck className='service__list-icon' />
                            <p></p>
                        </li>
                        <li>
                            <BiCheck className='service__list-icon' />
                            <p></p>
                        </li>
                    </ul>
                </article>

            </div>
        </section>
    )
}

export default Services