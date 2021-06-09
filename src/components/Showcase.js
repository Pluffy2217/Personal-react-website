    // eslint-disable-next-line no-unused-vars
    import React, { useState } from 'react'
    import '../styles/Showcase.css'
    import { showcaseList } from "../assets/showcaseContent/projectsImages";
    import KeyboardArrowLeftOutlinedIcon from '@material-ui/icons/KeyboardArrowLeftOutlined';
    import KeyboardArrowRightOutlinedIcon from '@material-ui/icons/KeyboardArrowRightOutlined';
    
    function Showcase({ slides }) {

        const [current, setCurrent] = useState(0);
        const length = slides.length; 
    
        function nextSlide() {
            setCurrent(current === length - 1 ? 0 : current + 1);
        }
        
        function prevSlide() {
            setCurrent(current === 0 ? length - 1 : current - 1);
        }
        
    
        if(!Array.isArray(slides) || slides.length <= 0) {
            return null;
        }
    
        return (
            <div className="slider">
                <div className="projectShowcase">Project Showcase</div>
                <div className="cardParent">
                <KeyboardArrowLeftOutlinedIcon className="left-arrow" onClick={prevSlide}/> 
                
                <div className="card">
                {showcaseList.map((listItem, index) => {
                    return(
                        <div className={index === current ? "slide active" : "slide"} key={index}>
                            {index === current && (
                                <div className="innerdiv">
                                    <img src={listItem.image} alt="a" className="sliderImage"></img>
                                    <h2 className="innerdivTitle">{listItem.title}</h2>
                                    <p className="innerdivContent">{listItem.content}</p>
                                </div>)}
                                 <div className='links'>
                                    <a href={listItem.url}><i className="fas fa-link fa-lg"></i></a>
                                    <a href={listItem.github}><i className="fab fa-github fa-lg"></i></a>
                                </div>
                        </div>
                    );
                })}
                </div>
                <KeyboardArrowRightOutlinedIcon className="right-arrow" onClick={nextSlide}/>
                
                </div>
     
            </div>
        );
    }
    
    export default Showcase
    