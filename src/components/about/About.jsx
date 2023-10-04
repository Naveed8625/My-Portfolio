import React from 'react'
import './about.css'
import ME from '../../assets/me-about.jpg'
import { FaAward } from 'react-icons/fa'
import { FiUsers } from 'react-icons/fi'
import { VscFolderLibrary } from 'react-icons/vsc'

const About = () => {
    return (
        <section id='about'>
            {/* <h5>Get to know</h5> */}
            <h2>About me</h2>

            <div className="container about__container">
                <div className="about__me">
                    <div className="about__me-image">
                        <img src={ME} alt="About Image" height="500px" />
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
                        Hello, I'm a front end developer with 1.5 years of experience in web development.
                        I seek a role in a company where I can contribute my ideas and be mentored toward a successful career. Seeking assignments in an organization that allows me to utilize my skills and nurture them so that I can contribute highly to the organization's growth individually as well as in the Team while being resourceful, innovative, and flexible. Exceptional knowledge of working across multiple environments supporting different business goals. Team player with leadership qualities like analytical,logical, and problem-solving skills.
                         </p>

                    <a href="#contact" className='btn btn-primary'>Contact detail </a>
                </div>

            </div>


        </section>
    )
}

export default About 