import React, { Component } from 'react';
import './App.css';
import Nav from './components/Nav';
import WhereAmINowMap from './components/Now';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <Nav />
        </header>
        <WhereAmINowMap />
      </div>
    );
  }
}

export default App;
