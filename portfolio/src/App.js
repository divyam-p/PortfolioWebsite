import React from 'react'
import Header from './Header.js'
import './App.css'
import projects from './defaultProjects.js'
import Projects from './Projects.js'
import AboutMe from './AboutMe.js'
import Experiences from './Experiences.js'
import experiences from './defaultExperiences.js'
import { BrowserRouter } from 'react-router-dom' 
import Particles from 'react-particles-js' 
import particlesConfig from './particlesConfig';

const App = () => {
  return (
    <div className="main">
      <Particles id="particles" params={particlesConfig}/>
      <div className="mainElements">
        <BrowserRouter>
          <Header />
          <AboutMe id="about"/>
          <Projects projects={projects}/>
          <Experiences experiences={experiences}/>
        </BrowserRouter>
      </div> 
    </div>
  )
}

export default App
