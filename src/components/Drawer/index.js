import React from 'react';
// import {Redirect} from 'react-router-dom';
import uniqid from 'uniqid';

import PixelsGrid from '../PixelsGrid';
import ColorPicker from '../ColorPicker';
import PaintTool from '../PaintTool';
import ExportBox from '../ExportConntrols';

import CSSPreview from '../CSSPreview';

import createEmpty from '../../core/createEmpty';
import exportToCSS from '../../core/exportToCSS';
import exportToPNG from '../../core/exportToPNG';
import {save, get} from '../../core/storage';

const DEFAULT_WIDTH = 32;
const DEFAULT_HEIGHT = 32;
const DELAY_SAVE_TIME = 1000; // 1 second

export default class Drawer extends React.Component {
  state = {
    grid: createEmpty(DEFAULT_WIDTH, DEFAULT_HEIGHT),
    css: null,
    draftId: this.props.draftId || null,
    isGridChanged: false,
  }

  componentDidMount () {
    if (!this.props.creatingNew && this.props.draftId) {
      let grid = get(this.props.draftId);
      // if null, create new grid with id = draftId passed from props
      if (!grid) return;
      this.setState({grid});
      this.refs.pixelGrid.reload(); // trickger
    }
  }

  _onGridChanged = grid => {
    this.setState({grid, isGridChanged: true});
    if (!this.props.creatingNew) {
      
      this._delaySave(() => {save(this.state.draftId,  grid);}) 
    }
  }

  _delaySave = (cb) => {
    clearTimeout(this.timeoutSave)
    this.timeoutSave = setTimeout(cb, DELAY_SAVE_TIME);
  }

  _onMouseUp = () => {
    if (this.props.creatingNew && !this.state.draftId && this.state.isGridChanged) {
      let uid = uniqid();
      this.setState({draftId: uid});
      save(uid, this.state.grid);
      this.props.history.push(`/new/${uid}`, 'Pixelove');
    }
  }

  render () {
    const {
      grid,
      css,
      draftId
    } = this.state;
    const {
      creatingNew
    } = this.props
    // if (draftId) return <Redirect to={`/new/${draftId}`} />;
    return (
      <div className="row m-0" style={{height: '100%'}}>
        {/* {creatingNew && draftId && <Redirect to={`/new/${draftId}`} />} */}
        <div className="p-2">
          <ColorPicker />
          <PaintTool />
          <ExportBox 
            onExportToCSSClick={() => {this.setState({css: exportToCSS(grid)} )}}
            onExportToPNG={() => {exportToPNG(grid)}}
           />
          {css && <CSSPreview css={css}/>}
        </div>
        <PixelsGrid ref="pixelGrid" grid={grid} onGridChanged={this._onGridChanged} onMouseUp={this._onMouseUp} />
      </div>
    )
  }
}