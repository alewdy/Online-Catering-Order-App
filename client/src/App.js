import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from './component/home/home';
import Catering from './component/catering/catering';
import Checkout from './component/checkout/checkout';
import Navbar from './component/customNav/customNav';

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Navbar />
          <Route exact path="/" component={Home} />
          <Route path="/catering" component={Catering} />
          <Route path="/checkout" component={Checkout} />
        </div>
      </Router>
    );
  }
}

export default App;
