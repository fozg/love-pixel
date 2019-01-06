/**
 * Export to Style inline
 * idea from https://github.com/jvalen/pixel-art-react
 */

export default function (grid, pixelSize = 15) {
  let boxShadow = '';
  grid.forEach((rowArray, x) => {
    rowArray.forEach((cell, y) => {
      // if (cell) {
        let cellShadow = `${(y + 1) * pixelSize}px ${(x + 1) * pixelSize}px 0 ${cell || 'rgba(255,255,255, .1)'}, `;
        boxShadow += cellShadow;
      // }
    });
  });
  boxShadow = boxShadow.slice(0, 0-2);
  let style = {
    boxShadow: boxShadow,
    width: pixelSize,
    height: pixelSize,
  }
  return style;
}