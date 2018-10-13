import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Jumbotron, Grid, Row, Col, Image, Button } from 'react-bootstrap';
import './home.css';

export default class Home extends Component {
    render() {
        return (
            <Grid>
                <Jumbotron>
                    <h2>Welcome</h2>
                    <Link to="/catering">
                        <Button bsStyle="primary">Catering</Button>
                    </Link>
                    <Link to="/Checkout">
                        <Button bsStyle="primary">Checkout</Button>
                    </Link>
                </Jumbotron>
            </Grid>
        );
    };
};