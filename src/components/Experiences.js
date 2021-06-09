import React from 'react'
import '../styles/Experience.css'
import '../styles/App.css'
import nodejs from '../assets/nodejs-icon.svg'
import reacticon from '../assets/react-2.svg'
import nextjs from '../assets/nextjs-3.svg'
import mongoDB from '../assets/mongodb-icon-1.svg'

function Experiences() {
    return (
        <div className='experience'>
            <h3>Experience</h3>

            <div className='icons'>
                <div className='node-icon' data-tooltip='Node.js'><img src={nodejs} alt='nodejs-icon' className='icon'/></div>
                <div className='react-icon' data-tooltip='React'><img src={reacticon} alt='react-icon' className='icon'/></div>
                <div  className='next-icon' data-tooltip='Next.js'><img src={nextjs} alt='nextjs-icon' className='icon'/></div>
                <div className='mongo-icon' data-tooltip='MongoDB'><img src={mongoDB} alt='mongodb-icon' className='icon'/></div>
            </div>
        </div>
    )
}

export default Experiences
