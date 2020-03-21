import React, { Component } from 'react';
import { connect } from 'react-redux';
import { RouterStates } from '../types';
import Routes from '../routes';

class App extends Component {
  render() {
    return (
      <Routes></Routes>
    );
  }
}

function mapStateToProps(state: RouterStates) {
  return {
    location: state.router.location.pathname
  };
}

export default connect(mapStateToProps)(App);
