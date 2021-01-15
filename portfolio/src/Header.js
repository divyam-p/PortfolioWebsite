import React from 'react'
import './Header.css'
import Button from 'react-bootstrap/Button'
import 'bootstrap/dist/css/bootstrap.min.css'

function Header(){
    return (
        <div className="header">
            <h1 className="headerName">DIVYAM PATEL</h1>
            <div className="headerButtons">
                <Button className="header-button" variant="outline-light">About Me</Button>
                <Button className="header-button" variant="outline-light">Projects</Button>
                <Button className="header-button" variant="outline-light">Experience</Button>
            </div>

        </div>
    )
}

export default Header; 
