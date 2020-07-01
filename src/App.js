import React, { Component } from 'react';
import { withRouter } from 'react-router-dom'
import Routes from './config/routes'
import Navbar from './components/Navbar'


class App extends Component {

  render() {
    return (
      <>
        <Navbar/>
        <div className="container">
          <Routes />
        </div>
      </>
    )
  }
}

export default withRouter(App);
