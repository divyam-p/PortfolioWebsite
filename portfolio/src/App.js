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
import { SiCircle } from 'react-icons/si'
import { HiPlusCircle } from 'react-icons/hi'

const App = () => {
  return (
    <div className="main">
      <div className="particles"> 
        <Particles 
        params={{
            		particles: {
            			line_linked: {
            				shadow: {
            					enable: true,
            					color: "#3CA9D1",
            					blur: 5
            				}
            			}
            		}
            	}}/>
      </div>
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
