import React from 'react'
import '../styles/Contact.css'
import '../styles/App.css'

function Contact() {

    var d = new Date();
    var year = d.getFullYear();

    return (
        <div className='contact'>

            <h3 className='contact-title'>Connect</h3>
            <p className='copyright'> © {year} Pratham Kumar Luker</p>

            <div className='contact-icons'>
                <div className='c-icon github' data-tooltip='Github'><a href='https://github.com/Pluffy2217'><i className="fab fa-github fa-lg"></i></a></div>
                <div className='c-icon mail' data-tooltip='Mail'><a href='mailto:prathamkl7@gmail.com'><i className="fas fa-envelope fa-lg"></i></a></div>
                <div className='c-icon linkedin' data-tooltip='Linkedin'><a href='https://www.linkedin.com/in/pratham-luker-444226202/'><i className="fab fa-linkedin-in fa-lg"></i></a></div>
                <div className='c-icon discord' data-tooltip='Discord'><a href='https://discordapp.com/users/510107491321774080/'><i className="fab fa-discord fa-lg"></i></a></div>
            </div>

        </div>
    )
}

export default Contact

