import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Jumbotron, Grid, Row, Col, image, Button } from 'react-bootstrap';
import './home.css';

export default class Home extends Component {
    reander() {
        return(
            <grid>
                <Jumbotron>
                    <h2>Welcome</h2>
                </Jumbotron>
                <Link to="/about">
                <Button>About</Button>
                </Link>
            </grid>              
        )
    }
}