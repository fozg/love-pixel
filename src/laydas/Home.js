import React from 'react';
import Drawer from '../components/Drawer';
import {logPageView} from '../utils/ga';

export default class Home extends React.Component {
  componentDidMount () {
    logPageView()
  }
  render () {
    const {
      location,
      history
    } = this.props;
    let locationSplit = location.pathname.split('/');
    let draftId = locationSplit.length === 3 ? location.pathname.split('/').slice(-1)[0] : null;
    return (
      <Drawer
        key={location.pathname}
        creatingNew={location.pathname === '/new' || location.pathname === '/new/'}
        draftId={draftId}
        history={history}
      />
    )
  }
}