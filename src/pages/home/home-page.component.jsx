import React from 'react'

// IMAGE
import myPhoto from '../../asset/image/Khandaker.jpg'

import './home-page.style.scss'
import '../../sass/typography.scss'

const HomePage = () => (
    <div className='home-page'>
        <section className='hero'>
            <div className="hero__img-container">
                <img className='hero__img' src={myPhoto} alt="person image"/>
            </div>
            <div className="hero__content">
                <h1 className="heading-1">I'm Khandaker Nabiul.</h1>
                <h1 className="heading-1">A Front-end Developer</h1>
                <h3 className='heading-3'>based in Bangladesh</h3>
                <p className='text'>It is a long established fact that a reader will be distracted by the readable<br/> fact that a reader will be distracted by the readable content.</p>
            </div>
        </section>
        <div className="cv-content">
            cv content
        </div>
        <div className="cv-download">
            cv download
        </div>
        <div className="philosophy-content">
            philosophy content
        </div>
        <div className="philosophy-image">
            philosophy image
        </div>
        <div className="skills-content">
            skill content
        </div>
        <div className="skills-bar">
            skills bar
        </div>
        <section className='my-work'>
            my work
        </section>
        <div className="github-content">
            github content
        </div>
        <div className="github-image">
            github image
        </div>
        <section className='upwork-content'>
            upwork
        </section>
        <div className="upwork-image">
            upwork image
        </div>
        <div className="contact-content">
            contact content
        </div>
        <div className="contact-form">
            contact form
        </div>
        <footer className='footer'>
            footer
        </footer>
    </div>
)

export default HomePage;