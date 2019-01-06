import React from 'react';
import {Link} from 'react-router-dom'
import Preview from '../components/Preview';
import {getAll} from '../core/storage';

export default class MyPixels extends React.Component {
  state = {
    grids: []
  }
  componentDidMount () {
    setTimeout(() => {
      let grids = getAll();
      
      this.setState({grids }) 
    });
  }
  render () {
    const {grids} = this.state;

    return (
      <div className="MyPixels">
        <h3 style={{padding: 20}}>My Pixels</h3>
        {grids.length == 0 && <h5 style={{paddingLeft: 20}}>
          You don't have any Pixel. Let <Link to="/new">Create new</Link> one
        </h5>} 
        {grids.map((item, idx) => <Link key={item.id} 
          to={`/new/${item.id.split('|')[1]}`}
          style={{display: 'inline-block', margin: 10}}
          className="MyPixels__listItem"
        >
          <Preview grid={item.grid}/>
        </Link>)}
      </div>
    )
  }
}