import React from 'react'
import './experience.css'
import {BsPatchCheckFill} from 'react-icons/bs'

const Experience = () => {
    return (
        <section id='experience'>
            <h5></h5>
            <h2 className='h21'>My Skills</h2>

            <div className='container experience__container'>
                <div className='experience__frontend'>
                    <h3></h3>
                    <div className="experience__content">
                        <article className='experience__details'>
                            <BsPatchCheckFill />
                        <div>
                            <h4>React js</h4>
                            <small className='text-light'></small>
                        </div>
                        </article>
                        <article className='experience__details'>
                            <BsPatchCheckFill />
                        <div>
                            <h4>Javascript  </h4>
                            <small className='text-light'></small>
                        </div>
                        </article>
                        <article className='experience__details'>
                            <BsPatchCheckFill />
                        <div>
                            <h4>HTML </h4>
                            <small className='text-light'></small>
                        </div>
                        </article>
                        <article className='experience__details'>
                            <BsPatchCheckFill />
                        <div>
                            <h4>CSS</h4>
                            <small className='text-light'></small>
                        </div>
                        </article>
                        <article className='experience__details'>
                            <BsPatchCheckFill />
                        <div>
                            <h4>Bootstrap</h4>
                            <small className='text-light'></small>
                        </div>
                        </article>
                        <article className='experience__details'>
                            <BsPatchCheckFill />
                        <div>
                            <h4>Git,Github</h4>
                            <small className='text-light'></small>
                        </div>
                        </article>

                        <article className='experience__details'>
                            <BsPatchCheckFill />
                        <div>
                            <h4>Redux</h4>
                            <small className='text-light'></small>
                        </div>
                        </article>
                        <article className='experience__details'>
                            <BsPatchCheckFill />
                        <div>
                            <h4>ES6</h4>
                            <small className='text-light'></small>
                        </div>
                        </article>

                    </div>
                </div>    
                <div className='experience__backend'>
                    <h3></h3>
                    <div className="experience__content">
                        <article className='experience__details'>
                            <BsPatchCheckFill />
                        <div>
                            <h4>Multi-tasking</h4>
                            <small className='text-light'></small>
                        </div>
                        </article>
                        <article className='experience__details'>
                            <BsPatchCheckFill />
                        <div>
                            <h4>Team Work</h4>
                            <small className='text-light'></small>
                        </div>
                        </article>
                        <article className='experience__details'>
                            <BsPatchCheckFill />
                        <div>
                            <h4>Communication Skills</h4>
                            <small className='text-light'></small>
                        </div>
                        </article>
                        <article className='experience__details'>
                            <BsPatchCheckFill />
                        <div>
                            <h4>Leadership</h4>
                            <small className='text-light'></small>
                        </div>
                        </article>
                    </div>
                </div>    

                    </div> 
        </section>
    )
}

export default Experience 