import React, { Component } from 'react';
import './App.css';
import { Layout, Header, Navigation, Drawer, Content } from 'react-mdl';


class App extends Component {
  render() {
    return (
      <div style={{ height: '300px', position: 'relative' }}>
        <Layout style={{ background: 'url(https://images.pexels.com/photos/264537/pexels-photo-264537.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260) center / cover' }}>
          <Header transparent title="Unidos Supermarket" style={{ color: 'white' }}>
            <Navigation>
              <a href="/">Home</a>
              <a href="/">Flyer Sign Up</a>
              <a href="/">Catering</a>
              <a href="/">Sign out</a>
            </Navigation>
          </Header>
          <Drawer title="Title">
            <Navigation>
              <a href="/">Home</a>
              <a href="/">Flyer Sign Up</a>
              <a href="/">Catering</a>
              <a href="/">Sign out</a>
            </Navigation>
          </Drawer>
          <Content />
        </Layout>
      </div>

    );
  }
}

export default App;
