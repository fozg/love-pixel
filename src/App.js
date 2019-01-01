import React, { Component } from 'react';

import Drawer from './components/Drawer';
import ColorPicker from './components/ColorPicker';
import ExportBox from './components/ExportBox';
import CSSPreview from './components/CSSPreview';
import createEmpty from './core/createEmpty';
import initialSetup from './initialSetup';
import exportToCSS from './core/exportToCSS';
import './App.css';

const DEFAULT_WIDTH = 16;
const DEFAULT_HEIGHT = 16;

class App extends Component {
  state = {
    grid: createEmpty(DEFAULT_WIDTH, DEFAULT_HEIGHT),
    css: null
  }

  componentDidMount () {
    initialSetup();
  }

  _onGridChanged = grid => {
    this.setState({grid});
  }
  
  render() {
    const {
      grid,
      css
    } = this.state;

    return (
      <div className="App">
        Test
        <Drawer grid={grid} onGridChanged={this._onGridChanged}/>
        <ColorPicker />
        <ExportBox onExportToCSSClick={() => {this.setState({css: exportToCSS(grid)} )}} />
        {css && <CSSPreview css={css}/>}
      </div>
    );
  }
}

export default App;
