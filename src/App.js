import React, { Component } from 'react';
import Main from './containers/Main';
import './typography.css';

class App extends Component {
  render() {
    return (
      <div>
        <header style={{ padding: '0px 15px' }}>
          <h1>Trello, World</h1>
        </header>
        <Main />
      </div>
    );
  }
}

export default App;
