import React, { Component } from 'react';

import Drawer from './components/Drawer';
import ColorPicker from './components/ColorPicker';

import './App.css';
class App extends Component {
  render() {
    return (
      <div className="App">
        Test
        <Drawer />
        <ColorPicker />
      </div>
    );
  }
}

export default App;
