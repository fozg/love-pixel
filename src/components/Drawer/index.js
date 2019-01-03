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
import {save, get} from '../../core/storage';

const DEFAULT_WIDTH = 16;
const DEFAULT_HEIGHT = 16;

export default class Home extends React.Component {
  state = {
    grid: createEmpty(DEFAULT_WIDTH, DEFAULT_HEIGHT),
    css: null,
    draftId: this.props.draftId || null,
    isGridChanged: false,
  }

  componentDidMount () {
    console.log(this.props)
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
      save(this.state.draftId,  grid);
    }
  }

  _onMouseUp = () => {
    if (this.props.creatingNew && !this.state.draftId && this.state.isGridChanged) {
      let uid = uniqid();
      this.setState({draftId: uid});
      save(uid, this.state.grid);
      this.props.history.push(`/new/${uid}`, 'Pixelove')
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
          <ExportBox onExportToCSSClick={() => {this.setState({css: exportToCSS(grid)} )}} />
          {css && <CSSPreview css={css}/>}
        </div>
        <PixelsGrid ref="pixelGrid" grid={grid} onGridChanged={this._onGridChanged} onMouseUp={this._onMouseUp} />
        <div className="p-2">
          <ShareControls />
        </div>
      </div>
    )
  }
}