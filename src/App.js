import React, { Component } from 'react';
import './reset.css'
import './App.css';
import router from './components/router'

class App extends Component {
  render() {
    return (
      <div className="background">
        {router}
      </div>
    );
  }
}

export default App;
