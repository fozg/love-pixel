import React from 'react';
import SideModal from '../SideModal';

export default class CSSPreview extends React.Component {

  render() {
    const {css} = this.props;
    return (
      <SideModal>
        <strong>Preview:</strong>
        <div style={{height: '50%'}}>
          <style>{css}</style>
          <div className="heart-pixel-css"></div>
        </div>
        <strong>CSS:</strong>

        <code className="code">
          {css}
        </code>
      </SideModal>
    )
  }
}