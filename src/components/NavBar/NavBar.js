import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import './NavBar.css';

function NavBar() {
    return (
        <Navbar expand='lg'>
            <Navbar.Brand href='/'>Yummy Town</Navbar.Brand>
            <Navbar.Toggle aria-controls='basic-navbar-nav' />
            <Navbar.Collapse id='basic-navbar-nav'>
                <Nav className='ml-auto'>
                    <Nav.Link href='/'>Home</Nav.Link>
                    <Nav.Link href='/recipes'>Recipes</Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
}

export default NavBar;
