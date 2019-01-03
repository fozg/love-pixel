import React from 'react';
import Panel from '../Panel';

export default ({
  onExportToCSSClick,
  onExportToPNG
}) => (
  <Panel title="Export">
    <input type="submit" value="Export to CSS" onClick={onExportToCSSClick}></input>
    <input type="submit" value="Export to PNG" onClick={onExportToPNG}></input>
  </Panel>
)
