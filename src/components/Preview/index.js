import React from 'react';
import exportToStyleInline from '../../core/exportToStyleInline';

export default class Preview extends React.Component {
  render() {
    const {
      grid
    } = this.props;
    let gridWidth = grid[0].length;
    let gridHeight = grid.length;
    return (
      <div style={{height: 10 * (gridHeight + 2), width: 10 * (gridWidth + 2), display: 'block'}}>
        <div
          style={
            exportToStyleInline(grid, 10)
          }
        >

        </div>
      </div>
    )
  }
}