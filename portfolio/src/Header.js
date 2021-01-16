import React from 'react'
import './Header.css'
import Button from 'react-bootstrap/Button'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Link } from 'react-scroll'

function Header(){

    return (
        <div className="header">
            <h1 className="headerName">DIVYAM PATEL</h1>
            <div className="headerButtons">
                <Link to="aboutMe" spy={true} smooth={true}>
                    <Button className="header-button" variant="outline-light">About Me</Button>
                </Link>
                <Link to="projects" spy={true} smooth={true}>
                    <Button className="header-button" variant="outline-light">Projects</Button>
                </Link>
                <Link to="experiences" spy={true} smooth={true}>
                    <Button className="header-button" variant="outline-light">Experience</Button>
                </Link>
            </div>

        </div>
    )
}

export default Header; 
