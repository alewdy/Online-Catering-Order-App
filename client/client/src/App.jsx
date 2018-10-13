import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from './components/home/home';
import Catering from './components/catering/catering';
import Checkout from './components/checkout/checkout';
import Navbar from './components/customNav/customNav';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
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
