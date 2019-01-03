import React from 'react';
import {Redirect} from 'react-router-dom';
import uniqid from 'uniqid';

import PixelsGrid from '../PixelsGrid';
import ColorPicker from '../ColorPicker';
import PaintTool from '../PaintTool';
import ShareControls from '../ShareControls';
import ExportBox from '../ExportConntrols';

import CSSPreview from '../CSSPreview';

import createEmpty from '../../core/createEmpty';
import exportToCSS from '../../core/exportToCSS';

const DEFAULT_WIDTH = 16;
const DEFAULT_HEIGHT = 16;

export default class Home extends React.Component {
  state = {
    grid: createEmpty(DEFAULT_WIDTH, DEFAULT_HEIGHT),
    css: null,
    draftID: null
  }

  componentDidMount () {
    console.log(this.props)
  }

  _onGridChanged = grid => {
    this.setState({grid});
  }

  _onMouseUp = () => {
    if (this.props.creatingNew && !this.state.draftID) {
      this.setState({draftID: uniqid()})
    } 
  }

  render () {
    const {
      grid,
      css,
      draftID
    } = this.state;
    const {
      creatingNew
    } = this.props
    // if (draftID) return <Redirect to={`/new/${draftID}`} />;
    return (
      <div className="row m-0" style={{height: '100%'}}>
        {creatingNew && draftID && <Redirect to={`/new/${draftID}`} />}
        <div className="p-2">
          <ColorPicker />
          <PaintTool />
          <ExportBox onExportToCSSClick={() => {this.setState({css: exportToCSS(grid)} )}} />
          {css && <CSSPreview css={css}/>}
        </div>
        <PixelsGrid grid={grid} onGridChanged={this._onGridChanged} onMouseUp={this._onMouseUp} />
        <div className="p-2">
          <ShareControls />
        </div>
      </div>
    )
  }
}