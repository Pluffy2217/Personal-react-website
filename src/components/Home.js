// eslint-disable-next-line no-unused-vars
import React from "react";
import '../styles/Home.css'
import '../styles/App.css'
import Video from '../assets/Particles.mp4'

function Home() {
    return (
    <div className="home">
        <video src={Video} autoPlay loop muted />
        <h1>I'm Pratham</h1>
        <p>A web developer.</p>
    </div> 
    )
}
export default Home;