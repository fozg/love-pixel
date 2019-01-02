import React from 'react';

import PixelsGrid from '../PixelsGrid';
import ColorPicker from '../ColorPicker';
import ExportBox from '../ExportBox';
import CSSPreview from '../CSSPreview';

import createEmpty from '../../core/createEmpty';
import exportToCSS from '../../core/exportToCSS';

const DEFAULT_WIDTH = 16;
const DEFAULT_HEIGHT = 16;

export default class Home extends React.Component {
  state = {
    grid: createEmpty(DEFAULT_WIDTH, DEFAULT_HEIGHT),
    css: null
  }


  _onGridChanged = grid => {
    this.setState({grid});
  }

  render () {
    const {
      grid,
      css
    } = this.state;

    return (
      <div className="row m-0" style={{height: '100%'}}>
        <div className="p-2">
          <ColorPicker />
          <ExportBox onExportToCSSClick={() => {this.setState({css: exportToCSS(grid)} )}} />
          {css && <CSSPreview css={css}/>}
        </div>
        <PixelsGrid grid={grid} onGridChanged={this._onGridChanged}/>
      </div>
    )
  }
}