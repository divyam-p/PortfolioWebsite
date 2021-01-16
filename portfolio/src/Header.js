import React from 'react'
import './Header.css'
import Button from 'react-bootstrap/Button'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Link } from 'react-router-dom'

function Header(){

    const handleScroll = (e) => {
        e.preventDefault();
        const main = this.main.current;
        window.scrollTo({
            top: main.offsetTop,
            left: 0,
            behavior: "instant"
        });
    };
    return (
        <div className="header">
            <h1 className="headerName">DIVYAM PATEL</h1>
            <div className="headerButtons">
                <Link onClick={handleScroll} to="about" spy={true} smooth={true}>
                    <Button className="header-button" variant="outline-light">About Me</Button>
                </Link>
                <Button className="header-button" variant="outline-light">Projects</Button>
                <Button className="header-button" variant="outline-light">Experience</Button>
            </div>

        </div>
    )
}

export default Header; 
