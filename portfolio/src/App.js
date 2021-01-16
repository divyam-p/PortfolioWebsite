import React from 'react'
import Header from './Header.js'
import './App.css'
import projects from './defaultProjects.js'
import Projects from './Projects.js'
import AboutMe from './AboutMe.js'
import Experiences from './Experiences.js'
import experiences from './defaultExperiences.js'
import { BrowserRouter } from 'react-router-dom' 

const App = () => {
  return (
    <div className="main">
      <BrowserRouter>
        <Header />
        <AboutMe id="about"/>
        <Projects projects={projects}/>
        <Experiences experiences={experiences}/>
      </BrowserRouter>
    </div>
  )
}

export default App
