import React from 'react'
import './about.css'
import ME from '../../assets/me-about.jpg'
import { FaAward } from 'react-icons/fa'
import { FiUsers } from 'react-icons/fi'
import { VscFolderLibrary } from 'react-icons/vsc'

const About = () => {
    return (
        <section id='about'>
            <h5>Get to know</h5>
            <h2>About me</h2>

            <div className="container about__container">
                <div className="about__me">
                    <div className="about__me-image">
                        <img src={ME} alt="About Image" />
                    </div>
                </div>

                <div className="about__content">
                    <div className="about__cards">
                        <article className="about__card">
                            <FaAward className='about__icon' />
                            <h5>Education</h5>
                            <small> Diploma Engineering</small>
                        </article>

                        <article className="about__card">
                            <FiUsers className='about__icon' />
                            <h5>Internships</h5>
                            <small>Tekisky Software Pvt Ltd</small>
                        </article>

                        <article className="about__card">
                            <VscFolderLibrary className='about__icon' />
                            <h5>Projects</h5>
                            <small></small>
                        </article>
                    </div>

                    <p>
                        Hello ! I'm an inspired developer with a focus on Machine Learning and Front-end development. Check out my projects to see how I apply my skills to create meaningful projects and software.
                        I’m currently pursuing my education in Information Technology domain from Thakur college of Engineering and Technology
                        Skilled in public speaking and presenting technical ideas with confidence and clarity.I’m looking to collaborate on Machine Learning and Web development internships
                    </p>

                    <a href="#contact" className='btn btn-primary'>Contact detail </a>
                </div>

            </div>


        </section>
    )
}

export default About 