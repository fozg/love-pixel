import React from 'react';
import {logPageView} from '../utils/ga';

export default class Exprole extends React.Component {

  componentDidMount () {
    logPageView();     
  }
  render () {
   
    return (
      <div className="MyPixels">
        <h3 style={{padding: 20}}>Comming soon</h3>
      </div>
    )
  }
}