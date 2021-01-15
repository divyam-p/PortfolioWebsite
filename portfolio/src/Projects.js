import React from 'react'
import './Projects.css'
import Card from 'react-bootstrap/Card'
import Dropdown from 'react-bootstrap/Dropdown'
import DropdownButton from 'react-bootstrap/DropdownButton'
import { VscGithub } from 'react-icons/vsc'

function Projects({projects}) {
    return (
        <div className="projects">
            <h1 className="projectsTitle">Projects</h1> 
            { 
            projects.map((project) => (
                <Card>
                    <Card.Body>
                        <div className="projectHeader">
                            <Card.Title id="cardTitle"><h3 className="projectName">{project.name}</h3></Card.Title>
                            <a href={project.gitLink} rel="noreferrer" target="_blank">
                                <VscGithub className="githubIcon"/>
                            </a>
                        </div>
                        <Card.Text id="cardDescription">
                            {project.description.split('\n').map((line) => ( 
                                <p>{line}</p>
                            ))}
                        </Card.Text>
                        <DropdownButton id="dropdown-basic-button" title="Technologies">
                            {project.technologies.split('\n').map((tech) => (
                                <Dropdown.Item>{tech}</Dropdown.Item>
                            ))}
                        </DropdownButton>
                    </Card.Body>
                </Card>
            ))}
        </div> 
    )
}

export default Projects
