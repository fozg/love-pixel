import React from 'react';
import Panel from '../Panel';

export default ({onExportToCSSClick}) => (
  <Panel title="Export">
    <input type="submit" value="Export to CSS" onClick={onExportToCSSClick}></input>
  </Panel>
)
