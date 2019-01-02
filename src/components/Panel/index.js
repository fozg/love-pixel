import React from 'react';

import './styles.css';

export default ({title, children, width}) => (
  <div className="Panel" style={{width}}>
    <strong className="Panel-title">{title}</strong>
    <div>
      {children}
    </div>
  </div>
)
