import React from 'react'
import './portfolio.css'
import IMG1 from '../../assets/portfolio1.jpg'
import IMG2 from '../../assets/portfolio2.jpg'
import IMG3 from '../../assets/portfolio3.jpg'
import IMG4 from '../../assets/portfolio4.jpg'
import IMG5 from '../../assets/portfolio5.png'
import IMG6 from '../../assets/portfolio6.jpg'


const Portfolio = () => {
    return (
        <section id='portfolio'>
            <h5>My Recent Work </h5>
            <h2>Projects </h2>
        
        <div className='container portfolio__container'>
            <article className='portfolio__item'>
                <div className='portfolio__item-image'>
                    <img src={IMG1} alt=""/>
                </div>
                <h3></h3>
                <a href="https://github.com/Khushisingh20/Chatbot-using-Python" className='btn' target='_blank'>Chatbot on Mental Health</a>

            </article>
            <article className='portfolio__item'>
                <div className='portfolio__item-image'>
                    <img src={IMG2} alt=""/>
                </div>
                <h3></h3>
                <a href="https://github.com/Khushisingh20/breast-cancer-prediction" className='btn' target='_blank'>Breast Cancer Classification</a>

            </article>
            <article className='portfolio__item'>
                <div className='portfolio__item-image'>
                    <img src={IMG3} alt=""/>
                </div>
                <h3></h3>
                <a href="https://github.com/Khushisingh20/Jack-travera" className='btn' target='_blank'>Jack Travera</a>

            </article>
            <article className='portfolio__item'>
                <div className='portfolio__item-image'>
                    <img src={IMG4} alt=""/>
                </div>
                <h3></h3>
                <a href="https://github.com/Khushisingh20/COVID19UpdateTracker" className='btn' target='_blank'>Covid-19 Update Tracker</a>

            </article>
            <article className='portfolio__item'>
                <div className='portfolio__item-image'>
                    <img src={IMG5} alt=""/>
                </div>
                <h3></h3>
                <a href="https://github.com/Khushisingh20/Personal-assistant" className='btn' target='_blank'>Personal Assistant</a>

            </article>
            <article className='portfolio__item'>
                <div className='portfolio__item-image'>
                    <img src={IMG6} alt=""/>
                </div>
                <h3></h3>
                <a href="https://github.com/Khushisingh20" className='btn' target='_blank'>Github</a>

            </article>
        </div>
        </section>
        
    )
}

export default Portfolio 