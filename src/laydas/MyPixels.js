import React from 'react';
import Preview from '../components/Preview';
import {getAll} from '../core/storage';

export default class MyPixels extends React.Component {
  state = {
    grids: []
  }
  componentDidMount () {
    setTimeout(() => {
      let grids = getAll();
      console.log('get grids')
      console.log(grids)
      this.setState({grids }) 
    });
  }
  render () {
    const {grids} = this.state;

    return (
      <div className="MyPixels">
        {grids.map((item, idx) => <div key={item.id} 
          style={{display: 'inline-block', margin: 10}}
          className="MyPixels__listItem"
        >
          <Preview grid={item.grid}/>
        </div>)}
      </div>
    )
  }
}