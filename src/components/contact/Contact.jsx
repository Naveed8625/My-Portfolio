import React from 'react'
import './contact.css'
import {MdOutlineEmail} from 'react-icons/md'
import {} from 'react-icons/bs'
import {FaGithub} from 'react-icons/fa'


const Contact = () => {
    return (
        <section id="contact">
            <h5>Get in touch</h5>
            <h2>Contact Me_</h2>
            <div className='container contact__container'>
                <div className='contact__options'>
                    <article className='contact__option'>
                <MdOutlineEmail />
                    <h4>Email</h4>
                    <h5>syedalinaveed456@gmail.com</h5>
                    <a href="syedalinaveed456@gmail.com" taget="_blank">Send a message</a>
                    </article>
                <article className='contact__option'>
                <FaGithub className='contact__option-icon'/>
                    <h4>Github</h4>
                    <h5></h5>
                    <a href="https://github.com/Naveed8625">Github here</a>
                    </article>
                </div>
            <form action="">

                <input type="text" name="name" placeholder="Your Full Name" required />
                <input type="email" name="email" placeholder="Your Email" required />
                <textarea name="message" rows="7" placeholder='Your message' requried> </textarea>
                <button type="submit" className='btn btn-primary'>Send Message</button>
            </form>
        </div>
    </section>
    );  
}

export default Contact