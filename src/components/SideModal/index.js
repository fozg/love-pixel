import React from 'react';

import './styles.css';

export default class  SideModal extends React.Component {

  render () {
    const {
      children
    } = this.props;
    return (
      <div className="SideModal">
        {children}
      </div>
    )
  }
}