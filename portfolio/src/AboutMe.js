import React from 'react'
import './AboutMe.css'
import Jumbotron from 'react-bootstrap/Jumbotron'
import { HiOutlineMail } from 'react-icons/hi'
import { SiLinkedin } from 'react-icons/si'
import { VscGithub } from 'react-icons/vsc'
import {compose} from 'react-icons-kit/ionicons/compose'
import { Icon } from 'react-icons-kit'

function AboutMe(){
    return (
        <div className="aboutMe" id="aboutMe">
            <Jumbotron>
                <div className="aboutMeContent">
                    <h1 id="aboutMeHeader">Hey, I'm Divyam</h1>
                    <div className="aboutMeDescription">
                    <p>
                    I'm a third year Co-op Computer Science student at University of Toronto Scarborough (UTSC), specializing in the Software Engineering Stream. 
                    </p>
                    <h5>CGPA: 3.89 [Scale 4.0]</h5>
                    </div>
                    <div className="aboutMeIcons">
                        <a href="mailto:divyam.patel@mail.utoronto.ca">
                            <HiOutlineMail className="iconStyle"/>
                        </a>
                        <a href="https://www.linkedin.com/in/divyamp/" rel="noreferrer" target="_blank">
                            <SiLinkedin className="iconStyle"/>
                        </a>
                        <a href="https://github.com/divyam-p" rel="noreferrer" target="_blank">
                            <VscGithub className="iconStyle"/>
                        </a>
                        <a href="https://drive.google.com/file/d/1YGzj0ntFRr_tyJ777KVxwvUoHtO8bTaR/view?usp=sharing" rel="noreferrer" target="_blank">
                            <Icon className="iconStyle" size={50} icon={compose} />
                        </a>
                    </div>
                </div>
            </Jumbotron>
        </div>
    )
}

export default AboutMe
