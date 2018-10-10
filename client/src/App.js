import React, { Component } from 'react';
import './App.css';
import { Layout, Header, Navigation, Drawer, Content } from 'react-mdl';


class App extends Component {
  render() {
    return (
      <div style={{ height: '300px', position: 'relative' }}>
        <Layout style={{ background: 'url(http://www.getmdl.io/assets/demos/transparent.jpg) center / cover' }}>
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
