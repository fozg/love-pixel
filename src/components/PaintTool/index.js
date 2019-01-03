import React, { Component } from 'react';
import Panel from '../Panel';
import {loadConfig, saveConfig} from '../../core/paintToolConfig';
import './styles.css';

export default class ColorPicker extends Component {
  state = {
    tool: 'pen'
  }

  componentDidMount () {
    this.setState({tool: loadConfig().paintTool});
  }

  _useTool = (tool) => {
    global.pixelConfig.paintTool = tool;
    this.setState({tool})
    saveConfig('paintTool', tool)
  }

  render () {
    return (
      <Panel title="Paint tool" width={300}>
        {
          ['pen', 'eraser', 'fill'].map((t, idx) => (
            <input 
              type='submit' 
              key={idx}
              value={t}
              onClick={() => {this._useTool(t)}} 
              className={t === this.state.tool ? 'PaintTool-active' : ''}
            />
          ))
        }
      </Panel>
    )
  }
}
