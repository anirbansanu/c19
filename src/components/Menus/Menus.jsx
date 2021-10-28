import React, { Component } from 'react';
import { Nav,Navbar,NavDropdown } from 'react-bootstrap';
import Logo from '../../logo.svg';

export default class Menus extends Component {
    render() {
        return (
            <Navbar expand='md' className="p-2 shadow mb-3">
                    <Navbar.Brand href="#home">
                        <img
                            alt=""
                            src={Logo}
                            width="30"
                            height="30"
                            className="d-inline-block align-top"
                        />{' '}
                        <b style={{fontFamily:''}}>{this.props.appTitle}</b>
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="ms-auto">
                            <Nav.Link href="#home">Home</Nav.Link>
                            <NavDropdown title="Dropdown" id="basic-nav-dropdown" >
                                <NavDropdown.Item href="#action/3.1" className=" text-light">Action</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.2" className=" text-light">Another action</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.3" className=" text-light">Something</NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item href="#action/3.4" className="">Separated link</NavDropdown.Item>
                            </NavDropdown>
                            <Nav.Link href="#link">Contact</Nav.Link>
                            <Nav.Link href="#link">About</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
            </Navbar>
        )
    }
}
