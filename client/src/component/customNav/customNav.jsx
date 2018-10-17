import React, { Component } from 'react';
import { Navbar, Nav, NavItem } from 'react-bootstrap';
import { Link } from 'react-router-dom';
<<<<<<< HEAD
import Logo from '../logo/logo'
import './customNav.css'
=======
import axios from 'axios'
>>>>>>> f31f4767b2b692d192cebf3b3964303697eecdd3

export default class CustomNav extends Component {
constructor() {
    super()
    this.logout = this.logout.bind(this)
}

logout(event) {
    event.preventDefault()
    console.log('logging out')
    axios.post('/user/logout').then(response => {
        console.log(response.data)
        if (response.status === 200) {
            this.props.updateUser({
                loggedIn: false,
                username: null
            })
        }
    }).catch(error => {
        console.log('Logout error')
    })
}
    
    render() {
<<<<<<< HEAD
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
=======
        const loggedIn = this.props.loggedIn;
        console.log('navbar render, props: ')
        console.log(this.props);

        return (
            <Navbar default collapseOnSelect>
                        {loggedIn ? (
                            <section className="navbar-section">
            

                             <Navbar.Header>
                             <Navbar.Brand>
                                 <Link to="/">Unidos Supermarket</Link>
                             </Navbar.Brand>
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
                             <NavItem to="#"  eventKey={4} componentClass={Link} onClick={this.logout} href="/" to="/">logout</NavItem>
                            
                             </Nav>
                         </Navbar.Collapse>
                 </section>
                        ):(
            <section>
                <Navbar.Header>
                    <Navbar.Brand>
                        <Link to="/">Unidos Supermarket</Link>
                    </Navbar.Brand>
                    <Navbar.Toggle />
                </Navbar.Header>
                <Navbar.Collapse>
                    <Nav pullRight>
                        <NavItem eventKey={1} componentClass={Link} href="/" to="/">
                            Home
>>>>>>> f31f4767b2b692d192cebf3b3964303697eecdd3
                    </NavItem>
                        <NavItem eventKey={2} componentClass={Link} href="/catering" to="/catering">
                            Catering
                    </NavItem>
                        <NavItem eventKey={3} componentClass={Link} href="/checkout" to="/checkout">
                            Checkout
                    </NavItem>
                    <NavItem eventKey={5} componentClass={Link} href="/login" to="/login">
                                     Login
                             </NavItem>
                    </Nav>
                </Navbar.Collapse>
                </section>
                )}
            </Navbar>
        );


        };
    }