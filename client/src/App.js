import React, { Component } from 'react';
import axios from 'axios'
import './App.css';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Home from './component/home/home';
import Catering from './component/catering/catering';
import DeltonaCatering from './component/catering/deltona-cater';
import PoincianaCatering from './component/catering/poinciana-cater';
import Checkout from './component/checkout/checkout';
import Navbar from './component/customNav/customNav';
import LoginForm from './component/login/login-form';
import Signup from './component/sign-up';
import Logo from './component/logo/logo'

class App extends Component {

  constructor() {
    super()
    this.state = {
      loggedIn: false,
      username: null
    }

    this.getUser = this.getUser.bind(this)
    this.componentDidMount = this.componentDidMount.bind(this)
    this.updateUser = this.updateUser.bind(this)
  }

  componentDidMount() {
    this.getUser()
  }

  updateUser(userObject) {
    this.setState(userObject)
  }

  getUser() {
    axios.get('/user/').then(response => {
      console.log('Get user response: ')
      console.log(response.data)
      if (response.data.user) {
        console.log('Get User: There is a user saved in the server session: ')

        this.setState({
          loggedIn: true,
          username: response.data.user.username
        })
      } else {
        console.log('Get user: no user');
        this.setState({
          loggedIn: false,
          username: null
        })
      }
    })
  }

  render() {
    return (
      <Router>
        <div>
          <Link to="/"><Logo /></Link>
          <Navbar updateUser={this.updateUser} loggedIn={this.state.loggedIn} />
          {/* greet user if logged in: */}
          {this.state.loggedIn &&
            <h2 className="welcome">Welcome, {this.state.username}!</h2>
          }
          <Route exact path="/" component={Home} />
          <Route path="/kissimmee" component={Catering} />
          <Route path="/deltona" component={DeltonaCatering} />
          <Route path="/poinciana" component={PoincianaCatering} />
          <Route path="/checkout" component={Checkout} />
          <Route path="/login" render={() =>
            <LoginForm updateUser={this.updateUser} />
          } />
          <Route path="/signup" render={() =>
            <Signup />
          } />
        </div>
      </Router>
    );
  }
};


export default App;
