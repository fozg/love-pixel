import React, { Component } from 'react';
import Panel from '../Panel';
import {loadConfig, saveConfig} from '../../core/paintToolConfig';


import './styles.css';

const COLORS = [
  '#f44336', '#e91e63', '#9c27b0' , '#663ab7',
  '#3f51b5', '#2096f3', '#04a8f4', '#02bcd4', 
  '#009688', '#4caf50', '#8bc34a', '#cddc39',
  '#ffeb3b', '#fec107', '#ff9803', '#ff5722', 
]

export default class ColorPicker extends Component {

  state = {
    inputValue: '',
    seletedColor: null
  }
  
  componentDidMount () {
    let config = loadConfig();
    this.setState({inputValue: config.primaryColor, seletedColor: config.primaryColor })
  }

  onInputChange = e => {
    this.setState({inputValue: e.target.value})
  }

  onSubmit = e => {
    e.preventDefault();
    // TODO: Validate color first
    global.pixelConfig.primaryColor = this.state.inputValue;
  }

  onSeletedColor = (seletedColor) => {
    global.pixelConfig.primaryColor = seletedColor;
    this.setState({seletedColor, inputValue: seletedColor});
    saveConfig('primaryColor', seletedColor)
  }

  render () {
    const {seletedColor} = this.state;

    return (
      <Panel title="Color" width={300}>
        <div className="Color-Colors">
          {
            COLORS.map((color, idx) => (
              <div
                key={color}
                style={{backgroundColor: color, borderColor: seletedColor === color ? '#fff': 'transparent'}} 
                className="Color-pickerItem"
                onClick={() => {this.onSeletedColor(color)}}
              ></div>
            ))
          }
        </div>
        <div className="row m-0 mt-1 align-items-center justify-content-center Color-inputWrap">
          <input type="text" onChange={this.onInputChange} value={this.state.inputValue} style={{flex: 1}} className="mr-1"></input>
          <input type="submit" onClick={this.onSubmit} value="Apply"/>
        </div>
      </Panel>
    )
  }
}
