import React, { Component } from 'react';
import Panel from '../Panel';

import './styles.css';

export default class ColorPicker extends Component {

  render () {

    return (
      <Panel title="Paint tool" width={300}>
        <input type='submit' value='pen' />
        <input type='submit' value='eraser' />
        <input type='submit' value='fill' />
      </Panel>
    )
  }
}
