import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import './NavBar.css';

function NavBar() {
    return (
        <div className='recipe-nav container'>
            <Navbar expand='lg'>
                <Navbar.Brand href='/'>Yummy Town</Navbar.Brand>
                <Navbar.Toggle aria-controls='basic-navbar-nav' />
                <Navbar.Collapse id='basic-navbar-nav'>
                    <Nav className='mr-auto'>
                        <Nav.Link href='/'>Home</Nav.Link>
                        <Nav.Link href='/recipes'>Recipes</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </div>
    );
}

export default NavBar;
