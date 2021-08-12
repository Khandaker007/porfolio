import React from 'react'

// COMPONENTS
import CustomButton from '../../components/custom-button/custom-button.component'

// IMAGE
import myPhoto from '../../asset/image/Khandaker.jpg'
import phylosophyImage from '../../asset/image/phylosophy.jpg'

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
            <div className="heading-2">
                <span className='heading'>Front-end Web</span>
                <span className='heading'>Development</span>
            </div>
            <p className="text">Front-end web development is the development of the graphical user interface of a website, through the use of HTML, CSS, and JavaScript, so that users can view and interact with that website.</p>
        </div>
        <div className="cv-download">
            {/* <hr className='horizontal-line' /> */}
            <div className="button-container">
                <CustomButton text='download CV'/>
            </div>
        </div>
        <div className="philosophy-content">
            <h1 className="heading-1">Philosophy & values</h1>
            <p className="text">I think everyone wants the same thing - relationship with <br/> humanity, peace with metaphysical, and experience with the <br /> universe. I try to group these things with my values, authenticity, <br /> creativity, & hospitality.</p>
            <a href='#' className="philosophy-content__about-link">More about me</a>
        </div>
        <div className="philosophy-image">
            <img className='image' src={phylosophyImage} alt="phylosophy image" />
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