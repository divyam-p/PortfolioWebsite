import React from 'react'
import Header from './Header.js'
import './App.css'
import projects from './defaultProjects.js'
import Projects from './Projects.js'
import AboutMe from './AboutMe.js'

const App = () => {
  return (
    <div className="main">
      <Header />
      <AboutMe />
      <Projects projects={projects}/>
    </div>
  )
}

export default App
