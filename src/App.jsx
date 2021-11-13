import React, { Component } from 'react';
import Dashboard from './pages/Dashboard';
// import States from './components/States/States';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

export default class App extends Component {
  render() {
    return (
      <>
        <Dashboard />
        {/* <States/> */}
      </>
    )
  }
}

