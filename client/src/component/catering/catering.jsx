import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import './catering.css'

export default class Catering extends Component {
    render() {
        return(
          <div className="container">
                <h2>Kissimmee Catering</h2> <Link to="/">Change location</Link>
          </div>
        );      
    };
};