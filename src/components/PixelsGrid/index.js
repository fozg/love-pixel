import React from 'react';
import fillGrid from '../../core/fillGrid';
import './styles.css';

export default class PixelsGrid extends React.Component {
  shouldComponentUpdate = (nextProps, nextState) => {return this.state.key !== nextState.key}

  state = {
    key: Date.now()
  }

  componentDidMount () {
    document.addEventListener('mousedown', this.onMouseDown);
    document.addEventListener('mouseup', this.onMouseUp); 
  }

  onMouseDown = () => { global.isHover = true;}
  onMouseUp = () => { 
    global.isHover = false;
    if (this.props.onMouseUp) {
      this.props.onMouseUp();
    }
  }

  _onCellUpdated = (idx, jdx) => {
    if (this.props.onGridChanged) {
      this.props.onGridChanged(this.getNewGrid(idx, jdx));
    }
  }

  getNewGrid = (idx, jdx) => {
    let newGird = this.props.grid;
    switch (global.pixelConfig.paintTool) {
      case 'pen':
        newGird[idx][jdx] = global.pixelConfig.primaryColor;
        break;
      case 'eraser':
        newGird[idx][jdx] = null;
        break;
      case 'fill':
        if (!global.isHover) {
          newGird = fillGrid(newGird, idx, jdx, global.pixelConfig.primaryColor)
          setTimeout(() => {
            this.reload();
          }, 0);
        }
        break;
    }
    return newGird;
  }

  reload = () => {
    this.setState({key: Date.now()})
  }

  render() {
    const {
      key
    } = this.state;

    const {
      grid
    } = this.props;

    console.log({key})
    return  (
      <div className="PixelsGrid" key={key}>
        <div style={{height: grid.length * 22}}>
          {
            grid.map((row, idx) => (
              <div className="itemsRow" key={idx}>
                {renderRow(row, (jdx) => {this._onCellUpdated(idx, jdx)})}
              </div>
            ))
          }
        </div>
      </div>
    )
  }
}

const renderRow = (row, onCellUpdated) => (
  row.map((color, jdx) => <Item key={jdx} color={color} onCellUpdated={() => onCellUpdated(jdx)}/>)
)

class Item extends React.Component {
  shouldComponentUpdate(nextProps, nextState) {
    return nextState.backgroundColor !== this.state.backgroundColor
  }
  state = {
    backgroundColor: this.props.color,
  }

  componentDidMount () {
    this.refs.item.addEventListener('mouseover', this.onMouseOver);
    this.refs.item.addEventListener('mousedown', this.onMouseDown);
  }
  componentWillUnmount () {
    document.removeEventListener('mouseover', this.onMouseOver);
    document.removeEventListener('mousedown', this.onMouseDown);
  }

  onMouseOver = () => {
    if (global.isHover) {
      this.updateCell();
    }
  }

  onMouseDown = () => {
    this.updateCell();
  }

  updateCell = () => {
    switch (global.pixelConfig.paintTool) {
      case 'pen':
        this.setState({backgroundColor: global.pixelConfig.primaryColor});
        break;
      case 'eraser':
        this.setState({backgroundColor: null});
        break;
      default: break;
    }
    this.props.onCellUpdated()
  }

  render () {
    const {
      backgroundColor
    } = this.state;

    return (
      <div ref="item" className="PixelsGridItem" style={{backgroundColor}}></div>
    )
  }
}
