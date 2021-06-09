import React from 'react'
import '../styles/App.css'
import '../styles/About.css'
import aboutImage from '../assets/cirnu.png'

function About() {
    return (
        <div className="about">
            <div className='about-content'>    
                <p className='about-p'>
                <img src={aboutImage} alt='about-me-img' className='about-img'/>
                <h1 className="about-heading">About me</h1>
                I'm a 19 year old college student, trying to learn and improve my technical skills so I can help businesses and communities with all my honest work. Looking forward to working together and gain more experience :D</p>
            </div>
        </div>
    )
}

export default About
