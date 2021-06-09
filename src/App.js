import React from 'react'
import Home from '../src/components/Home'
import Experiences from '../src/components/Experiences'
import About from '../src/components/About'
import Showcase from '../src/components/Showcase'
import Contact from '../src/components/Contact'
import { showcaseList } from './assets/showcaseContent/projectsImages'
import '../src/styles/App.css'

function App() {
  return (
    <div className="App">
      <Home />
      <Experiences />
      <About />
      <Showcase slides={showcaseList}/>
      <Contact />
    </div>
  );
}

export default App;
