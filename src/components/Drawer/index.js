import React from 'react';
import './styles.css';

const width = 40;
const height = 20;

export default class Drawer extends React.Component {

  componentDidMount () {
    global.cursorColr = 'red';
    document.addEventListener('mousedown', this.onMouseDown)
    document.addEventListener('mouseup', this.onMouseUp)
  }
  onMouseDown = () => { global.isHover=true;}
  onMouseUp = () => {global.isHover = false;}
  render() {
    return  (
      <div className="Drawer">
        {
          new Array(height).fill(0).map((o, idx) => (
            <div className="itemsRow" key={idx}>
              {renderRow(width)}
            </div>
          ))
        }
        
      </div>
    )
  }
}

const renderRow = (width) => (
  new Array(width).fill(0).map((o, idx) => <Item key={idx} />)
)

class Item extends React.PureComponent {
  state = {
    backgroundColor: '#eee'
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
