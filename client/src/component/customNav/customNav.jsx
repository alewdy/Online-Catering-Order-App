import React, { Component } from 'react';
import { Navbar, Nav, NavItem } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Logo from '../logo/logo'
import './customNav.css'

export default class CustomNav extends Component {
    render() {
        return(
          <Navbar style={{height: '100px', backgroundColor: 'transparent'}} default collapseOnSelect>
            <Navbar.Header>
                    <Link to="/"><Logo /></Link>
                <Navbar.Toggle />
            </Navbar.Header>
            <Navbar.Collapse>
                <Nav pullRight>
                    <NavItem eventKey={1} componentClass={Link} href="/" to="/">
                        Home
                    </NavItem>
                    <NavItem eventKey={2} componentClass={Link} href="/catering" to="/catering">
                        Catering
                    </NavItem>
                    <NavItem eventKey={3} componentClass={Link} href="/checkout" to="/checkout">
                        Checkout
                    </NavItem>
                </Nav>
            </Navbar.Collapse>
          </Navbar>
        );      
    };
};