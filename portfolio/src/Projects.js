import React from 'react'
import './Projects.css'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import Badge from 'react-bootstrap/Badge'

function Projects({projects}) {
    return (
        <div className="projects">
            { 
            projects.map((project) => (
                <Card>
                    <Card.Body>
                        <Card.Title><h3><Badge variant="dark">{project.name}</Badge></h3></Card.Title>
                        <Card.Text>
                            {project.description.split('\n').map((line) => ( 
                                <p>{line}</p>
                            ))}
                        </Card.Text>
                        <Button variant="primary">Go somewhere</Button>
                    </Card.Body>
                </Card>
            ))}
        </div> 
    )
}

export default Projects
