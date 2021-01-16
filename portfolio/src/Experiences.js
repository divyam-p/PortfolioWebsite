import './Experiences.css'
import React from 'react'
import Card from 'react-bootstrap/Card'

function Experiences({experiences}) {
    return (
        <div className="experiences">
            <h1 className="experienceTitle">Experience</h1> 
            { 
            experiences.map((experience) => (
                <Card>
                    <Card.Body>
                        <div className="experienceHeader">
                            <Card.Title id="cardTitle"><h3 className="experienceName">{experience.name}</h3></Card.Title>
                        </div>
                        <Card.Text id="cardDescription">
                            {experience.description.split('\n').map((line) => ( 
                                <p>{line}</p>
                            ))}
                        </Card.Text>

                    </Card.Body>
                </Card>
            ))}
        </div> 
    )
}

export default Experiences
