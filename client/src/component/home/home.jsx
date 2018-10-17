import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Jumbotron, Grid, Row, Col, FormGroup, FormControl, Button } from 'react-bootstrap';
import { Card, CardBody } from 'reactstrap';
import './home.css';

export default class Home extends Component {
    render() {
        return (
            <Grid>
                <Jumbotron>
                    <h2>Location</h2>
                <FormGroup controlId="formControlsSelect">
                            <FormControl componentClass="select" placeholder="select">
                                <option value="kissimmee">Kissimmee | 1200 Simpson Rd Kissimmee, Florida</option>
                                <option value="poinciana">Poinciana | 2433 Pleasant Hill Rd Kissimmee, Florida</option>
                                <option value="deltona">Deltona | 1870 Providence Blvd Deltona, Florida</option>
                            </FormControl> 
                        </FormGroup>
                        <Link to="/catering">
                            <Button bsStyle="primary">Continue</Button>
                        </Link>
                </Jumbotron>
            </Grid>
        );
    };
};