import React, { Component } from 'react';
import { Image } from 'react-bootstrap';
import logo from '../../assets/logo.png'

export default class Logo extends Component {
    render() {
        return(
          <Image style={{ height: '100px', width: '100px' }} src={logo} circle />
        );      
    };
};