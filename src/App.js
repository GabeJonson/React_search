import React, { Component } from 'react';

import Users from './components/Users';

import './App.css';

class App extends Component {
  render() {
    const url = 'https://randomuser.me/api/?results=500';

    return (
      <div className="container-fluid">
        <div className="container">
          <Users url={url} />
        </div>
      </div>
    );
  }
}

export default App;
