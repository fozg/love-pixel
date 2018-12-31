import React, { Component } from 'react';

export default class ColorPicker extends Component {

  state = {
    inputValue: '#eee'
  }

  onInputChange = e => {
    this.setState({inputValue: e.target.value})
  }

  onSubmit = e => {
    e.preventDefault();
    global.cursorColr = this.state.inputValue;
  }

  render () {
    return (
      <div>
        <input onChange={this.onInputChange} value={this.state.inputValue}></input>
        <input type="submit" onClick={this.onSubmit} value="Apply"/>
      </div>
    )
  }


}