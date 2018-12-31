import React from 'react';
import createEmpty from '../../core/createEmpty';
import createRandom from '../../core/createRandom';
import './styles.css';

const width = 80;
const height = 40;

export default class Drawer extends React.Component {
  state = {
    matrix: createEmpty(width, height),
    key: new Date()
  }

  componentDidMount () {
    global.cursorColr = 'red';
    document.addEventListener('mousedown', this.onMouseDown);
    document.addEventListener('mouseup', this.onMouseUp);
    
  }
  

  onMouseDown = () => { global.isHover=true;}
  onMouseUp = () => {global.isHover = false;}

  render() {
    const {
      matrix,
      key
    } = this.state;

    return  (
      <div className="Drawer" key={key}>
        {
          matrix.map((row, idx) => (
            <div className="itemsRow" key={idx}>
              {renderRow(row)}
            </div>
          ))
        }
        
      </div>
    )
  }
}

const renderRow = (row) => (
  row.map((color, idx) => <Item key={idx} color={color} />)
)

class Item extends React.PureComponent {
  state = {
    backgroundColor: this.props.color || '#eee'
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
      this.setState({backgroundColor: global.cursorColr})
    }
  }

  onMouseDown = () => {
    this.setState({backgroundColor: global.cursorColr})
  }

  render () {
    const {
      backgroundColor
    } = this.state;

    return (
      <div ref="item" className="drawerItem" style={{backgroundColor}}></div>
    )
  }
}
