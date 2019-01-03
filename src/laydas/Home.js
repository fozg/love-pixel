import React from 'react';

import Drawer from '../components/Drawer';

export default class Home extends React.Component {
  
  render () {
    const {
      location
    } = this.props;
    return (
      <Drawer creatingNew={location.pathname === '/new' || location.pathname === '/new/'} />
    )
  }
}